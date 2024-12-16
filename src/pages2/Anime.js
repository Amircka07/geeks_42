import React from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnime } from "../redux/actions";

export const Anime = () => {
  const anime = useSelector((state) => state.fiveReducer.anime);
  const dispatch = useDispatch();
  console.log(anime);

  return (
    <div>
      <h2>Random Anime</h2>
      <Button onClick={() => dispatch(fetchAnime())}>Get Random Anime</Button>
      {anime &&
        anime.map((a, index) => (
          <div key={index}>
            <h3>{a.title}</h3>
            <Image src={a.images.jpg.image_url} alt={a.title} />
          </div>
        ))}
    </div>
  );
};
