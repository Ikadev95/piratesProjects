import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChePirataSeiRoutingModule } from './che-pirata-sei-routing.module';
import { ChePirataSeiComponent } from './che-pirata-sei.component';


@NgModule({
  declarations: [
    ChePirataSeiComponent
  ],
  imports: [
    CommonModule,
    ChePirataSeiRoutingModule
  ]
})
export class ChePirataSeiModule { }
