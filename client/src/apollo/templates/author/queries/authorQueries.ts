import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
  query getAuthors {
    authors {
      id
      name
      nationality
    }
  }
`;
