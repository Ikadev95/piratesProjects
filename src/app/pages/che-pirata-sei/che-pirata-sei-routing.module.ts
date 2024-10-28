import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChePirataSeiComponent } from './che-pirata-sei.component';

const routes: Routes = [{ path: '', component: ChePirataSeiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChePirataSeiRoutingModule { }
