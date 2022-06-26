import { FC } from "react";
import { Author } from "../../models/author";
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
      </tr>
      {authors.map((author) => (
        <tr key={author.id} className={classes.tr}>
          <td className={classes.td}>{author.name}</td>
          <td className={classes.td}>{author.nationality}</td>
        </tr>
      ))}
    </table>
  );
};
