
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";

import auth from "../../utils/auth";

const CommentForm = ({ postId, refetch }) => {
  const [commentText, setCommentText] = useState("");

  const [addcomment] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

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
          <input
          className="smallComment"
            placeholder="addComment"
            name="commentText"
            value={commentText}
            onChange={handleChange}
            type="text"
          ></input>
      </form>
  );
};

export default CommentForm;
