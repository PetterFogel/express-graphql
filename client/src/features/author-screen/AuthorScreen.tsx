import { FC } from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../../apollo/templates/author/authorQueries";
import { AuthorList } from "./AuthorList";
import { Loader } from "../../common/components/loader/Loader";
import classes from "./style/authorStyle.module.css";

export const AuthorScreen: FC = () => {
  const { data: { authors } = {}, loading, error } = useQuery(GET_AUTHORS);

  if (error) return <p>Something went wrong</p>;

  return (
    <>
      <h2 className={classes.pageTitle}>Authors</h2>
      {loading ? <Loader /> : <AuthorList authors={authors} />}
    </>
  );
};
