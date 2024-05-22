import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import About from "./pages/About";
import Options from "./pages/Options";
import OurEvents from "./pages/OurEvents";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/seceneklerimiz" element={<Options />} />
          <Route path="/etkinliklerimiz" element={<OurEvents />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
