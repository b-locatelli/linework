const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Auth {
    token: ID!
    user: User
  }

type User {
    _id: ID
    username: String
    email: String
    password: String!
  }
  
type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
  
`;

module.exports = typeDefs;
