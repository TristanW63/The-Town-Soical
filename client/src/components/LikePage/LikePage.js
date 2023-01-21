import React from "react";
import "../Home/Home.css";
import NavBar from "../Navbar/Navbar";
import PostsList from "../Posts/Posts";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_LIKED, QUERY_USER } from "../../utils/queries";


const LikesPage = () => {
    const { liker: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_LIKED, {
       variables: { liker: userParam },
      
    });
    // const user = data?.posts || {};
    
  console.log(data);
    if (loading) {
      return <h2>LOADING...</h2>;
    }
    if (!data || !data?.username) {
      return (
        <h4>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>
      );
    }

    return(
        <div className="Home">
            <NavBar />
            <div
        style={{ marginLeft: "15%", padding: "20px" }}
        className="flex-row justify-center col-md-6"
      >
          <PostsList
            posts={data.posts}
            title={`${data.username}'s thoughts...`}
            showTitle={false}
            showUsername={false}
            // refetch={refetch}
          />

      </div>
        </div>
    )
}

export default LikesPage;