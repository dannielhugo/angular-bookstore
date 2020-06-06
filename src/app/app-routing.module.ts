import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewBookComponent } from './book/new-book/new-book.component';

const routes: Routes = [
  { path: 'book', component: NewBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
