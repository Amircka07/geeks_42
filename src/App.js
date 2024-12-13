import { useState } from "react";
import "./App.css";
import CategoryFilter from "./components/CategoryFilter";
import TaskList from "./components/TaskList";

import { TodoList } from "./components/TodoList";
import { ChangeTitle } from "./components/ChangeTitle";
import { UserPage } from "./pages/userPage/UserPage";
import SearchBar from "./components/SearchBar";
import { UserList } from "./components/UserList";
import { RickandPage } from "./pages/RickandPage";
import { RickAndMortyPages } from "./pages/RickAndMortyPages";

function App() {
  const [filter, setFilter] = useState("");

  return (
    <div className="App">
      <div className="app-container">
        {/* <h1>Task Manager</h1>
        <AddTask />
        <CategoryFilter onChange={setFilter} />
        <TaskList filter={filter} /> */}
        {/* <ChangeTitle /> */}
        {/* <UserPage /> */}
        {/* <h1>GitHub User Search</h1> */}
        {/* <SearchBar />
        <UserList /> */}
        {/* <RickandPage /> */}
        <RickAndMortyPages />
      </div>
    </div>
  );
}
export default App;
