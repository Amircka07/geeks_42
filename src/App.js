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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserRegisterPage } from "./pages2/UserRegisterPage/UserRegisterPage";
import { UserListPge } from "./pages2/usersListPage/UserListPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { CatPage } from "./pages2/CatPage";
import { JokePage } from "./pages2/JokePage";
import { AboutPage } from "./pages2/AboutPage";
import Menu from "./components2/Menu";
import { AppNavBar } from "./pages2/NavBar";
import { Pokemon } from "./pages2/Pokemon";
import { Anime } from "./pages2/Anime";
import { RickAndMorty } from "./pages2/RickAnd";
import { Book } from "./pages2/Book";
import { HarryPotter } from "./pages2/HarryPotter";

function App() {
  // const [filter, setFilter] = useState("");

  return (
    /*<div className="App">
      <div className="app-container">
        <h1>Task Manager</h1>
        <AddTask />
        <CategoryFilter onChange={setFilter} />
        <TaskList filter={filter} /> 
        <ChangeTitle />
         <UserPage /> 
        <h1>GitHub User Search</h1>
        <SearchBar />
        <UserList /> 
         <RickandPage /> 
         <RickAndMortyPages />
      </div>
    </div>*/
    <BrowserRouter>
      {/* <Menu /> */}
      <AppNavBar />
      <div className="container mt-4">
        <Routes>
          {/* <Route index element={<UserRegisterPage />} />
          <Route path="/users" element={<UserListPge />} /> */}
          <Route path="/" element={<AboutPage />} />
          {/* <Route path="/cats" element={<CatPage />} />
          <Route path="/jokes" element={<JokePage />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/rick_and_morty" element={<RickAndMorty />} />
          <Route path="/book" element={<Book />} />
          <Route path="/harry_potter" element={<HarryPotter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
