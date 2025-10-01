// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Importa il tuo HomeComponent
import { CaniComponent } from './cani/cani.component'; // Importa il tuo CaniComponent
import { WhoComponent } from './who/who.component';

const routes: Routes = [
  // Questa rotta dice: se l'URL è VUOTO (la radice dell'app), carica HomeComponent
  { path: '', component: HomeComponent },

  // Questa rotta dice: se l'URL è '/cani', carica CaniComponent
  { path: 'cani', component: CaniComponent },
  
  { path: 'who', component: WhoComponent }, // nuova rotta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }