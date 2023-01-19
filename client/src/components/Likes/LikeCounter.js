import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { useMutation } from "@apollo/client";
import { ADD_LIKE } from "../utils/mutations";

const Likes = ({ postId }) => {
  const [likeCount, setLikeCount] = useState("");
  const [addLike, { error }] = useMutation(ADD_LIKE);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addLike({
        variables: {
          postId,
        },
      });

      setLikeCount("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { like } = event.target;
    if (like) {
      setLikeCount(like);
    }
  };

  return (
    <>
      <button onSubmit={handleSubmit} onChange={handleChange}>
        <FcLike />
      </button>
    </>
  );
};

export default Likes;
