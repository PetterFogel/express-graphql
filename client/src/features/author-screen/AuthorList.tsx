import { FC, useState } from "react";
import { Author } from "../../models/author";
import { AuthorDialog } from "./AuthorDialog";
import { AuthorItem } from "./AuthorItem";
import classes from "./style/authorStyle.module.css";
import globalClasses from "../../style/globalStyle.module.css";

interface AuthorListProps {
  authors: Author[];
}

export const AuthorList: FC<AuthorListProps> = ({ authors }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.addAuthorHolder}>
        <button className={globalClasses.primaryBtn} onClick={handleClickOpen}>
          Add Author
        </button>
      </div>
      <table className={globalClasses.table}>
        <thead>
          <tr className={globalClasses.tr}>
            <th className={globalClasses.th}>Name</th>
            <th className={globalClasses.th}>Nationality</th>
            <th className={globalClasses.th}></th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <AuthorItem key={author.id} author={author} />
          ))}
        </tbody>
        <AuthorDialog isDialogOpen={open} onDialogCloseClick={handleClose} />
      </table>
    </>
  );
};
