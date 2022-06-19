import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthorScreen } from "../features/author-screen/AuthorScreen";
import { BookScreen } from "../features/book-screen/BookScreen";
import { HomeScreen } from "../features/home-screen/HomeScreen";
import { routeFactory } from "../routes/routeFactory";

export const AppRoutes: FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <Routes>
        <Route path={routeFactory.homeScreen.home()} element={<HomeScreen />} />
        <Route path={routeFactory.bookScreen.bookList()} element={<BookScreen />} />
        <Route path={routeFactory.authorScreen.authorList()} element={<AuthorScreen />} />
      </Routes>
    </div>
  );
};
