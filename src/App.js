import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import CategoryFilter from "./components/CategoryFilter";
import TaskList from "./components/TaskList";

import { TodoList } from "./components/TodoList";

function App() {
  const [filter, setFilter] = useState("");

  return (
    <div className="App">
      <div className="app-container">
        <h1>Task Manager</h1>
        <AddTask />
        <CategoryFilter onChange={setFilter} />
        <TaskList filter={filter} />
      </div>
    </div>
  );
}
export default App;
