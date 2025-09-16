import React, { useEffect, useState } from "react";
import "./style.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error fetching users");
      }

      const data = await response.json();
      const names = data.map((user) => user.name);
      setUsers(names);
    } catch (error) {
      console.log("error fetching users ", error);
      setUsers([]);
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

  return (
    <>
      {users.length > 0 ? (
        <ol>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ol>
      ) : (
        "No users Found"
      )}
    </>
  );
};

export default App;
