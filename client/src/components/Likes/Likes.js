import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_LIKE } from "../../utils/mutations";
import { QUERY_POSTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const LikeList = ({ likes = [], postId }) => {
  const [likeCount, setLikeCount] = useState("");
  const [addLike] = useMutation(ADD_LIKE);
  // const [userLikedPost, setUserLikedPost] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { data, loading, error, refetch } = useQuery(QUERY_POSTS, {
    variables: { id: postId },
  });

  const handleSubmit = async (event) => {
    // event.preventDefault();
    try {
      const { data } = await addLike({
        variables: {
          postId,
          likeCount
        },
      });

      setLikeCount("");
      refetch();
      // setUserLikedPost(true);
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
  }

  return (
    <>
    <FaHeart className="likeBtn" style={{ color: clicked ? 'red' : 'pink' }} 
    onClick={() => {handleSubmit(); setClicked(!clicked)}} onChange={handleChange}/>
    </>
  );
};

export default LikeList;
