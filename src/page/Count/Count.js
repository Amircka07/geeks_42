import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Increment,
  Decrement,
  Decrement_10,
  Increment_10,
  Reset,
} from "../../store/CountSlice";

export const Count = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.CountSlice.number);
  const Increment_1 = () => {
    dispatch(Increment());
  };
  const Decrement_1 = () => {
    dispatch(Decrement());
  };
  const Decrement10 = () => {
    dispatch(Decrement_10());
  };
  const Increment10 = () => {
    dispatch(Increment_10());
  };
  const ResetBtn = () => {
    dispatch(Reset());
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={Increment_1}>+1</button>
      <button onClick={Decrement_1}>-1</button>
      <button onClick={Increment10}>+10</button>
      <button onClick={Decrement10}>-10</button>
      <button onClick={ResetBtn}>reset</button>
    </div>
  );
};
