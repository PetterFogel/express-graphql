export interface Author {
  id: string;
  name: string;
  nationality: string;
}

export interface AuthorData {
  authors: Author[];
}

export interface AuthorFormValues {
  name: string;
  nationality: string;
}
