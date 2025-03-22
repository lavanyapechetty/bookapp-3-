export class Book {
    isbn: string;
    title: string;
    description: string;
    category: number;
    edition: string;
    publisherid: number;
   
    constructor(isbn: string, title: string, description: string, category: number, edition: string, publisherid: number) {
      this.isbn = isbn;
      this.title = title;
      this.description = description;
      this.category = category;
      this.edition = edition;
      this.publisherid = publisherid;
    }
  }
 