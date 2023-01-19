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
        likeCount
        createdAt
      }
    }
  }
`;

export const QUERY_POSTS = gql`
query getPosts {
  posts {
    _id
    postText
    postAuthor
    createdAt
    likeCount
  }
}
`;

export const USER_POSTS = gql`
query UserPosts($postAuthor: String!) {
  userPosts(postAuthor: $postAuthor) {
    postText
    postAuthor
    createdAt
  }
}`

// export const QUERY_LIKES = gql`
// query getLikes($postId: ID!) {
//   likes(postId: $postId) {
//     likes {
//       likeCount
//     }
//   }
// }`

export const QUERY_USERS = gql`
  query {
    users {
      _id
      username
    }
  }
`;

export const QUERY_USER = gql`
query user($username: String!){
  user(username: $username) {
    _id
    username
    email
    posts {
      _id
      postText
      postAuthor
      likeCount
      createdAt
    }
  }
}
`;
