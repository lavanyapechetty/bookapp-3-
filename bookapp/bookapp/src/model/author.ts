import { Book } from "./book";
 
export class Author {
  authorid: number;
  lastname: string;
  firstname: string;
  photo: string; // Assuming photo is a base64 string
  books: Book[]; // Assuming Book is another class
 
  constructor(authorid: number, lastname: string, firstname: string, photo: string, books: Book[]) {
    this.authorid = authorid;
    this.lastname = lastname;
    this.firstname = firstname;
    this.photo = photo;
    this.books = books;
  }
}