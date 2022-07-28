import { ApolloCache } from "@apollo/client";
import { GET_BOOKS } from "../../../apollo/templates/book/bookQueries";
import { BooksData } from "../../../models/book";

export const updateCacheAfterDeleteBook = (cache: ApolloCache<any>, deleteBookId: string) => {
  const data: BooksData | null = cache.readQuery({ query: GET_BOOKS });
  cache.writeQuery({
    query: GET_BOOKS,
    data: {
      books: data?.books.filter((book) => book.id !== deleteBookId)
    }
  });
};
