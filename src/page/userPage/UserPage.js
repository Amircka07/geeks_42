import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, changeInput } from "../../store/userSlice";

export const UserPage = () => {
  const dispatch = useDispatch();
  const { inputValue, users } = useSelector((state) => state.userSlice);
  const changeInputFunc = (event) => {
    dispatch(changeInput(event.target.value));
  };

  const addUserFunc = () => {
    dispatch(addUser(inputValue));
  };

  return (
    <div>
      <input type="text" placeholder="name" onChange={changeInputFunc} />
      <button onClick={addUserFunc}>add user</button>
      {users.map((user, i) => (
        <p key={i}>{user}</p>
      ))}
    </div>
  );
};
