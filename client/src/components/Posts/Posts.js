import React from "react";

const PostsList = ({ posts }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-3">
            {post.postAuthor} <br />
            <span> posted on {post.createdAt}</span>
            <div className="card-body bg-light p-2">
              <p>{post.postText}</p>
            </div>
            <p>{post.likeCount}</p>
          </div>
        ))}
    </div>
  );
};

export default PostsList;
