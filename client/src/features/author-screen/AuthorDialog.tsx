import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import classes from "./style/authorStyle.module.css";
import { AuthorData, AuthorFormValues } from "../../models/author";
import { useMutation } from "@apollo/client";
import { ADD_AUTHOR } from "../../apollo/templates/author/authorMutations";
import { GET_AUTHORS } from "../../apollo/templates/author/authorQueries";

interface AuthorDialogProps {
  isDialogOpen: boolean;
  onDialogCloseClick: () => void;
}

export const AuthorDialog: FC<AuthorDialogProps> = ({
  isDialogOpen,
  onDialogCloseClick,
}) => {
  const [formValues, setFormValues] = useState<AuthorFormValues>({
    name: "",
    nationality: "",
  });

  const [addAuthor] = useMutation(ADD_AUTHOR, {
    variables: { name: formValues.name, nationality: formValues.nationality },
    update(cache, { data: { addAuthor } }) {
      const data: AuthorData | null = cache.readQuery({ query: GET_AUTHORS });
      cache.writeQuery({
        query: GET_AUTHORS,
        data: { authors: [...data!.authors, addAuthor] },
      });
    },
  });

  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      name: event.target.value,
    });
  };

  const nationalityChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      nationality: event.target.value,
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
    <Dialog
      open={isDialogOpen}
      onClose={onDialogCloseClick}
      maxWidth="sm"
      fullWidth
    >
      <DialogContent>
        <h2 className={classes.dialogTitle}>Add Author</h2>
        <form onSubmit={submitHandler}>
          <div className={classes.formControl}>
            <label className={classes.inputLabel}>Name</label>
            <input
              type="text"
              value={formValues.name}
              className={classes.inputField}
              onChange={nameChangeHandler}
            />
          </div>
          <div>
            <label className={classes.inputLabel}>Nationality</label>
            <input
              type="text"
              value={formValues.nationality}
              className={classes.inputField}
              onChange={nationalityChangeHandler}
            />
          </div>
          <div className={classes.btnHolder}>
            <button
              className={classes.secondaryBtn}
              onClick={onDialogCloseClick}
            >
              Cancel
            </button>
            <button type="submit" className={classes.primaryBtn}>
              Save
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
