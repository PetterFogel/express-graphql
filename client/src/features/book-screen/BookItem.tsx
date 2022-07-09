import { FC } from "react";
import { Book } from "../../models/book";
import classes from "./style/bookStyle.module.css";

interface BookItemProps {
  book: Book;
}

export const BookItem: FC<BookItemProps> = ({ book }) => {
  return (
    <tr className={classes.tr}>
      <td className={classes.td}>{book.name}</td>
      <td className={classes.td}>{book.author.name}</td>
      <td className={classes.td}>{book.genre}</td>
      <td className={classes.td}>{book.published}</td>
    </tr>
  );
};
