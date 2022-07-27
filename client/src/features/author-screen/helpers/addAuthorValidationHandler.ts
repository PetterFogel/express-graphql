import { AuthorFormValues } from "../../../models/author";

export const addAuthorValidationHandler = (values: AuthorFormValues) => {
  const errors: Record<string, string> = {};
  if (!values.name) {
    errors.name = "Please enter name";
  }
  if (!values.nationality) {
    errors.nationality = "Please enter nationality";
  }

  return errors;
};
