import React from "react";

const LikeList = ({ likes = [] }) => {
  console.log(likes);
  return (
    <>
        {likes &&
          likes.map((like) => (
            <div key={like._id} className="col-12 mb-3 pb-3">
              <p>{like.liker}</p>
            </div>
          ))}
    </>
  );
};

export default LikeList;
