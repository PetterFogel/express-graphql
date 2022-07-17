import { ApolloProvider } from "@apollo/client";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { client } from "./apollo/client";
import { AppRoutes } from "./app-routes/AppRoutes";
import { Header } from "./common/components/header/Header";

export const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </ApolloProvider>
  );
};
