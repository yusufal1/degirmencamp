import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import About from "./pages/About";
import Options from "./pages/Options";
import OurEvents from "./pages/OurEvents";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import CustomerComments from "./pages/CustomerComments";
import Reservation from "./pages/Reservation";
import Faq from "./pages/Faq";
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
            <Route exact path="/" element={<Homepage/>} component={() => <div>Ana Sayfa</div>} />
            <Route path="/hakkimizda" element={<About/>} component={() => <div>Hakkımızda</div>} />
            <Route path="/seceneklerimiz" element={<Options/>} component={() => <div>Seçeneklerimiz</div>} />
            <Route path="/etkinliklerimiz" element={<OurEvents/>} component={() => <div>Etkinliklerimiz</div>} />
            <Route path="/galeri" element={<Gallery/>} component={() => <div>Galeri</div>} />
            <Route path="/iletisim" element={<Contact/>} component={() => <div>İletişim</div>} />
            <Route path="/yorumlar" element={<CustomerComments/>}/>
            <Route path="/rezervasyon" element={<Reservation/>}/>
            <Route path="/sss" element={<Faq/>}/>
        </Routes>
        <ScrollToTopButton />
        <Footer/>
      </Router>
    </>
  );
}

export default App;
