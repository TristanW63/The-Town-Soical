import React from "react";
import "./Home.css";
import NavBar from "./../Navbar/Navbar";
import { QUERY_POSTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import PostsList from "../Posts/Posts";

const Home = () => {
  const { data: postsData, refetch } = useQuery(QUERY_POSTS);

  const posts = postsData?.posts || {};

  return (
    <div className="Home">
      <NavBar />
      <div
        style={{ marginLeft: "15%", padding: "20px" }}
        className="flex-row justify-center col-md-6"
      >
        <PostsList
          posts={posts}
          title="some feed for posts"
          refetch={refetch}
        />
      </div>
    </div>
  );
};

export default Home;
