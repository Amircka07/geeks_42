import { useState } from "react";
import "./App.css";
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
import { Ax } from "./pages2/Ax";
import { MainPage } from "./page/MainPage/MainPage";
import { UserPage } from "./page/userPage/UserPage";
import { Count } from "./page/Count/Count";

function App() {
  // const [filter, setFilter] = useState("");

  return (
    <div className="App">
      {/* <MainPage /> */}
      {/* <UserPage /> */}
      <Count />
      {/* /*<div className="app-container">
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
      </div> */}
    </div> /*
    // <BrowserRouter>
    //   {/* <Menu /> */
    //   <AppNavBar />
    //   <div className="container mt-4">
    //     <Routes>
    //       {/* <Route index element={<UserRegisterPage />} />
    //       <Route path="/users" element={<UserListPge />} /> */}
    //       <Route path="/" element={<AboutPage />} />
    //       {/* <Route path="/cats" element={<CatPage />} />
    //       <Route path="/jokes" element={<JokePage />} /> */}
    //       <Route path="/about" element={<AboutPage />} />
    //       <Route path="/pokemon" element={<Pokemon />} />
    //       <Route path="/anime" element={<Anime />} />
    //       <Route path="/rick_and_morty" element={<RickAndMorty />} />
    //       <Route path="/book" element={<Book />} />
    //       <Route path="/harry_potter" element={<HarryPotter />} />
    //       <Route path="/ax" element={<Ax />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}
export default App;
