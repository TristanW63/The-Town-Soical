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
    return <div class="parent">
    <div style={{ fontSize: "6rem"}}> NO POSTS YET</div>
  </div>
  
  }

  return (
    <div className="postCard">
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card">
            <p className="author">{post.postAuthor}</p>
            <span className="date">{post.createdAt}</span>
            <p style={{ paddingLeft: "4%", paddingTop: "2%" }}>
              {post.postText}
            </p>
            <div style={{ paddingLeft: "2%" }}>
              <CommentForm postId={post._id} refetch={refetch} />
            </div>
            <p>
              <span style={{ marginRight: "3%", paddingLeft: "3%" }}>
                <LikeList postId={post._id} refetch={refetch} />{" "}
                {post.likeCount}
              </span>
              <CommentList comments={post.comments} /> {post.commentCount}
            </p>
          </div>
        ))}
    </div>
  );
};
export default PostsList;
// likes={post.likes}
