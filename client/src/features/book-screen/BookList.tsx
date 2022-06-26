import { FC } from "react";
import { Book } from "../../models/book";
import classes from "./style/bookStyle.module.css";

interface BookListProps {
  books: Book[];
}

export const BookList: FC<BookListProps> = ({ books }) => {
  return (
    <table className={classes.table}>
      <tr className={classes.tr}>
        <th className={classes.th}>Name</th>
        <th className={classes.th}>Genre</th>
        <th className={classes.th}>Author</th>
      </tr>
      {books.map((book) => (
        <tr key={book.id} className={classes.tr}>
          <td className={classes.td}>{book.name}</td>
          <td className={classes.td}>{book.genre}</td>
          <td className={classes.td}>{book.author.name}</td>
        </tr>
      ))}
    </table>
  );
};
