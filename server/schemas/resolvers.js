const { User, Book } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params);
    },
     
  },
  Mutation: {
      createUser: async (parent, args) => {
          const user = await User.create(args);
          return user;
      },

      deleteBook: async (parent, { _id }) => {
          const book = await Book.findOneAndDelete(
              { _id },
              { new: true }
          );
          return book;
      },

  }
};

module.exports = {resolvers, resolverMap};