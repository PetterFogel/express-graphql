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

export const GET_BOOK = gql`
  query getBook($id: ID!) {
    book(id: $id) {
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
