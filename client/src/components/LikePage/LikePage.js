import React from "react";
import "../Home/Home.css";
import NavBar from "../Navbar/Navbar";
import PostsList from "../Posts/Posts";
import { useQuery as useApolloQuery } from "@apollo/client";
import { useQuery as useCustomQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_LIKED, QUERY_POSTS } from "../../utils/queries";

const LikesPage = () => {
  const { username: userParam } = useParams();

  const { data, refetch } = useCustomQuery(QUERY_LIKED, {
    variables: { username: userParam },
  });
refetch();
  const userLiked = data?.me.liked;
  console.log(userLiked)
  const newData = userLiked && userLiked.map(liked => liked._id);
  console.log(newData)
  const postingData = newData.map(newData => newData);

  console.log(postingData);
  const { data: postData, refetch: postRefetch } = useCustomQuery(QUERY_POSTS, {
    variables: { _id: postingData },
    });
    postRefetch();
    console.log(postData)
  // if (loading) {
  //   return <h2>LOADING...</h2>;
  // }
  if(!localStorage.getItem('id_token')) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div className="Home">
      <NavBar />
      <div
        className="postCard"
      >
        <PostsList
          posts={postData.posts}
          // title={`${user.username}'s liked posts...`}
          refetch={refetch}
        />
      </div>
    </div>
  );
};

export default LikesPage;
