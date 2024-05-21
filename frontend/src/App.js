import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
