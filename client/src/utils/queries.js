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
query getPosts {
  posts {
    _id
    postText
    postAuthor
    createdAt
    likeCount
    likes {
      liker
      createdAt
    }
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}
`;

// export const QUERY_LIKES = gql`
// query getLikes($postId: ID!) {
//   likes(postId: $postId) {
//     likes {
//       _id
//       liker
//       likeCount
//       createdAt
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
query($username: String!){
  user(username: $username) {
    _id
    post {
      postText
    }
  }
}
`;
