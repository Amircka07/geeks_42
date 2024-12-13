import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CharacterCard } from "../components/Ricky/RickAndMortyCard";
import { fetchCharacters } from "../redux/actions";

export const RickAndMortyPages = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const { loading, characters, error, info } = useSelector(
    (state) => state.characterReducer
  );
  useEffect(() => {
    dispatch(fetchCharacters(page));
  }, [dispatch, page]);
  const LoadMore = () => {
    if (info.next) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="character-grid">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      {info.next && (
        <button onClick={LoadMore} className="load-more">
          Show More
        </button>
      )}
    </div>
  );
};
