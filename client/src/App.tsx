import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app-routes/AppRoutes";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
