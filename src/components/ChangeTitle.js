import React from "react";
import { useDispatch } from "react-redux";

export const ChangeTitle = () => {
  const dispatch = useDispatch();

  const ChangeAboutTitle = () => {
    dispatch({
      type: "CHANGE_ABOUT-TITLE",
    });
  };
  return (
    <>
      <button onClick={ChangeAboutTitle}>CHANGE_ABOUT</button>
    </>
  );
};
