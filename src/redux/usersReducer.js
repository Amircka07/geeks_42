import { types } from "./types";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export default function usersReducer(state = initialState, action) {
  // if (action.type === "USER") {
  //   return { ...state, users: action.payload };
  // }
  switch (action.type) {
    case types.SEARCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case types.SEARCH_USERS_SUCCES:
      return { ...state, loading: false, error: null, users: action.payload };
    case types.SEARCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
  // return state;
}
