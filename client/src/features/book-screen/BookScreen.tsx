import { useQuery } from "@apollo/client";
import { FC } from "react";
import { GET_BOOKS } from "../../apollo/templates/book/bookQueries";
import { BookList } from "./BookList";

export const BookScreen: FC = () => {
  const { data: { books } = {}, loading, error } = useQuery(GET_BOOKS);

  if (error) return <p>Something went wrong</p>;

  return (
    <>
      <h2>Book Screen</h2>
      {loading ? <p>Loading...</p> : <BookList books={books} />}
    </>
  );
};
