import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeInputAction,
  mainInfo,
  withParams,
  clearInput,
  deleteTitle,
} from "../../store/mainSlice";

export const MainPage = () => {
  const { title, inputValue } = useSelector((state) => state.mainReducer);
  const dispatch = useDispatch();
  const changeTitle = () => {
    dispatch(mainInfo());
  };
  const withParam = () => {
    dispatch(withParams(inputValue));
  };
  const changeInput = (event) => {
    dispatch(changeInputAction(event.target.value));
  };
  return (
    <div>
      <h1>{title}</h1>
      {/* <button onClick={changeTitle}>change tilte</button>
      <button onClick={withParam}>csdvfsf</button> */}

      <input type="text" value={inputValue} onChange={changeInput} />
      <button onClick={() => dispatch(clearInput())}>clear</button>
      <button onClick={withParam}>add</button>
      <button button onClick={() => dispatch(deleteTitle())}>
        delete
      </button>
    </div>
  );
};
