import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getBookList();
  }

  private getBookList(): void {
    this.bookService.getBooks().subscribe((res: Book[]) => {
      this.books = res;
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }
}