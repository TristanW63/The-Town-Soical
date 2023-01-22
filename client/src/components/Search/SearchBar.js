import React, { useState } from "react";
import { QUERY_USERS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import NavBar from "../Navbar/Navbar";
import "./SearchBar.css";

const SearchPage = () => {
  const { username: userParam } = useParams();
  const [userSearch, setUserSearch] = useState("");

  const { data } = useQuery(QUERY_USERS, {
    variables: { username: userParam },
  });

  const users = data?.users || {};

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log(data);
    setUserSearch("");
    console.log(userSearch, "hmmmmm");

    const userArray = Object.values(users);

    for (let i = 0; i < users.length; i++) {
      if (userSearch === userArray[i].username) {
        console.log("ladies and dudes we found " + userSearch);
      }else{
        console.log("no match my man")
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "UserSearch") {
      setUserSearch(value);
    }
  };

  return (
    <div className="Home">
      <NavBar />
      <Form className="SearchBar" onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            name="UserSearch"
            placeholder="Search..."
            onChange={handleChange}
            value={userSearch}
          />
        </Form.Group>
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};

export default SearchPage;
