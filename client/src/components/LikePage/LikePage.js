import React from "react";
import "../Home/Home.css";
import NavBar from "../Navbar/Navbar";
import PostsList from "../Posts/Posts";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_ME } from "../../utils/queries";

const LikesPage = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { liker: userParam },
  });

  const user = data?.me || {};

console.log(user)

  if (loading) {
    return <h2>LOADING...</h2>;
  }
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
        style={{ marginLeft: "15%", padding: "20px" }}
        className="flex-row justify-center col-md-6"
      >
        <PostsList
          posts={user.likes}
          title={`${user.username}'s liked posts...`}
        />
      </div>
    </div>
  );
};

export default LikesPage;
