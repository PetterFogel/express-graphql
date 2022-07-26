import { FC } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Divider } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { DELETE_BOOK } from "../../apollo/templates/book/bookMutations";
import { GET_BOOK, GET_BOOKS } from "../../apollo/templates/book/bookQueries";
import { Loader } from "../../common/components/loader/Loader";
import { BooksData } from "../../models/book";
import { routeFactory } from "../../routes/routeFactory";
import classes from "./style/bookStyle.module.css";
import globalClasses from "../../style/globalStyle.module.css";

export const BookDetails: FC = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const {
    data: { book } = {},
    loading: isBookLoading,
    error: bookError
  } = useQuery(GET_BOOK, {
    variables: { id: bookId }
  });

  const [deleteBook] = useMutation(DELETE_BOOK, {
    variables: { id: book?.id },
    onCompleted: () => {
      navigate(routeFactory.bookScreen.bookList());
    },
    update(cache, { data: { deleteBook } }) {
      const data: BooksData | null = cache.readQuery({ query: GET_BOOKS });
      cache.writeQuery({
        query: GET_BOOKS,
        data: {
          books: data?.books.filter((book) => book.id !== deleteBook.id)
        }
      });
    }
  });

  if (bookError) return <p>Something went wrong...</p>;

  return (
    <div className={classes.detailContainer}>
      <h2 className={classes.pageTitle}>Book Details:</h2>
      {isBookLoading ? (
        <Loader />
      ) : (
        <>
          <h3 className={classes.bookTitle}>{book.name}</h3>
          <div className={classes.bookInfoContainer}>
            <div className={classes.infoHolder}>
              <div>
                <p>Description:</p>
                <h3>{book.description}</h3>
              </div>
            </div>
            <div className={classes.infoHolder}>
              <div>
                <p>Genre:</p>
                <h3>{book.genre}</h3>
              </div>
              <div>
                <p>Published:</p>
                <h3>{book.published}</h3>
              </div>
            </div>
            <div className={classes.infoHolder}>
              <div>
                <p>Author:</p>
                <h3>{book.author.name}</h3>
              </div>
            </div>
          </div>
          <Divider />
          <div className={classes.buttonHolder}>
            <button
              className={globalClasses.secondaryBtn}
              onClick={() => navigate(routeFactory.bookScreen.bookList())}
            >
              Back to list
            </button>
            <button className={globalClasses.primaryBtn} onClick={() => deleteBook()}>
              Delete book
            </button>
          </div>
        </>
      )}
    </div>
  );
};
