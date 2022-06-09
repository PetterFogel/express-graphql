import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  genre: {
    type: String
  },
  published: {
    type: String
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author"
  }
});

export default mongoose.model("Book", BookSchema);
