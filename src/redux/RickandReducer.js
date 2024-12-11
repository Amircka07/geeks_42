import { types } from "./types";
const initialState = {
  user: [],
};

export default function RickandReducer(state = initialState, action) {
  switch (action.type) {
    case types.FOR_AXIOS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
