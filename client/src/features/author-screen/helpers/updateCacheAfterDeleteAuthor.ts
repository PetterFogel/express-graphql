import { ApolloCache } from "@apollo/client";
import { GET_AUTHORS } from "../../../apollo/templates/author/authorQueries";
import { Author, AuthorsData } from "../../../models/author";

export const updateCacheAfterDeleteAuthor = (cache: ApolloCache<any>, author: Author) => {
  const data: AuthorsData | null = cache.readQuery({ query: GET_AUTHORS });
  cache.writeQuery({
    query: GET_AUTHORS,
    data: {
      authors: data?.authors.filter((a) => a.id !== author.id)
    }
  });
};
