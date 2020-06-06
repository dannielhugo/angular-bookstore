import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'api/books';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        catchError(this.handleError<Book[]>('getBooks', []))
      );
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, this.httpOptions)
      .pipe(
        catchError(this.handleError<Book>('addBook'))
      );
  }

  deleteBook(book: Book): Observable<Book> {
    const url = `${this.booksUrl}/${book.id}`;

    return this.http.delete<Book>(url,this.httpOptions)
      .pipe(
        catchError(this.handleError<Book>('deleteBook'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
