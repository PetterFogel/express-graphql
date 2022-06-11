import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/schema.js";
import { connectDB } from "./config/db.js";
import "dotenv/config";

const port = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "Development"
  })
);

app.listen(port, console.log(`Server running on port: ${port}`));
