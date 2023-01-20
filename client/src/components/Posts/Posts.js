import React from "react";
import "./Post.css";
import CommentList from "../Comment/Comment";
import LikeList from "../Likes/Likes";
import CommentForm from "../Comment/CommentForm";
import Likes from "../Likes/LikeCounter";

const PostsList = ({
  posts,
  title,
  showTitle = true,
  showUsername = true,
  refetch,
}) => {
  if (!posts.length) {
    return <div className="Home">No Posts Yet</div>;
  }

  return (
    <div className="postCard">
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-4">
            {post.postAuthor} <br />
            <p className="postText">{post.postText}</p>
            <Likes postId={post._id} refetch={refetch}/>
            <p> Liked by {post.likeCount}</p>
            <LikeList likes={post.likes} />
            <CommentForm postId={post._id} refetch={refetch} />
            <CommentList comments={post.comments} />
            <span> posted on {post.createdAt}</span>
          </div>
        ))}
    </div>
  );
};
export default PostsList;
