import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';  // Import useTranslation
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Add this line
import './App.css';

// Components
import Navbar from './Component/NavBar/Navbar';
import SignIn from './Component/auth/SignIn';
import SignUp from './Component/auth/SignUp';
import Dest from './Component/PopularDest/destPage/PopDest';
import Hero from './Component/Hero/Hero';
import France from './Component/PopularDest/Destinations/France/France';
import HotelBook from './Component/HotelBook/HotelBook';
import Japan from './Component/PopularDest/Destinations/Japan/japan';
import Nyc from './Component/PopularDest/Destinations/Nyc/nyc';
import FlightBooking from './Component/Booking/booking';
import BookFlightsPage from './Component/Booking/BookFlights';
import Offers from './Component/Offers/Offers'; // Ensure Offers component is imported
import OffersPage from './Component/Offers/OffersPage';
import PackPage from './Component/Package/PackagePage/PackPage';
import AuthModal from './Component/auth/SignupModal'; // Ensure AuthModal is imported
import Contact from "./Component/Contact/Contact";
import Apage from "./Component/About/AboutPage";
import WhatsAppButton from "./Component/Whatsapp/Whatsapp";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const { t } = useTranslation(); // Corrected destructuring of useTranslation
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to update authentication status
  const handleAuthentication = (authenticated) => {
    setIsAuthenticated(authenticated);
  };

  return (
    <Router>
      <div>
        
        <Navbar isAuthenticated={isAuthenticated} handleAuthentication={handleAuthentication} />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/popdest" element={<Dest />} />
          <Route path="/France" element={<France />} />
          <Route path="/Japan" element={<Japan />} />
          <Route path="/Nyc" element={<Nyc />} />
          <Route path="/Hotelbook" element={<HotelBook />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/flight-booking" element={<FlightBooking />} />
          <Route path="/available" element={<BookFlightsPage />} />
          <Route path="/offers" element={<Offers />} /> {/* Add Offers route */}
          <Route path="/offersPage" element={<OffersPage />} />
          <Route path="/packPage" element={<PackPage />} />
          <Route path="/AboutP" element={<Apage />} />
        </Routes>
        <AuthModal isAuthenticated={isAuthenticated} handleAuthentication={handleAuthentication} />
      </div>
    </Router>
  );
}

export default App;
