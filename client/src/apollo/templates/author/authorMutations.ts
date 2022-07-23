import { gql } from "@apollo/client";

export const ADD_AUTHOR = gql`
  mutation addAuthor($name: String!, $nationality: String!) {
    addAuthor(name: $name, nationality: $nationality) {
      id
      name
      nationality
    }
  }
`;

export const DELETE_AUTHOR = gql`
  mutation deleteAuthor($id: ID!) {
    deleteAuthor(id: $id) {
      id
    }
  }
`;
