import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ResumeComponent } from './components/resume/resume.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TopComponent } from './components/top/top.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResumeComponent,
    ChartsComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
