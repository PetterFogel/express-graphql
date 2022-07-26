import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { AuthorFormValues, AuthorsData } from "../../models/author";
import { useMutation } from "@apollo/client";
import { ADD_AUTHOR } from "../../apollo/templates/author/authorMutations";
import { GET_AUTHORS } from "../../apollo/templates/author/authorQueries";
import globalClasses from "../../style/globalStyle.module.css";
import classes from "./style/authorStyle.module.css";

interface AuthorDialogProps {
  isDialogOpen: boolean;
  onDialogCloseClick: () => void;
}

export const AuthorDialog: FC<AuthorDialogProps> = ({ isDialogOpen, onDialogCloseClick }) => {
  const [formValues, setFormValues] = useState<AuthorFormValues>({
    name: "",
    nationality: ""
  });

  const [addAuthor] = useMutation(ADD_AUTHOR, {
    variables: { name: formValues.name, nationality: formValues.nationality },
    update(cache, { data: { addAuthor } }) {
      const data: AuthorsData | null = cache.readQuery({ query: GET_AUTHORS });
      cache.writeQuery({
        query: GET_AUTHORS,
        data: { authors: [...data!.authors, addAuthor] }
      });
    }
  });

  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      name: event.target.value
    });
  };

  const nationalityChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      nationality: event.target.value
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);

    if (formValues.name === "" || formValues.nationality === "")
      return alert("Please fill in all fields");

    addAuthor();

    setFormValues({ name: "", nationality: "" });
    onDialogCloseClick();
  };

  return (
    <Dialog open={isDialogOpen} onClose={onDialogCloseClick} maxWidth="sm" fullWidth>
      <DialogContent>
        <h2 className={globalClasses.dialogTitle}>Add Author</h2>
        <form onSubmit={submitHandler}>
          <div className={globalClasses.formControl}>
            <label className={globalClasses.inputLabel}>Name</label>
            <input
              type="text"
              value={formValues.name}
              className={globalClasses.inputField}
              onChange={nameChangeHandler}
            />
          </div>
          <div>
            <label className={globalClasses.inputLabel}>Nationality</label>
            <input
              type="text"
              value={formValues.nationality}
              className={globalClasses.inputField}
              onChange={nationalityChangeHandler}
            />
          </div>
          <div className={classes.btnHolder}>
            <button className={globalClasses.secondaryBtn} onClick={onDialogCloseClick}>
              Cancel
            </button>
            <button type="submit" className={globalClasses.primaryBtn}>
              Save
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
