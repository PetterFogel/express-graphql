import { FC } from "react";
import classes from "./style/homeScreen.module.css";

export const HomeScreen: FC = () => {
  return (
    <div className={classes.root}>
      <div className={classes.homeInfoContainer}>
        <h1 className={classes.homeTitle}>Add a new book or author</h1>
        <h3 className={classes.homeSubtitle}>check out the lists</h3>
        <button className={classes.primaryBtn}>Books</button>
        <button className={classes.secondaryBtn}>Authors</button>
      </div>
      <div className={classes.circle2}></div>
      <div className={classes.circle1}></div>
    </div>
  );
};
