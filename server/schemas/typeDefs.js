const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    password: String
    post: [Post]!
  }
  type Post {
    _id: ID
    postText: String
    user: User
    likeCount: Int!
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    post(postId: ID!): Post
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!): Post
  }
`;

module.exports = typeDefs;