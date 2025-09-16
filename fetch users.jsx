import React, { useEffect, useState } from "react";
import "./style.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [term, setTerm] = useState("");

  const filterInput = (event) => {
    const term = event.target.value;
    setTerm(term);
    const filtered = users.filter((user) => {
      return user.toLowerCase().includes(term);
    });
    setFilteredUsers(filtered);
  };

  const fetchUsers = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      setIsLoading(true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const data = await response.json();
      const names = data.map((user) => user.name);
      setUsers(names);
      setFilteredUsers(names)
    } catch (error) {
      setError("Error fetching data");
      console.log("Error fetching data ", error);
      setUsers([]);
      setFilteredUsers([])
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) {
    return <p>Fetching users....</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search users..."
        value={term}
        onChange={filterInput}
      ></input>
      {filteredUsers.length > 0 ? (
        <ol>
          {filteredUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ol>
      ) : (
        <p>No matching users</p>
      )}
    </>
  );
};

export default App;
