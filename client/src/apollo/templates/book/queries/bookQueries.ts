import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query getBooks {
    books {
      id
      name
      description
      genre
      published
      author {
        name
        nationality
      }
    }
  }
`;
