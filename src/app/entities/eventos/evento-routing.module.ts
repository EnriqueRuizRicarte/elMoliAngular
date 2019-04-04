import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventoListComponent } from './evento-list/evento-list.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';

const routes: Routes = [
  { path: 'eventos', component: EventoListComponent, pathMatch: 'full' },
  { path: 'evento/:id', component: EventoDetailComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
