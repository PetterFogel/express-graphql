import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  name: {
    type: String
  },
  nationality: {
    type: String
  }
});

export default mongoose.model("Author", AuthorSchema);
