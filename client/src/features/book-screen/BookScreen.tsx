import { useQuery } from "@apollo/client";
import { FC } from "react";
import { GET_BOOKS } from "../../apollo/templates/book/bookQueries";
import { Loader } from "../../common/components/loader/Loader";
import { BookList } from "./BookList";
import globalClasses from "../../style/globalStyle.module.css";

export const BookScreen: FC = () => {
  const { data: { books } = {}, loading, error } = useQuery(GET_BOOKS);

  if (error) return <p>Something went wrong</p>;

  return (
    <>
      <h2 className={globalClasses.pageTitle}>Books</h2>
      {loading ? <Loader /> : <BookList books={books} />}
    </>
  );
};
