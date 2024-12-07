import { types } from "./types";

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
