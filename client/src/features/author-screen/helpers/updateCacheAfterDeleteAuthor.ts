import { ApolloCache } from "@apollo/client";
import { GET_AUTHORS } from "../../../apollo/templates/author/authorQueries";
import { AuthorsData } from "../../../models/author";

export const updateCacheAfterDeleteAuthor = (cache: ApolloCache<any>, authorId: string) => {
  const data: AuthorsData | null = cache.readQuery({ query: GET_AUTHORS });
  cache.writeQuery({
    query: GET_AUTHORS,
    data: {
      authors: data?.authors.filter((a) => a.id !== authorId)
    }
  });
};
