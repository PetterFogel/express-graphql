import { FC } from "react";
import { Book } from "../../models/book";
import { BookItem } from "./BookItem";
import classes from "./style/bookStyle.module.css";

interface BookListProps {
  books: Book[];
}

export const BookList: FC<BookListProps> = ({ books }) => {
  return (
    <table className={classes.table}>
      <tr className={classes.tr}>
        <th className={classes.th}>Name</th>
        <th className={classes.th}>Author</th>
        <th className={classes.th}>Genre</th>
        <th className={classes.th}>Published</th>
      </tr>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </table>
  );
};
