// import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { axiosFetch } from "../redux/actions";
import { useState } from "react";

export const Ax = () => {
  const ax = useSelector((state) => state.fiveReducer.ax);
  const dispatch = useDispatch();
  const [info, setInfo] = useState([]);

  const Handle = () => {
    const newInfo = ax.map((axs) => ({
      description: axs.description,
      director: axs.director,
    }));
    setInfo((prevInfo) => [...prevInfo, ...newInfo]);
  };

  return (
    <div>
      <h2>Random</h2>
      <Button onClick={() => dispatch(axiosFetch())}>Get</Button>
      {ax &&
        ax.map((axs, index) => (
          <div key={index}>
            <h3>{axs.title}</h3>
            <h2>{axs.original_title}</h2>
            <Button onClick={Handle}>ЕЩЕ</Button>

            {info.map((info, index) => (
              <div key={index}>
                <h3>{info.description}</h3>
                <h2>{info.director}</h2>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};
