import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { useMutation } from "@apollo/client";
import { ADD_LIKE } from "../../utils/mutations";

const Likes = ({ postId, refetch }) => {
  const [likeCount, setLikeCount] = useState("");
  const [addLike, { error }] = useMutation(ADD_LIKE);
  const [userLikedPost, setUserLikedPost] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
 if(!userLikedPost) {
    try {
      const { data } = await addLike({
        variables: {
          postId,
        },
      });

      setLikeCount("");
      refetch();
      setUserLikedPost(true);
    } catch (err) {
      console.error(err);
    }
  }
};

  const handleChange = (event) => {
    const { like } = event.target;
    console.log(like);
    if (like) {
      setLikeCount(like);
    }
  };
  let color = userLikedPost ? 'red': 'black'
  return (
      <button style={{ width: "9%" , color: color}} onClick={handleSubmit} onChange={handleChange}>
        <FcLike />
      </button>
  );
};

export default Likes;
