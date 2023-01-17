import React, { useState } from "react";
import "./Home.css";
import NavBar from "./../Navbar/Navbar";
import { QUERY_POSTS } from "../../utils/queries"
import { useQuery, useMutation } from "@apollo/client";
// import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import PostsList from "../Posts/Posts";

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);

  const posts = data?.posts || {};

  return (
    <div className="App">
      <NavBar />
      <div className="my-3">
      <PostsList
      posts={posts}
      title="some feed for posts"
      />
    </div>
    </div>
  );
};

export default Home;
