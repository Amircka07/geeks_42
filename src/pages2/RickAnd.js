import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Image } from "react-bootstrap";
import { fetchRickAndMorty } from "../redux/actions";

export const RickAndMorty = () => {
  const rickAndMorty = useSelector((state) => state.fiveReducer.rickAndMorty);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <h2>Random Rick and Morty Character</h2>
      <Button onClick={() => dispatch(fetchRickAndMorty())}>
        Get Character
      </Button>
      {rickAndMorty &&
        rickAndMorty.map((rick) => (
          <div>
            <h3>{rick.name}</h3>
            <Image src={rick.image} />
            <p>Species: {rick.species}</p>
            <p>Status: {rick.status}</p>
          </div>
        ))}
    </div>
  );
};
