import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewBookComponent } from './book/new-book/new-book.component';
import { BookListComponent } from './book/book-list/book-list.component';

const routes: Routes = [
  { path: 'book', component: NewBookComponent },
  { path: '', component: BookListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
