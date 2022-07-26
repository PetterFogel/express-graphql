import { FC } from "react";
import { Book } from "../../models/book";
import { BookItem } from "./BookItem";
import globalClasses from "../../style/globalStyle.module.css";

interface BookListProps {
  books: Book[];
}

export const BookList: FC<BookListProps> = ({ books }) => {
  return (
    <table className={globalClasses.table}>
      <thead>
        <tr className={globalClasses.tr}>
          <th className={globalClasses.th}>Name</th>
          <th className={globalClasses.th}>Author</th>
          <th className={globalClasses.th}>Genre</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  );
};
