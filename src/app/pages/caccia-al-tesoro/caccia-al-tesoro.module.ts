import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CacciaAlTesoroRoutingModule } from './caccia-al-tesoro-routing.module';
import { CacciaAlTesoroComponent } from './caccia-al-tesoro.component';


@NgModule({
  declarations: [
    CacciaAlTesoroComponent
  ],
  imports: [
    CommonModule,
    CacciaAlTesoroRoutingModule
  ]
})
export class CacciaAlTesoroModule { }
