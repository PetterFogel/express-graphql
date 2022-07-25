import { FC } from "react";
import { Author, AuthorsData } from "../../models/author";
import { FaRegTrashAlt } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_AUTHOR } from "../../apollo/templates/author/authorMutations";
import { GET_AUTHORS } from "../../apollo/templates/author/authorQueries";
import classes from "./style/authorStyle.module.css";

interface AuthorItemProps {
  author: Author;
}

export const AuthorItem: FC<AuthorItemProps> = ({ author }) => {
  const [deleteAuthor] = useMutation(DELETE_AUTHOR, {
    variables: { id: author.id },
    update(cache, { data: { deleteAuthor } }) {
      const data: AuthorsData | null = cache.readQuery({ query: GET_AUTHORS });
      cache.writeQuery({
        query: GET_AUTHORS,
        data: {
          authors: data?.authors.filter((author) => author.id !== deleteAuthor.id)
        }
      });
    }
  });

  return (
    <tr className={classes.tr}>
      <td className={classes.td}>{author.name}</td>
      <td className={classes.td}>{author.nationality}</td>
      <td className={classes.modifyHolder}>
        <FaRegTrashAlt className={classes.trashIcon} onClick={() => deleteAuthor()} />
      </td>
    </tr>
  );
};
