import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { useMutation } from "@apollo/client";
import { ADD_LIKE } from "../../utils/mutations";

const Likes = ({ postId, refetch }) => {
  const [likeCount, setLikeCount] = useState("");
  const [addLike, { error }] = useMutation(ADD_LIKE);

  const handleSubmit = async (event) => {
    event.preventDefault();
console.log(postId);
    try {
      const { data } = await addLike({
        variables: {
          postId,
        },
      });

      setLikeCount("");
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { like } = event.target;
    console.log(like);
    if (like) {
      setLikeCount(like);
    }
  };

  return (
      <button style={{ width: "9%"}} onClick={handleSubmit} onChange={handleChange}>
        <FcLike />
      </button>
  );
};

export default Likes;
