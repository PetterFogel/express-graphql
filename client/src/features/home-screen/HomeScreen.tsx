import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { routeFactory } from "../../routes/routeFactory";
import classes from "./style/homeScreen.module.css";
import globalClasses from "../../style/globalStyle.module.css";

export const HomeScreen: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <div className={classes.homeInfoContainer}>
        <h1 className={classes.homeTitle}>Add a new book or author</h1>
        <h3 className={classes.homeSubtitle}>Check out the lists</h3>
        <button
          className={globalClasses.primaryBtn}
          onClick={() => navigate(routeFactory.bookScreen.bookList())}
        >
          Books
        </button>
        <button
          className={globalClasses.secondaryBtn}
          onClick={() => navigate(routeFactory.authorScreen.authorList())}
        >
          Authors
        </button>
      </div>
      <div className={classes.circle2}></div>
      <div className={classes.circle1}></div>
    </div>
  );
};
