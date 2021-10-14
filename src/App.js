import NavBar from "./components/nav/NavBar";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import ContentContainer from "./components/content/ContentContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
      <ContentContainer />
    </BrowserRouter>
  );
}

export default App;
