import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from "graphql";
import Author from "../models/Author.js";
import Book from "../models/Book.js";

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    nationality: { type: GraphQLString }
  })
});

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    genre: { type: GraphQLString },
    published: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return Author.findById(parent.authorId);
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return Author.find();
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Author.findById(args.id);
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find();
      }
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Book.findById(args.id);
      }
    }
  }
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        nationality: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const author = new Author({
          name: args.name,
          nationality: args.nationality
        });

        return author.save();
      }
    },
    deleteAuthor: {
      type: AuthorType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        return Author.findByIdAndDelete(args.id);
      }
    }
  }
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation
});
