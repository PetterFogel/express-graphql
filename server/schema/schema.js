import { authors, books } from "../dummyData.js";
import { GraphQLID, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    nationality: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return authors.find((author) => author.id === args.id);
      }
    }
  }
});

export const schema = new GraphQLSchema({
  query: RootQuery
});
