const { AuthorModel, BookModel } = require("../../mongoDB/model");

const authorResolvers = {
  Query: {
    Author: (parent, { id }) => {
      return AuthorModel.findById(id);
    },
    Authors: () => {
      return AuthorModel.find({});
    },
  },
  Author: {
    books: async (parent) => {
      let booksAuthored = await BookModel.find({
        author: parent._id,
      });
      return booksAuthored;
    },
  },
  Mutation: {
    addAuthor: (parent, args) => {
      let newAuthor = new AuthorModel({
        name: args.name,
        age: args.age,
      });
      let savedAuthor = newAuthor.save();
      return savedAuthor;
    },
  },
};

module.exports = authorResolvers;
