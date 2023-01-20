import React from "react";

const CommentList = ({ comments = [] }) => {
  return (
      <>
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
                <p className="card-body">{comment.commentText}</p>
                <p className="card-body">{comment.commentAuthor}</p>
            </div>
          ))}
      </>
  );
};

export default CommentList;
