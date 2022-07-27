import { ApolloCache, MutationFunction } from "@apollo/client";
import { GET_AUTHORS } from "../../../apollo/templates/author/authorQueries";
import { AuthorsData } from "../../../models/author";

export const updateCacheAfterAddAuthor = (cache: ApolloCache<any>, addAuthor: MutationFunction) => {
  const data: AuthorsData | null = cache.readQuery<AuthorsData>({ query: GET_AUTHORS });
  cache.writeQuery({
    query: GET_AUTHORS,
    data: { authors: [...data!.authors, addAuthor] }
  });
};
