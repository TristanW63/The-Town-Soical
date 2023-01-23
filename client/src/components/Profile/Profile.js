import React from "react";
import "../Home/Home.css";
import NavBar from "./../Navbar/Navbar";
import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import PostsList from "../Posts/Posts";

const Profile = (refetch) => {

  const { loading, data } = useQuery(QUERY_ME)

  const user = data?.me || {};
  console.log(user);
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  if (!user?.username) {
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
      <div className="postCard">
        <PostsList
          posts={user.posts}
          title={`${user.username}'s thoughts...`}
          showTitle={false}
          showUsername={false}
          refetch={refetch}
        />
      </div>
    </div>
  );
};
export default Profile;
