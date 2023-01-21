const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Post]!
    likes: [Like]!
  }
  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    likeCount: Int
    likes: [Like]
    comments: [Comment]!
  }
  type Like {
    _id: ID
    liker: String
    createdAt: String
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
    likes: [Post]
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!, postAuthor: String!): Post
    addComment(postId: ID!, commentText: String!, commentAuthor: String!): Post
    addLike(postId: ID!, liker: String): Post
  }
`;

module.exports = typeDefs;
