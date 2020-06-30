const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const SocketIO = require('socket.io');
const app = express();

const apiUrl = "https://api.covid19api.com/summary";

app.use(express.static(__dirname+'/dist/covid19'));
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/dist/covid19/index.html'));
});

// Iniciando los procesos para que el Servidor consuma la API y la pase al frontend

const server = app.listen(process.env.PORT || 8080);
const io = SocketIO(server);
var datos = undefined;

const sockett = io.on("connection", async (socket) => {
    if (datos === undefined) {
        await getData(socket);
        console.log("datos is undefined");
    } else {
        socket.emit("covid data", datos);
        console.log("Sending data via emit");
    }
});

//Revisar
//getData(sockett);
setInterval(() => getData(sockett), 600000);

function getData(socket){
    console.log("getData")
    fetch(apiUrl)
    .then(response => {
        if (response.ok){
            response.json()
            .then(data => {
                console.log("Entro")
                datos = data;
                datos.ok = true;
                socket.emit("covid data", datos);
                console.log("Sending data to client at: ");
            });
        } else {

            throw error = {
                ok: response.ok,
                url: response.url,
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
                counter: response.counter
            };
        }
        
    })
    .catch(error => {
        console.log("Sending error");
        socket.emit("covid data", error);
    });
}
