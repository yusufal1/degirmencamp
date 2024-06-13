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
import EventsContent from "./pages/admin/EventsContent";
import AdminSettings from "./pages/admin/AdminSettings";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route path="/*" element={<MainLayout />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

const MainLayout = () => (
  <>
    <Header />
    <div className="MainContent">
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
    </div>
  </>
);

const AdminLayout = () => (
  <div className="flex">
    <Navigation />
    <div className="ml-72 w-full p-8">
      <Routes>
        <Route path="/" element={<Navigate to="giris" />} />
        <Route path="giris" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/rezervasyonlar" element={<Bookings />} />
          <Route path="/mesajlar" element={<ContactMessages />} />
          <Route path="/ayarlar" element={<AdminSettings />} />
          <Route path="/etkinlik-icerik" element={<EventsContent />} />
        </Route>
      </Routes>
    </div>
  </div>
);

export default App;
