import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction } from "../../redux/actions";
import { UserCard } from "../../components/UserCard";

export const UserPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);
  console.log(users);

  const getUsers = () => {
    dispatch(fetchUsersAction());
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <div className="cardsBlock">
        {/* <button onClick={getUsers}>get users</button> */}
        {users.map((user) => (
          <UserCard userInfo={user} />
        ))}
      </div>
    </div>
  );
};
