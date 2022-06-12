import { FC } from "react";
import { Book } from "../../models/book";

interface BookListProps {
  books: Book[];
}

export const BookList: FC<BookListProps> = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <p>{book.name}</p>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
        </div>
      ))}
    </div>
  );
};
