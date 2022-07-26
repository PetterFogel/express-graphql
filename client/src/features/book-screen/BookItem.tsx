import { FC } from "react";
import { Book } from "../../models/book";
import { useNavigate } from "react-router-dom";
import { routeFactory } from "../../routes/routeFactory";
import globalClasses from "../../style/globalStyle.module.css";

interface BookItemProps {
  book: Book;
}

export const BookItem: FC<BookItemProps> = ({ book }) => {
  const navigate = useNavigate();
  return (
    <tr
      className={globalClasses.tr}
      onClick={() => navigate(routeFactory.bookScreen.bookDetails(book.id))}
    >
      <td className={globalClasses.td}>{book.name}</td>
      <td className={globalClasses.td}>{book.author.name}</td>
      <td className={globalClasses.td}>{book.genre}</td>
    </tr>
  );
};
