export const routeFactory = {
  homeScreen: {
    home: () => "/",
  },
  bookScreen: {
    bookList: () => "/books",
    bookDetails: (bookId: string) => `/books/${bookId}`,
  },
  authorScreen: {
    authorList: () => "/authors",
  },
};
