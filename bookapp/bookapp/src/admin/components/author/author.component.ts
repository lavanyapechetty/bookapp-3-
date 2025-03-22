import { Component, OnInit } from '@angular/core';

import { AuthorService } from '../../services/author.service';
import { Author } from '../../../model/author';
import { Book } from '../../../model/book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author',
  imports: [FormsModule, CommonModule],
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors: Author[] = [];
  selectedAuthor: Author | null = null;
  newAuthor: Author = new Author(0, '', '', '', []); // Initialize newAuthor
  updateFirstNameAuthorId: number = 0; // Provide default value
  updateFirstName: string = ''; // Provide default value
  updateLastNameAuthorId: number = 0; // Provide default value
  updateLastName: string = ''; // Provide default value
  getBooksAuthorId: number = 0; // Provide default value
  getAuthorId: number = 0; // Provide default value
  getFirstName: string = ''; // Provide default value
  getLastName: string = ''; // Provide default value
  books: Book[] = [];
  errorMessage: string = '';

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors(): void {
    this.authorService.getAuthors().subscribe(
      (authors: Author[]) => this.authors = authors,
      (error: string) => this.errorMessage = error
    );
  }

  selectAuthor(author: Author): void {
    this.selectedAuthor = author;
  }

  addAuthor(): void {
    this.authorService.addAuthor(this.newAuthor).subscribe(
      (newAuthor: Author) => {
        this.authors.push(newAuthor);
        this.newAuthor = new Author(0, '', '', '', []); // Reset newAuthor after adding
      },
      (error: string) => this.errorMessage = error
    );
  }

  updateAuthorFirstName(authorid: number, firstname: string): void {
    this.authorService.updateAuthorFirstName(authorid, firstname).subscribe(
      (updatedAuthor: Author) => {
        const index = this.authors.findIndex(author => author.authorid === authorid);
        if (index !== -1) {
          this.authors[index] = updatedAuthor;
        }
      },
      (error: string) => this.errorMessage = error
    );
  }

  updateAuthorLastName(authorid: number, lastname: string): void {
    this.authorService.updateAuthorLastName(authorid, lastname).subscribe(
      (updatedAuthor: Author) => {
        const index = this.authors.findIndex(author => author.authorid === authorid);
        if (index !== -1) {
          this.authors[index] = updatedAuthor;
        }
      },
      (error: string) => this.errorMessage = error
    );
  }

  updateAuthorPhoto(authorid: number, photo: string): void {
    this.authorService.updateAuthorPhoto(authorid, photo).subscribe(
      (updatedAuthor: Author) => {
        const index = this.authors.findIndex(author => author.authorid === authorid);
        if (index !== -1) {
          this.authors[index] = updatedAuthor;
        }
      },
      (error: string) => this.errorMessage = error
    );
  }

  getBooksByAuthorId(authorid: number): void {
    this.authorService.getBooksByAuthorId(authorid).subscribe(
      (books: Book[]) => this.books = books,
      (error: string) => this.errorMessage = error
    );
  }

  getAuthorById(authorid: number): void {
    this.authorService.getAuthorById(authorid).subscribe(
      (author: Author) => this.selectedAuthor = author,
      (error: string) => this.errorMessage = error
    );
  }

  getAuthorsByFirstName(firstname: string): void {
    this.authorService.getAuthorByFirstName(firstname).subscribe(
      (authors: Author[]) => this.authors = authors,
      (error: string) => this.errorMessage = error
    );
  }

  getAuthorsByLastName(lastname: string): void {
    this.authorService.getAuthorByLastName(lastname).subscribe(
      (authors: Author[]) => this.authors = authors,
      (error: string) => this.errorMessage = error
    );
  }
}