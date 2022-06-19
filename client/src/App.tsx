import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app-routes/AppRoutes";
import { Header } from "./common/components/header/Header";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache()
});

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
