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
    id: ID!
    postText: String!
    author: User!
    comments: [Comment]
    likeCount: Int!
  }
  type Comment {
    id: ID
    commentText: String!
    author: User
    post: Post!
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    posts: [Post]
    post(id: ID!): Post
    comments: [Comment]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!, _id: ID!): Post
    addComment(commentText: String!, _id: ID!, postId: ID!): Comment
  }
`;

module.exports = typeDefs;