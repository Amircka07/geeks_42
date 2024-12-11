import React from "react";
import { useSelector } from "react-redux";

export const UserList = () => {
  const { loading, users, error } = useSelector((state) => state.usersReducer);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error:{error}</p>;
  }
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-item">
          <img src={user.avatar_url} alt={user.login} />
          <a href={user.html_url} target="_blak" rel="m=noopener noreferr">
            {user.login}
          </a>
        </li>
      ))}
    </ul>
  );
};
