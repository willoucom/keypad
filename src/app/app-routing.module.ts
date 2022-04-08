import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { BoardfullComponent } from './boardfull/boardfull.component';

const routes: Routes = [
  { path: '', component: BoardComponent },
  { path: 'v2', component: BoardfullComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
