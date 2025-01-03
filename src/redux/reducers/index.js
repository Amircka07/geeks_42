import { combineReducers } from "redux";
import titleReducer from "./titleReducer";
import contactsReducer from "./contactsReducer";
import taskReducer, { categoriesReducer } from "./taskReducer";
import usersReducer from "../usersReducer";
import RickandReducer from "../RickandReducer";
import { characterReducer } from "./CharacterReducer/CharacterReducer";
import { catReducer } from "./CatReducer";
import { fiveReducer } from "./FiveReducer";

export const rootReducer = combineReducers({
  titleReducer,
  contactsReducer,
  taskReducer,
  categoriesReducer,
  usersReducer,
  RickandReducer,
  characterReducer,
  catReducer,
  fiveReducer,
});
