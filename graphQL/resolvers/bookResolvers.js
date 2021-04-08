const { BookModel } = require("../../mongoDB/model");
const { AuthorModel } = require("../../mongoDB/model");

const bookResolvers = {
  Query: {
    Book: (parent, { id }) => {
      return BookModel.findById(id);
    },
    Books: (parent, { author }) => {
      if (author) {
        return BookModel.find({ author: author });
      }
      return BookModel.find({});
    },
  },
  Book: {
    author: (parent) => {
      return AuthorModel.findById(parent.author);
    },
  },
  Mutation: {
    addBook: (parent, args) => {
      let newBook = new BookModel({
        title: args.title,
        author: args.authorID,
        genre: args.genre,
      });
      console.log(args);
      let bookSaved = newBook.save();
      return bookSaved;
    },
    removeBook: async (parent, { id }) => {
      let removedBook = await BookModel.findByIdAndDelete(id);
      return removedBook;
    },
  },
};

module.exports = bookResolvers;
