const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    posted: [Post]!
    liked: [Post]!
  }
  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    likeCount: Int
    commentCount: Int
    comments: [Comment]!
  }
  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(username: String!): [User]
    posts(username: String): [Post]
    post(postId: ID!): Post
    liked: User
    comments(username: String): [Post]
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!, postAuthor: String!): Post
    addComment(postId: ID!, commentText: String!, commentAuthor: String!): Post
    addLike(postId: ID!): User
  }
`;

module.exports = typeDefs;
