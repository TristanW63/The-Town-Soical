import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";

import auth from "../../utils/auth";

const CommentForm = ({ postId, refetch }) => {
  const [commentText, setCommentText] = useState("");

  const [addcomment] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addcomment({
        variables: {
          postId,
          commentText,
          commentAuthor: auth.getProfile().data.username,
        },
      });
      setCommentText("");
      refetch();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentText") {
      setCommentText(value);
    }
  };

  return (
      <form onSubmit={handleFormSubmit}>
          <textarea
            placeholder="addComment"
            name="commentText"
            value={commentText}
            onChange={handleChange}
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Add Comment
          </button>
      </form>
  );
};

export default CommentForm;
