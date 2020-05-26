import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ResumeComponent } from './components/resume/resume.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TopComponent } from './components/top/top.component';
import { FooterComponent } from './components/footer/footer.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/es-VE';

registerLocaleData(localeFr, 'es');


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResumeComponent,
    ChartsComponent,
    TopComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [ 
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
