import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
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
import ContactMessages from "./pages/admin/ContactMessages";
import Login from "./pages/admin/Login";
import ProtectedRoute from "./components/admin/ProtectedRoutes";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </Router>
    </Provider>
  );
}

const MainLayout = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/hakkimizda" element={<About />} />
      <Route path="/seceneklerimiz" element={<Options />} />
      <Route path="/etkinliklerimiz" element={<OurEvents />} />
      <Route path="/galeri" element={<Gallery />} />
      <Route path="/iletisim" element={<Contact />} />
      <Route path="/yorumlar" element={<CustomerComments />} />
      <Route path="/rezervasyon" element={<Reservation />} />
      <Route path="/sss" element={<Faq />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <ScrollToTopButton />
    <Footer />
  </>
);

const AdminLayout = () => (
  <div className="flex">
    <Navigation />
    <Routes>
      <Route path="/" element={<Navigate to="giris" />} />
      <Route path="giris" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="rezervasyonlar" element={<Bookings />} />
        <Route path="mesajlar" element={<ContactMessages />} />
      </Route>
    </Routes>
  </div>
);

export default App;
