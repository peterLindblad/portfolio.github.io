import NavBar from "./components/nav/NavBar";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import Footer from "./components/footer/Footer";

function App() {
  const wrapper = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <BrowserRouter>
      <div style={wrapper}>
        <NavBar />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
