import React from "react";
import { useDispatch } from "react-redux";
import { asynFunctionAction } from "../redux/actions";

export const ChangeTitle = () => {
  const dispatch = useDispatch();

  const ChangeAboutTitle = () => {
    dispatch({
      type: "CHANGE_ABOUT-TITLE",
    });
  };
  return (
    <>
      {/* <button onClick={ChangeAboutTitle}>CHANGE_ABOUT</button> */}
      <button onClick={() => dispatch(asynFunctionAction())}>
        after 2 sec
      </button>
    </>
  );
};
