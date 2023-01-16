
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    post: [Post]!
  }
  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    likeCount: Int
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
    user(username: String!): User
    posts: [Post]
    post(postId: ID!): Post
    comments: [Post]
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!, postAuthor: String!): Post
    addComment(postId: ID!, commentText: String!, commentAuthor: String!): Post
    addLike(postId: ID!, likeCount: Int!, username: String!): Post
  }
`;

module.exports = typeDefs;