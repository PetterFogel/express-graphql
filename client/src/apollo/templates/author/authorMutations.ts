import { gql } from "@apollo/client";

export const DELETE_AUTHOR = gql`
  mutation deleteAuthor($id: ID!) {
    deleteAuthor(id: $id) {
      id
    }
  }
`;
