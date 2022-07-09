import { FC } from "react";
import { Author } from "../../models/author";
import { AuthorItem } from "./AuthorItem";
import classes from "./style/authorStyle.module.css";

interface AuthorListProps {
  authors: Author[];
}

export const AuthorList: FC<AuthorListProps> = ({ authors }) => {
  return (
    <table className={classes.table}>
      <tr className={classes.tr}>
        <th className={classes.th}>Name</th>
        <th className={classes.th}>Nationality</th>
        <th className={classes.th}></th>
      </tr>
      {authors.map((author) => (
        <AuthorItem key={author.id} author={author} />
      ))}
    </table>
  );
};
