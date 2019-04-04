import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import { EventoListComponent } from './evento-list/evento-list.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';

@NgModule({
  declarations: [
    EventoListComponent,
    EventoDetailComponent
  ],
  imports: [
    CommonModule,
    EventoRoutingModule
  ]
})
export class EventoModule { }
