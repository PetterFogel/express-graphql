export interface Author {
  id: string;
  name: string;
  nationality: string;
}

export interface AuthorsData {
  authors: Author[];
}

export interface AuthorFormValues {
  name: string;
  nationality: string;
}
