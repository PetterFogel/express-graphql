import { InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        authors: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        books: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});
