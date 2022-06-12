import { FC } from "react";
import { Author } from "../../models/author";

interface AuthorListProps {
  authors: Author[];
}

export const AuthorList: FC<AuthorListProps> = ({ authors }) => {
  return (
    <div>
      {authors.map((author) => (
        <div key={author.id}>
          <p>{author.name}</p>
          <p>{author.nationality}</p>
        </div>
      ))}
    </div>
  );
};
