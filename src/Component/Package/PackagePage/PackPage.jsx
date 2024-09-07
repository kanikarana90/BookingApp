import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PackPage.css";
import FlightCard from "../../../Component/cards/FlightCard"; // Import FlightCard component
import HotelCard from "../../../Component/cards/Hotelcards";
import packHead from "../../../assets/packhead.jpg";
import packicon1 from "../../../assets/packicon1.png";
import packicon2 from "../../../assets/packicon2.png";
import packicon3 from "../../../assets/packicon3.png";
import hotelPackImg from "../../../assets/HotPack1.jpg"; // Add actual image paths
import flightPackImg from "../../../assets/HotPack2.jpg"; // Add actual image paths
import tourPackImg from "../../../assets/HotPack3.jpg"; // Add actual image paths
import hPack1 from "../../../assets/HotelP1.jpg";
import hPack2 from "../../../assets/HotelP2.jpg";
import hPack3 from "../../../assets/HotelP3.jpg";
import hPack4 from "../../../assets/HotelP4.jpg";
import hPack5 from "../../../assets/HotelP5.jpg";
// DUBAI
import hPack6 from "../../../assets/HotelP6.jpg";
import hPack7 from "../../../assets/HotelP7.jpg";
import hPack8 from "../../../assets/HotelP8.jpg";


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 1200,
};

const packages = [
  {
    id: 1,
    title: "Hotel Pack",
    description: "Experience luxury and comfort.",
    imageUrl: hotelPackImg,
  },
  {
    id: 2,
    title: "Flight Pack",
    description: "Fly with the best airlines.",
    imageUrl: flightPackImg,
  },
  {
    id: 3,
    title: "Tour Pack",
    description: "Discover amazing places.",
    imageUrl: tourPackImg,
  },
];

const hotelsData = [
  // New York
  {
    id: 1,
    name: "Hotel A",
    destination: "New York",
    image: hPack1,
  },
  {
    id: 2,
    name: "Hotel B",
    destination: "New York",
    image: hPack2,
  },
  {
    id: 3,
    name: "Hotel C",
    destination: "New York",
    image: hPack3,
  },
  {
    id: 4,
    name: "Hotel D",
    destination: "New York",
    image: hPack4,
  },
  {
    id: 5,
    name: "Hotel E",
    destination: "New York",
    image: hPack5,
  },
  // Dubai
  {
    id: 6,
    name: "Hotel F",
    destination: "Dubai",
    image: hPack6,
  },
  {
    id: 7,
    name: "Hotel G",
    destination: "Dubai",
    image: hPack7,
  },
  {
    id: 8,
    name: "Hotel H",
    destination: "Dubai",
    image: hPack8,
  },
  // Add more hotels as needed
];
const flightsData = [
  {
    id: 1,
    airline: "Airline 1",
    destination: "Destination 1",
    price: 200,
    offers: "10% off on bookings before May 31st",
  },
  {
    id: 2,
    airline: "Airline 2",
    destination: "Destination 2",
    price: 250,
    offers: "Free cancellation until 48 hours before departure",
  },
  // Add more flight data as needed
];

const handleSearchChange = (e) => {
  setSearchTerm(e.target.value);
  filterHotels(e.target.value);
};

const filterHotels = (searchTerm) => {
  const filtered = hotelsData.filter((hotel) =>
    hotel.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredHotels(filtered);
};


const PackPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedHotels, setDisplayedHotels] = useState(4);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterHotels(e.target.value);
  };

  const filterHotels = (searchTerm) => {
    const filtered = hotelsData.filter((hotel) =>
      hotel.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filtered;
  };

  const sortHotelsByPrice = () => {
    const sorted = [...filteredHotels].sort((a, b) => a.price - b.price);
    setFilteredHotels(sorted); // Update the filteredHotels state with sorted hotels
  };

  const loadMoreHotels = () => {
    setDisplayedHotels((prevCount) => prevCount + 4);
  };
  

  const [filteredHotels, setFilteredHotels] = useState(filterHotels(""));

  
  return (
    <div>
      <div className="Packhead">
        <div className="packLeft">
          <img src={packicon1} alt="" className="Picon1" />
          <img src={packicon2} alt="" className="Picon2" />
          <div className="PackLeftCont">
            <h1>Explore the World</h1>
            <p>Join us on an adventure of a lifetime.</p>
          </div>
          <img src={packicon3} alt="" className="Picon3" />
        </div>
        <div className="packRight">
          <img src={packHead} alt="Tour" className="caveimg" />
        </div>
      </div>
      <div className="choicePack">
        <div className="chPack">
          <div className="hotelpack">Hotel Pack</div>
          <div className="FlightPack">Flight Pack</div>
          <div className="tourPack">Tour Pack</div>
          <div className="FlightPack">Flight Pack</div>
          <div className="tourPack">Tour Pack</div>
        </div>
      </div>
      <div className="hotpackCont">
        <div className="titPackCont">
          <h1 className="titPack">Hotels</h1>
          <h2 className="titPack2">Special Packages</h2>
        </div>
        
        
      </div>
      
    </div>
  );
};

export default PackPage;
