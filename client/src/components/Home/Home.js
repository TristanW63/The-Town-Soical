import React, { useState } from "react";
import "./Home.css";
import NavBar from "./../Navbar/Navbar";
import { QUERY_POSTS, QUERY_LIKES } from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
// import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import PostsList from "../Posts/Posts";

const Home = () => {
  const { data: postsData, loading: 
    postsLoading, error: postsError } = useQuery(QUERY_POSTS);
  const { data: likesData, loading: 
    likesLoading, error: likesError } = useQuery(QUERY_LIKES);

  const posts = postsData?.posts || {}
  // const likes = likesData?.likes || {}
  console.log(posts);

  // const postLike = [posts, likes];
  // const comments = data?.posts.comments || {}

  return (
    <div className="Home">
      <NavBar />
      <div style={{ marginLeft: "15%", padding: "20px"}} className="flex-row justify-center col-md-6">
        <PostsList posts={posts}  title="some feed for posts" />
        {/* likes={likes} */}
      </div>
    </div>
  );
};

export default Home;
