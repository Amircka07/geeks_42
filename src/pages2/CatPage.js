import React from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCat } from "../redux/actions";

export const CatPage = () => {
  const catImage = useSelector((state) => state.catReducer.catImage);
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <h2>Random Cats</h2>
      <Button onClick={() => dispatch(fetchCat())}>Get Add Cat</Button>
      {catImage && <Image src={catImage} fluid className="mt-3" />}
    </div>
  );
};
