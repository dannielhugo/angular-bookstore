import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  model = {
    title: '',
    author: '',
    publisher: '',
    genre: '',
  }

  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
  }

  addBook(bookForm: NgForm) {
    this.bookService.addBook(this.model as Book)
      .subscribe(() => {
        this.model = {
          title: '',
          author: '',
          publisher: '',
          genre: '',
        };

        bookForm.resetForm()
      });
  }

}
