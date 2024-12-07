import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withParamsAction } from "../../redux/actions";

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.contactsReducer.contactsTitle);
  const [input, setInput] = useState("");

  const withParams = () => {
    dispatch(withParamsAction("hello geeks "));
  };
  const addInput = () => {
    dispatch(withParamsAction(input));
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={withParams}>change title with params</button>
      <p>----------------------------------</p>
      <input type="text" onChange={(event) => setInput(event.target.value)} />
      <button onClick={addInput}>add</button>
    </div>
  );
};
