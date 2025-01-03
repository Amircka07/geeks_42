import { useDispatch } from "react-redux";
import { types } from "./types";
import axios from "axios";

export function changeTitleAction() {
  return {
    type: types.CHANGE_TITLE,
  };
}

export function withParamsAction(text) {
  return {
    type: types.WITH_PARAMS,
    payload: text,
  };
}

withParamsAction("hello geeks");

export const addTask = (task) => ({
  type: types.ADD_TASK,
  payload: task,
});
export const toggleTask = (taskId) => ({
  type: types.TOGGLE_TASK,
  payload: taskId,
});

export const Change = (task) => ({
  type: types.CHANGE,
  payload: task,
});

export const Delete = (id) => ({
  type: types.DELETE,
  payload: id,
});

export function asynFunctionAction() {
  return function () {
    setTimeout(() => {
      alert("Hello");
    }, 2000);
  };
}

function getUserAction(users) {
  return {
    type: "USER",
    payload: users,
  };
}

export function fetchUsersAction() {
  return async function (dispatch) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dispatch(getUserAction(data));
  };
}

export const searchUserRequest = () => ({
  type: types.SEARCH_USERS_REQUEST,
});

export const searchUsersSucces = (users) => ({
  type: types.SEARCH_USERS_SUCCES,
  payload: users,
});

export const searchUsersFailure = (error) => ({
  type: types.SEARCH_USERS_FAILURE,
  payload: error,
});

export const fetchUsers = (query) => async (dispatch) => {
  dispatch(searchUserRequest());
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    dispatch(searchUsersSucces(response.data.items));
  } catch (error) {
    dispatch(searchUsersFailure(error.message));
  }
};

//DZ
function forAxios(user) {
  return {
    type: types.FOR_AXIOS,
    payload: user,
  };
}

export function axiosUserAction() {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      dispatch(forAxios(response.data.results));
    } catch (error) {
      console.error("Ошибка при запросе:", error);
    }
  };
}

////

export const fetchCharacters =
  (page = 1) =>
  async (dispatch) => {
    dispatch({ type: types.FETCH_CHARACTERS_REQUEST });
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      dispatch({
        type: types.FETCH_CHARACTERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: types.FETCH_CHARACTERS_FAILURE, error: error.message });
    }
  };

////

export const addUserAction = (user) => async (dispatch) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    options
  );
};

export const fetchCatSuccess = (catImage) => ({
  type: types.FETCH_CAT_SUCCES,
  payload: catImage,
});

export const fetchCat = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search"
    );
    dispatch(fetchCatSuccess(response.data[0].url));
  } catch (error) {
    console.error(error);
  }
};

export const fetchJokeSuccess = (joke) => ({
  type: types.FETCH_JOKE_SUCCES,
  payload: joke,
});

export const fetchJoke = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const joke = `${response.data.setup}-${response.data.punchline}`;
    dispatch(fetchJokeSuccess(joke));
  } catch (error) {
    console.error(error);
  }
};

//
//
//
//

export const fetchPokemonSuccess = (pokemons) => ({
  type: types.FETCH_POKEMON,
  payload: pokemons,
});

export const fetchPokemon = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=5"
    );
    const results = response.data.results;
    const pokemonList = results.map((pokemon, index) => ({
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
    }));

    dispatch(fetchPokemonSuccess(pokemonList));
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
  }
};

//
//

export const fetchAnimeSuccess = (anime) => ({
  type: types.FETCH_ANIME,
  payload: anime,
});

export const fetchAnime = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://api.jikan.moe/v4/anime?q=Attack%20on%20Titan"
    );
    const anime = response.data.data;
    dispatch(fetchAnimeSuccess(anime));
  } catch (error) {
    console.error(error);
  }
};

//
//

export const fetchRickAndMortySuccess = (character) => ({
  type: types.FETCH_RICK_AND_MORTY,
  payload: character,
});

export const fetchRickAndMorty = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    const char = response.data.results;
    dispatch(fetchRickAndMortySuccess(char));
  } catch (error) {
    console.error("Error fetching Rick and Morty character:", error);
  }
};

//
//

export const fetchHarrySuccess = (har) => ({
  type: types.FETCH_HARRY_POTTER,
  payload: har,
});

export const fetchHarryPotter = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters/house/gryffindor"
    );
    dispatch(fetchHarrySuccess(response.data));
  } catch (error) {
    console.error(error);
  }
};

//
//

export const fetchBookSuccess = (books) => ({
  type: types.FETCH_BOOK,
  payload: books,
});

export const fetchBook = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=books`
    );

    const bookData = response.data.items;
    dispatch(fetchBookSuccess(bookData));
  } catch (error) {
    console.error("Error fetching book data:", error);
  }
};

const axiosFetchSuccess = (ax) => ({
  type: types.AXIOS_FETCH_SUCCESS,
  payload: ax,
});

export const axiosFetch = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://ghibliapi.vercel.app/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49`
    );
    const vers = response.data;
    dispatch(axiosFetchSuccess([vers]));
  } catch (error) {
    console.error(error);
  }
};
