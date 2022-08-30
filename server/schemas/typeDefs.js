const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    bookId: String!
    authors: String
    description: String!
    title: String
    image: String
    link: String
  }

  type savedBook {
    bookId: String!
    authors: String
    description: String!
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(name: String!, email: String!, password: String!): Auth
    removeBook(_id: String): User
    
    
  }
`;

module.exports = typeDefs;
