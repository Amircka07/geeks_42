import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rickand } from "../components/Rickand";
import { axiosUserAction } from "../redux/actions";

export const RickandPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.RickandReducer.user);
  console.log(user);
  const getAxios = () => {
    dispatch(axiosUserAction());
  };
  useEffect(() => {
    getAxios();
  }, []);
  return (
    <div className="rick">
      {user.map((users) => (
        <Rickand info={users} />
      ))}
    </div>
  );
};
