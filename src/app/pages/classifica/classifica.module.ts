import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassificaRoutingModule } from './classifica-routing.module';
import { ClassificaComponent } from './classifica.component';


@NgModule({
  declarations: [
    ClassificaComponent
  ],
  imports: [
    CommonModule,
    ClassificaRoutingModule
  ]
})
export class ClassificaModule { }
