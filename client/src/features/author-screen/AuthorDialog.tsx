import { FC } from "react";
import { Dialog, DialogContent, TextField } from "@mui/material";
import { AuthorFormValues } from "../../models/author";
import { useMutation } from "@apollo/client";
import { ADD_AUTHOR } from "../../apollo/templates/author/authorMutations";
import { useFormik } from "formik";
import { addAuthorValidationHandler } from "./helpers/addAuthorValidationHandler";
import { updateCacheAfterAddAuthor } from "./helpers/updateCacheAfterAddAuthorts";
import globalClasses from "../../style/globalStyle.module.css";
import classes from "./style/authorStyle.module.css";

interface AuthorDialogProps {
  isDialogOpen: boolean;
  onDialogCloseClick: () => void;
}

export const AuthorDialog: FC<AuthorDialogProps> = ({ isDialogOpen, onDialogCloseClick }) => {
  const validate = (values: AuthorFormValues) => {
    return addAuthorValidationHandler(values);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      nationality: ""
    },
    validate,
    enableReinitialize: false,
    validateOnMount: true,
    onSubmit: (values, { resetForm }) => {
      addAuthor({ variables: { ...values } });
      onDialogCloseClick();
      resetForm();
    }
  });

  const [addAuthor] = useMutation(ADD_AUTHOR, {
    update(cache, { data: { addAuthor } }) {
      updateCacheAfterAddAuthor(cache, addAuthor);
    }
  });

  return (
    <Dialog open={isDialogOpen} onClose={onDialogCloseClick} maxWidth="sm" fullWidth>
      <DialogContent>
        <h2 className={globalClasses.dialogTitle}>Add Author</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className={globalClasses.formControl}>
            <label className={globalClasses.inputLabel}>Name</label>
            <TextField
              id="name"
              type="text"
              size="small"
              className={globalClasses.inputField}
              helperText={formik.touched.name && formik.errors.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              {...formik.getFieldProps("name")}
            />
          </div>
          <div className={globalClasses.formControl}>
            <label className={globalClasses.inputLabel}>Nationality</label>
            <TextField
              id="nationality"
              type="text"
              size="small"
              className={globalClasses.inputField}
              helperText={formik.touched.nationality && formik.errors.nationality}
              error={formik.touched.nationality && Boolean(formik.errors.nationality)}
              {...formik.getFieldProps("nationality")}
            />
          </div>
          <div className={classes.btnHolder}>
            <button
              type="button"
              className={globalClasses.secondaryBtn}
              onClick={onDialogCloseClick}
            >
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
