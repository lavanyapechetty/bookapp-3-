import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../../model/book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./book.component.css'],
})
export class BookuserComponent implements OnInit {
  books: Book[] = [];
  newBook: Book = new Book('', '', '', 0, '', 0);
  selectedBook: Book | null = null;
  isbn: string = ''; // Declare isbn variable
  title: string = ''; // Declare title variable
  category: number = 0; // Declare category variable
  publisherid: number = 0; // Declare publisherid variable

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.bookService.getAllBooks().subscribe((books) => {
      this.books = books;
    });
  }

  selectBook(book: Book): void {
    this.selectedBook = { ...book };
  }

  getBookByIsbn(isbn: string): void {
    this.bookService.getBookByIsbn(isbn).subscribe((book) => {
      this.selectedBook = book;
    });
  }

  getBooksByTitle(title: string): void {
    this.bookService.getBooksByTitle(title).subscribe((books) => {
      this.books = books;
    });
  }

  getBooksByCategory(category: number): void {
    this.bookService.getBooksByCategory(category).subscribe((books) => {
      this.books = books;
    });
  }

  getBooksByPublisherid(publisherid: number): void {
    this.bookService.getBooksByPublisherid(publisherid).subscribe((books) => {
      this.books = books;
    });
  }

}