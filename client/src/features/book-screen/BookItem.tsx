import { FC } from "react";
import { Book } from "../../models/book";
import { FaRegTrashAlt } from "react-icons/fa";
import classes from "./style/bookStyle.module.css";
import { useNavigate } from "react-router-dom";
import { routeFactory } from "../../routes/routeFactory";

interface BookItemProps {
  book: Book;
}

export const BookItem: FC<BookItemProps> = ({ book }) => {
  const navigate = useNavigate();
  return (
    <tr
      className={classes.tr}
      onClick={() => navigate(routeFactory.bookScreen.bookDetails(book.id))}
    >
      <td className={classes.td}>{book.name}</td>
      <td className={classes.td}>{book.author.name}</td>
      <td className={classes.td}>{book.genre}</td>
      <td className={classes.modifyHolder}>
        <FaRegTrashAlt className={classes.trashIcon} />
      </td>
    </tr>
  );
};
