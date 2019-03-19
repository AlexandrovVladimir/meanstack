import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { HomeComponentComponent } from "./components/home-component/home-component.component";
import { RegistreComponent } from "./components/registre/registre.component";
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistreComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
