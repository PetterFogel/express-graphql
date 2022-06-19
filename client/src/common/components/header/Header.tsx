import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { routeFactory } from "../../../routes/routeFactory";
import classes from "./style/header.module.css";

export const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <header className={classes.header}>
      <h2 className={classes.logo} onClick={() => navigate(routeFactory.homeScreen.home())}>
        BOOKIE
      </h2>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li className={classes.li} onClick={() => navigate(routeFactory.bookScreen.bookList())}>
            Books
          </li>
          <li
            className={classes.li}
            onClick={() => navigate(routeFactory.authorScreen.authorList())}
          >
            Authors
          </li>
        </ul>
      </nav>
    </header>
  );
};
