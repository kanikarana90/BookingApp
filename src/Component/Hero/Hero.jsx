import React from "react";
import "./Hero.css";
import homeImage from "../../assets/hero1.jpg"; // Use the image you prefer

import FlightBooking from "../Booking/booking";
import PopularDestinations from "../PopularDest/PopularDest";
import Offers from "../Offers/Offers";
import Contact from "../Contact/Contact";
import Package from "../Package/Package";
import Testimo from "../Testimonials/Test";
import Dis from "../Discover/Discover";
import Aboutus from "../About/About";
import Footer from "../Footer/Footer";
import Disc from "../Discount/Discount";
import Programs from "../Discover/Discover"; // Ensure the correct import path

const Hero = () => {
  return (
    <div id="homeCont">
      <section className="homeC" style={{ backgroundImage: `url(${homeImage})` }}>
      <div className="homeContent container">
          <div className="bookform">
            <FlightBooking />
          </div>
        </div>
      </section>
      
      <div id="offers">
        <PopularDestinations />
      </div>

      {/* <div id="packPage">
        <Package />
      </div> */}

      {/* <div id="discover">
        <h1 className="heading13">What We Offer?</h1>
        <Dis />
      </div> */}

      <div id="discount">
        <Disc />
      </div>

      <div id="offersPage">
        <Offers />
      </div>

      <div id="aboutus">
        <Aboutus />
      </div>
      
      <div id="testimonials">
        <h1 className="heading">Testimonials</h1>
        <Testimo />
      </div>

      {/* <div id="contact">
        <Contact />
      </div> */}

      <Footer />
    </div>
  );
};

export default Hero;
