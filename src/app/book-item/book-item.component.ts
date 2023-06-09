import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book;
  viewBookDetails: Book;
  @ViewChild('displayBook') displayBook!: ElementRef;
  constructor(private service: BookService, private router: Router) {
  }

  change_book(f, id) {
    if (f.value) {
      this.service.changeBook(f.value, id).subscribe((result: { success }) => {
        if (result.success) {
          this.router.navigate(['/home']);
        } else {
          console.log("error ");
        }
      });
    } else {
      alert("Enter a valid Email Address");
    }
  }

  ngOnInit() {
  }

  showDetails(book: Book) {
    this.viewBookDetails = { ...book };
    this.displayBook.nativeElement.style.display = "block";
  }

  closeDialog() {
    this.displayBook.nativeElement.style.display = "none"
  }
}
