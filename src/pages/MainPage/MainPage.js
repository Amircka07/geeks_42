import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTitleAction } from "../../redux/actions";

export const MainPage = () => {
  const mainTitle = useSelector((state) => state.titleReducer.title);
  const dispatch = useDispatch();
  const changeTitle = () => {
    dispatch(changeTitleAction());
  };
  return (
    <div>
      <h1>{mainTitle}</h1>
      <button onClick={changeTitle}>change title</button>
    </div>
  );
};
