import { FC } from "react";
import { Author } from "../../models/author";
import classes from "./style/authorStyle.module.css";

interface AuthorItemProps {
  author: Author;
}

export const AuthorItem: FC<AuthorItemProps> = ({ author }) => {
  return (
    <tr className={classes.tr}>
      <td className={classes.td}>{author.name}</td>
      <td className={classes.td}>{author.nationality}</td>
    </tr>
  );
};
