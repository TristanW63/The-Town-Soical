import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        postText
        postAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query {
    posts {
      _id
      postText
    }
  }
`;

export const QUERY_USERS = gql`
  query {
    users {
      _id
      username
    }
  }
`;

export const QUERY_USER = gql`
query($username: String!){
  user(username: $username) {
    _id
    post {
      postText
    }
  }
}
`;
