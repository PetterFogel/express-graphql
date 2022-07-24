import { useQuery } from "@apollo/client";
import { Divider } from "@mui/material";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_BOOK } from "../../apollo/templates/book/bookQueries";
import { Loader } from "../../common/components/loader/Loader";
import { BookData } from "../../models/book";
import { routeFactory } from "../../routes/routeFactory";
import classes from "./style/bookStyle.module.css";

export const BookDetails: FC = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const {
    data: { book } = {},
    loading,
    error,
  } = useQuery<BookData>(GET_BOOK, {
    variables: { id: bookId },
  });

  if (error || !book) return <p>Something went wrong...</p>;

  return (
    <div className={classes.detailContainer}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className={classes.pageTitle}>Book Details:</h2>
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
              className={classes.secondaryBtn}
              onClick={() => navigate(routeFactory.bookScreen.bookList())}
            >
              Back to list
            </button>
            <button className={classes.primaryBtn}>Delete book</button>
          </div>
        </>
      )}
    </div>
  );
};
