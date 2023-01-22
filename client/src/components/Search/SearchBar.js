import React, {useState} from 'react';
import { QUERY_USERS } from '../../utils/queries';
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";


const SearchPage = () => {
    const { username: userParam } = useParams();
    const [userSearch, setUserSearch] = useState("");
  
    const { data } = useQuery(QUERY_USERS, {
      variables: { username: userParam },
    });
  
    const users = data?.users || {};
  
  console.log(users)

  const handleFormSubmit = (event) => {
    const { name, value } = event.target;

    if (name === "UserSearch" && value.length <= 280) {
      setUserSearch(value);
    }
  };

  console.log(userSearch)

  for(let i = 0; i < users.length; i++) {
    if (users.username === userSearch) {
        console.log("ladies and dudes we found" + {userSearch})
    }
  }

  return (
    <div>
        <div>
            <input type="text" 
            name='UserSearch'
            placeholder="Search..." 
            onChange={handleFormSubmit}
            value={userSearch}
            />
            <button type="submit">Search</button>
        </div>
    </div>
  );
}

export default SearchPage;

