const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    authors: String
    description: String!
    bookId: String!
    image: String
    link: String
    title: String
  }

  type Query {
    user(_id: String): [User]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup

    createUser(username: String!, email: String!, password: String!): User
    deleteBook(_id: String): Book
  }
`;

module.exports = typeDefs;
