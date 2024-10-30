import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CacciaAlTesoroComponent } from './caccia-al-tesoro.component';

const routes: Routes = [{ path: '', component: CacciaAlTesoroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CacciaAlTesoroRoutingModule { }
