import React from "react";
import "./Post.css";
// import { FcLike } from "react-icons/fc";
// import Likes from "../Likes";

const PostsList = ({ 
  posts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!posts.length) {
    return <div className="Home">No Posts Yet</div>;
  }

console.log(posts);

  return (
    <div  className="postCard">
      {/* {showTitle && <h3>{title}</h3>} */}
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-4">
            {post.postAuthor} <br />
            <div className="card-body bg-light p-2">
            </div>
            {/* <FcLike />
            <p> Liked by {post.likeCount}</p> */}
            {/* <Likes />  */}
            <p> Liked by {post.likeCount}</p>
            <p className="postText">{post.postText}</p>
            <span> posted on {post.createdAt}</span>
          </div>
        ))}
    </div>
  );
};
export default PostsList;
