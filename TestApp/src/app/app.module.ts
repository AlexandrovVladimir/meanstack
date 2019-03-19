import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { RegistreComponent } from './components/registre/registre.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { NoticesComponent } from './components/notices/notices.component';
import { NoticesViewportComponent } from './components/notices-viewport/notices-viewport.component';
import { AddNoticeComponent } from './components/notice-add/add-notice.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponentComponent,
    RegistreComponent,
    NoticesComponent,
    NoticesViewportComponent,
    AddNoticeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
