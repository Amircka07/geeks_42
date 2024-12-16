import React from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../redux/actions";

export const Pokemon = () => {
  const pokemon = useSelector((state) => state.fiveReducer.pokemon);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Random Pokemon</h2>
      <Button onClick={() => dispatch(fetchPokemon())}>Get Pokemon</Button>
      {pokemon &&
        pokemon.map((p, index) => (
          <div key={index}>
            <h3>{p.name}</h3>
            <Image src={p.image} alt={p.name} />
          </div>
        ))}
    </div>
  );
};
