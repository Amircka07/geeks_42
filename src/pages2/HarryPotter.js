import React from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchHarryPotter } from "../redux/actions";
export const HarryPotter = () => {
  const harryPotter = useSelector((state) => state.fiveReducer.harryPotter);
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <h2>Harry Potter</h2>
      <Button onClick={() => dispatch(fetchHarryPotter())}>Get Add Cat</Button>
      {harryPotter &&
        harryPotter.map((character, index) => (
          <div key={index}>
            <h3>{character.name}</h3>
            <Image src={character.image} alt={character.name} />
          </div>
        ))}
    </div>
  );
};
