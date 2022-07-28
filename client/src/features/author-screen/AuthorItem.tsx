import { FC } from "react";
import { Author } from "../../models/author";
import { FaRegTrashAlt } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_AUTHOR } from "../../apollo/templates/author/authorMutations";
import { updateCacheAfterDeleteAuthor } from "./helpers/updateCacheAfterDeleteAuthor";
import globalClasses from "../../style/globalStyle.module.css";
import classes from "./style/authorStyle.module.css";

interface AuthorItemProps {
  author: Author;
}

export const AuthorItem: FC<AuthorItemProps> = ({ author }) => {
  const [deleteAuthor] = useMutation(DELETE_AUTHOR, {
    variables: { id: author.id },
    update(cache, { data: { deleteAuthor } }) {
      updateCacheAfterDeleteAuthor(cache, deleteAuthor.id);
    }
  });

  return (
    <tr className={globalClasses.tr}>
      <td className={globalClasses.td}>{author.name}</td>
      <td className={globalClasses.td}>{author.nationality}</td>
      <td className={classes.modifyHolder}>
        <FaRegTrashAlt className={classes.trashIcon} onClick={() => deleteAuthor()} />
      </td>
    </tr>
  );
};
