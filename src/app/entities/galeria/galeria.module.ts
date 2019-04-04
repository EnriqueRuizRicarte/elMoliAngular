import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaRoutingModule } from './galeria-routing.module';
import { GaleriaListComponent } from './galeria-list/galeria-list.component';

@NgModule({
  declarations: [GaleriaListComponent],
  imports: [
    CommonModule,
    GaleriaRoutingModule
  ]
})
export class GaleriaModule { }
