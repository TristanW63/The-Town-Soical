import React from "react";
import "./Post.css";
import { FcLike } from "react-icons/fc";

const PostsList = ({ posts }) => {
  if (!posts.length) {
    return <div className="Home">No Posts Yet</div>;
  }


  
  return (
    <div  className="postCard">
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-4">
            {post.postAuthor} <br />
            <div className="card-body bg-light p-2">

            </div>
            <FcLike />
            <p> Liked by {post.likeCount}</p>
            <p className="postText">{post.postText}</p>
            <span> posted on {post.createdAt}</span>
          </div>
        ))}
    </div>
  );
};

export default PostsList;
