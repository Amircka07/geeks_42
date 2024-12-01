import "./App.css";
import { ChangeTitle } from "./components/ChangeTitle";
import AboutPage from "./pages/AboutPage/AboutPage";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import { MainPage } from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      {/* <h1>--------------</h1> */}
      {/* <AboutPage /> */}
      {/* <ChangeTitle /> */}
      <ContactsPage />
    </div>
  );
}
export default App;
