import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaniComponent } from './cani/cani.component';
import { HomeComponent } from './home/home.component';
import { WhoComponent } from './who/who.component';

@NgModule({
  declarations: [
    AppComponent,
    CaniComponent,
    HomeComponent,
    WhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
