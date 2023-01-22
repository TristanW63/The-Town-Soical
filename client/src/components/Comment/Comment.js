import React, { useState } from "react";
import {FaRegComment} from "react-icons/fa"

const CommentList = ({ comments = [], refetch }) => {
  const [commentsVisible, setCommentsVisible] = useState(false);
  return (
      <>
            <>
            <FaRegComment style={{ color: commentsVisible ? 'red' : 'black' }} 
            onClick={() => setCommentsVisible(!commentsVisible)} refetch={refetch}/>
      </>
      {commentsVisible && (
        <>
          {comments.map((comment) => (
            <section key={comment._id}><p className="card-body">{comment.commentAuthor}</p>
                   <p className="card-body">{comment.commentText}</p>
                   {comment.createdAt}</section>
          ))}
        </>
      )}
      </>
  );
};

export default CommentList;