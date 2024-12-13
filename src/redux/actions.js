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
