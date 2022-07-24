import { useQuery } from "@apollo/client";
import { FC } from "react";
import { GET_BOOKS } from "../../apollo/templates/book/bookQueries";
import { Loader } from "../../common/components/loader/Loader";
import { BooksData } from "../../models/book";
import { BookList } from "./BookList";
import classes from "./style/bookStyle.module.css";

export const BookScreen: FC = () => {
  const {
    data: { books } = {},
    loading,
    error,
  } = useQuery<BooksData>(GET_BOOKS);

  if (error || !books) return <p>Something went wrong</p>;

  return (
    <>
      <h2 className={classes.pageTitle}>Books</h2>
      {loading ? <Loader /> : <BookList books={books} />}
    </>
  );
};
