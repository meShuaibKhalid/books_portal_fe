import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl: string = "http://localhost:3000/books";

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(`${this.baseUrl}/getBooks`);
  }
  addBook(form: any) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = {headers: headers};
    return this.http.post<Book>(`${this.baseUrl}/addBook`, form, options);
  }

  changeBook(email: any, id: any) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = {headers: headers};
    return this.http.patch(`${this.baseUrl}/changeBook/${id}`, JSON.stringify({email}), options);
  }
}
