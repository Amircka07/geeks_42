import { types } from "../types";

const initialTasksState = [];

export default function taskReducer(state = initialTasksState, action) {
  switch (action.type) {
    case types.ADD_TASK:
      return [...state, action.payload];
    case types.TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    case types.DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    case types.CHANGE:
      return state.map((task) =>
        task.id === action.payload.id // Сравниваем ID задач
          ? { ...task, text: action.payload.text } // Обновляем текст задачи
          : task
      );

    default:
      return state;
  }

  // if (action.type === types.ADD_TASK) {
  //   return [...state, action.payload];
  // } else if (action.type === types.TOGGLE_TASK) {
  //   return state.map((task) =>
  //     task.id === action.payload
  //       ? { ...task, completed: !task.completed }
  //       : task
  //   );
  // } else if (action.type === types.DELETE) {
  //   return state.filter((todo) => todo.id !== action.payload);
  // } else {
  //   return state;
  // }
}

const initialCategoriesState = [
  "Work",
  "Personal",
  "Other",
  "User",
  "Business",
];

export const categoriesReducer = (state = initialCategoriesState, action) => {
  return state;
};
