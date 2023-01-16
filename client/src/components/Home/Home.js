import React from "react";
import "./Home.css";
import NavBar from "./../Navbar/Navbar";
import Post from "../Post/Post";

const Home = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="boxes">
        <Post />
      </div>
    </div>
  );
};

export default Home;
