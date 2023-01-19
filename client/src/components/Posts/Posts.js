import React from "react";
import "./Post.css";
import { FcLike } from "react-icons/fc";
import CommentList from "../Comment/Comment";
import LikeList from "../Likes/Likes";
import CommentForm from "../Comment/CommentForm";

const PostsList = ({ posts }) => {
  if (!posts.length) {
    return <div className="Home">No Posts Yet</div>;
  }

console.log(posts);

  return (
    <div  className="postCard">
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-4">
            {post.postAuthor} <br />
            <FcLike />
            <p className="postText">{post.postText}</p>
            <span> posted on {post.createdAt}</span>
            <CommentForm/>
            <CommentList comments={post.comments}/>
            <LikeList likes={post.likes}/>
          </div>
        ))}
    </div>
  );
};
export default PostsList;
