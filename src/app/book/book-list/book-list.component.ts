import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements AfterViewInit, OnDestroy {

  data: Book[] = [];

  displayedColumns: string[] = ['id', 'title', 'author', 'publisher', 'genre', 'actions'];

  resultsLength =  0;

  private $bookSubscription: Subscription;

  constructor(
    private bookService: BookService,
  ) { }

  ngAfterViewInit(): void {
    this.$bookSubscription = this.bookService.getBooks()
      .subscribe(books => {
        this.data = books;
        this.resultsLength = books.length;
      });
  }

  ngOnDestroy(): void {
    this.$bookSubscription.unsubscribe();
  }

  deleteBook(book: Book) {
    this.data = this.data.filter(b => b.id !== book.id);
    this.bookService.deleteBook(book).subscribe();
  }
}
