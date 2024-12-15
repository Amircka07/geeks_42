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
      {rickAndMorty && (
        <div className="mt-3">
          <h3>{rickAndMorty.name}</h3>
          <Image src={rickAndMorty.image} rounded fluid />
          <p>Species: {rickAndMorty.species}</p>
          <p>Status: {rickAndMorty.status}</p>
        </div>
      )}
    </div>
  );
};
