import React from "react";
import useFetch from "../custom_hooks/GetData";

const UserDetails = () => {
  const { data, isPending, error } = useFetch('/api/users');

  return (
    <div>
      <h1>Users</h1>
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data && data.map(user => (
          <li key={user.id}>
            <p>{user.name} - {user.email}</p>
            {user.imageUrl && <img src={user.imageUrl} alt={user.name} width="100" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;