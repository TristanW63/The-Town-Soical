import React from "react";
import "./Post.css";
import CommentList from "../Comment/Comment";
import LikeList from "../Likes/Likes";
import CommentForm from "../Comment/CommentForm";

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
          <div key={post._id} className="card">
            {post.postAuthor}<span className="date">{post.createdAt}</span> <br />
            <p className="postText">{post.postText}</p>
            <CommentForm postId={post._id} refetch={refetch} />
            <p><CommentList comments={post.comments} /> {post.commentCount} 
           <span style={{ marginLeft: '3%'}}><LikeList postId={post._id} refetch={refetch}/> {post.likeCount}</span></p>
          </div>
        ))}
    </div>
  );
};
export default PostsList;
// likes={post.likes}