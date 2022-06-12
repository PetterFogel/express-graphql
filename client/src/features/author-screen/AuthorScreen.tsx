import { FC } from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../../apollo/templates/author/authorQueries";
import { AuthorList } from "./AuthorList";

export const AuthorScreen: FC = () => {
  const { data: { authors } = {}, loading, error } = useQuery(GET_AUTHORS);

  if (error) return <p>Something went wrong</p>;

  return (
    <>
      <h2>Author Screen</h2>
      {loading ? <p>Loading...</p> : <AuthorList authors={authors} />}
    </>
  );
};
