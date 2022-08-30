const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');




const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
     
  Mutation: {
    createUser: async (parent, { name, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

      removeBook: async (parent, { _id }) => {
          const book = await Book.findOneAndDelete(
              { _id },
              { new: true }
          );
          return book;
      },

      savedBook: async (parent, { _id }) => {
        const savedBook = await savedBook.findOneAndUpdate(
            { _id },
            { new: true }
        );
        return savedBook;
    },


  }
};

module.exports = resolvers ;