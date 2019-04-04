import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EventoModule } from './entities/eventos/evento.module';
import { GaleriaModule } from './entities/galeria/galeria.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventoModule,
    GaleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
