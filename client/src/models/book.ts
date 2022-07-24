import { Author } from "./author";

export interface Book {
  id: string;
  name: string;
  description: string;
  genre: string;
  published: string;
  author: Author;
}

export interface BooksData {
  books: Book[];
}

export interface BookData {
  book: Book;
}
