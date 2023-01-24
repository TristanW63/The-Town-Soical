import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!, $postAuthor: String!) {
    addPost(postText: $postText, postAuthor: $postAuthor) {
      postAuthor
      postText
      _id
      createdAt
      likeCount
      commentCount
    }
  }
`;

export const UPDATE_POST = gql`
mutation Mutation($postId: ID!, $postText: String!) {
  updatePost(postId: $postId, postText: $postText) {
    _id
    postText
  }
}
`;

export const ADD_LIKE = gql`
mutation Mutation($postId: ID!) {
  addLike(postId: $postId) {
    username
    liked {
      likeCount
    }
  }
}
`;
export const ADD_COMMENT = gql`
  mutation addcomment(
    $postId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      postId: $postId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
      commentCount
      comments {
        commentText
        commentAuthor
        createdAt
        _id
      }
    }
  }
`;
