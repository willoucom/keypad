import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardfullComponent } from './boardfull/boardfull.component';

const routes: Routes = [
  { path: '', component: BoardfullComponent },
  { path: 'v2',   redirectTo: '', pathMatch: 'full' }, // redirect to 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
