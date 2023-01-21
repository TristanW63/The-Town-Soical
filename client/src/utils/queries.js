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
        likes {
          _id
          liker
          createdAt
        }
        comments {
          commentAuthor
          commentText
          createdAt
          _id
        }
      }
    }
  }
`;

export const QUERY_LIKED = gql `
query {
  me {
    username
  }
  posts {
    _id
    postText
    postAuthor
    createdAt
    likeCount
    likes {
      _id
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
`

export const QUERY_POSTS = gql`
  query posts {
    posts {
      postText
      postAuthor
      _id
      createdAt
      likeCount
      likes {
        _id
        liker
        createdAt
      }
      comments {
        commentAuthor
        commentText
        createdAt
        _id
      }
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
  }
`;

export const QUERY_LIKES = gql`
  query getLikes($postId: ID!) {
    likes(postId: $postId) {
      likes {
        _id
        liker
        likeCount
        createdAt
      }
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
  query user($username: String!) {
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
        likes {
          _id
          liker
          createdAt
        }
        comments {
          commentAuthor
          commentText
          createdAt
          _id
        }
      }
    }
  }
`;
