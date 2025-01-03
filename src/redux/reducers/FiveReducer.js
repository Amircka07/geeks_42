import { types } from "../types";
const initialState = {
  pokemon: "",
  anime: "",
  rickAndMorty: null,
  book: [],
  harryPotter: "",
  ax: [],
};

export const fiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POKEMON:
      return { ...state, pokemon: action.payload };
    case types.FETCH_ANIME:
      return { ...state, anime: action.payload };
    case types.FETCH_RICK_AND_MORTY:
      return { ...state, rickAndMorty: action.payload };
    case types.FETCH_HARRY_POTTER:
      return { ...state, harryPotter: action.payload };
    case types.FETCH_BOOK:
      return { ...state, book: action.payload };
    case types.AXIOS_FETCH_SUCCESS:
      return { ...state, ax: action.payload };
    default:
      return state;
  }
};
