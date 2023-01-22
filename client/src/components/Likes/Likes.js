import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_LIKE } from "../../utils/mutations";
import { QUERY_POSTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const LikeList = ({ likes = [], postId }) => {
  const [likeCount, setLikeCount] = useState("");
  const [addLike] = useMutation(ADD_LIKE);
  const [userLikedPost, setUserLikedPost] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { data, loading, error, refetch } = useQuery(QUERY_POSTS, {
    variables: { id: postId },
  });

  const handleSubmit = async (event) => {
    // event.preventDefault();
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
  }

  return (
    <>
    <FaHeart className="likeBtn" style={{ color: clicked ? 'red' : 'pink' }} onClick={() => {handleSubmit(); setClicked(!clicked)}} onChange={handleChange}/>
        {likes &&
          likes.map((like) => (
            <div key={like._id} className="col-12 mb-3 pb-3">
              <p>{like.username}</p>
            </div>
          ))}
    </>
  );
};

export default LikeList;
