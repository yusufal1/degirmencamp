import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Options from "./pages/Options";
import OurEvents from "./pages/OurEvents";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import CustomerComments from "./pages/CustomerComments";
import Reservation from "./pages/Reservation";
import Faq from "./pages/Faq";
import ScrollToTopButton from './components/ScrollToTopButton';
import Bookings from "./pages/admin/Bookings";
import Navigation from "./components/admin/Navigation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

const MainLayout = () => (
  <>
    <Header />
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/hakkimizda" element={<About />} />
      <Route path="/seceneklerimiz" element={<Options />} />
      <Route path="/etkinliklerimiz" element={<OurEvents />} />
      <Route path="/galeri" element={<Gallery />} />
      <Route path="/iletisim" element={<Contact />} />
      <Route path="/yorumlar" element={<CustomerComments />} />
      <Route path="/rezervasyon" element={<Reservation />} />
      <Route path="/sss" element={<Faq />} />
    </Routes>
    <ScrollToTopButton />
    <Footer />
  </>
);

const AdminLayout = () => (
  <div className="flex">
  <Navigation/>
  <Routes>
    <Route exact path="/" element={<Bookings />} />
    <Route exact path="/rezervasyonlar" element={<Bookings />} />
  </Routes>
  </div>
);

export default App;
