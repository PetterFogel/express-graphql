import { Author } from "./author";

export interface Book {
  id: string;
  name: string;
  nationality: string;
  genre: string;
  published: string;
  author: Author;
}
