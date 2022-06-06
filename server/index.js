import express from "express";
import { graphqlHTTP } from "express-graphql";
import "dotenv/config";

const port = process.env.PORT || 5000;

const app = express();

app.listen(port, console.log(`Server running on port: ${port}`));
