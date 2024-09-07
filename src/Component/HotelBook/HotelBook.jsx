import React, { useState } from "react";
import "./HotelBook.css"; // Import the CSS file for styling

import {
  FaRegCheckCircle,
  FaRegMoon,
  FaCreditCard,
  FaCalendarAlt,
} from "react-icons/fa"; // Import the Font Awesome icons
import Hcard1 from "../../assets/HotelP20.jpg";
import Hcard2 from "../../assets/HotelP4.jpg";
import Hcard3 from "../../assets/HotelP6.jpg";
import Hcard5 from "../../assets/HotelP10.jpg";
import Hcard6 from "../../assets/HotelP11.jpg";

import U1 from "../../assets/Uniq1.jpg"
import U2 from "../../assets/Uniq2.jpg"
import U3 from "../../assets/Uniq3.jpg"
import U4 from "../../assets/Uniq4.jpg"
import U5 from "../../assets/Uniq5.jpg"
import U6 from "../../assets/Uniq6.jpg"

import Footer from "../Footer/Footer";

const HotelBook = () => {
  const [showRoomBox, setShowRoomBox] = useState(false);
  const [rooms, setRooms] = useState([]);

  const addRoom = () => {
    setRooms([...rooms, { adults: 1, children: 0 }]);
  };

  const handleRoomChange = (index, field, value) => {
    const newRooms = [...rooms];
    newRooms[index][field] = value;
    setRooms(newRooms);
  };

  const handleDone = () => {
    setShowRoomBox(false);
  };

  const [value, setValue] = useState(1);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="hotelCont">
      <div className="hotelimg">
        {/* -------------------------------------------------- */}
  
  
        {/* -------------------------------------------------- */}
      </div>
      <div className="Hotelbox1">
        <div className="hBox1">
          <h1 className="con1">Find and book your perfect stay</h1>
        </div>
        <div className="hBox2">
          <FaRegMoon className="Hicon" />

          <h4 className="con2">Earn rewards on every night you stay</h4>
        </div>
        <div className="hBox3">
          <FaCreditCard className="Hicon" />

          <h4 className="con3">Save more with member prices</h4>
        </div>
        <div className="hBox4">
          <FaCalendarAlt className="Hicon" />
          <h4 className="con4">Free cancellation options if plans change</h4>
        </div>
      </div>
      <div className="hotelType">
        <h2 className="hotelTypeContent">Go beyond your typical stay</h2>
        <div className="hotelcardsType">
          <div className="Hcard1">
            <img src={Hcard1} alt="" />
            <div className="text">All inclusive</div>
          </div>
          <div className="Hcard1">
            <img src={Hcard2} alt="" />
            <div className="text">HouseBoat</div>
          </div>
          <div className="Hcard1">
            <img src={Hcard3} alt="" />
            <div className="text">Spa</div>
          </div>
          <div className="Hcard1">
            <img src={Hcard5} alt="" />
            <div className="text">Resort</div>
          </div>
          <div className="Hcard1">
            <img src={Hcard6} alt="" />
            <div className="text">Villa</div>
          </div>
        </div>
      </div>
      <div className="UniqueCont">
        <div className="Ucon">
          <h5 className="ucon1">Explore these unique stays</h5>
          <p>Showing deals for: Present Date</p>
        </div>
        <div className="UniqCard">
          {/*  */}
          <div className="destinationCard1">
            <img
              src={U1}
              alt="Destination"
              class="destinationImage"
            />
            <div class="destinationDetails">
              <h3 class="destinationName">Destination Name</h3>
              <p class="destinationAddress">Destination Address</p>
              <div class="destinationRating">
                Rating: <span>4.5</span>
              </div>
              <div class="destinationPrices">
                <p class="pricePerNight">Price per night: $100</p>
                <p class="totalPrice">Total: $300</p>
              </div>
              <div class="memberPriceTag">Member price available</div>
            </div>
          </div>
          {/*  */}
          <div className="destinationCard2">
            <img
              src={U2}
              alt="Destination"
              class="destinationImage"
            />
            <div class="destinationDetails">
              <h3 class="destinationName">Destination Name</h3>
              <p class="destinationAddress">Destination Address</p>
              <div class="destinationRating">
                Rating: <span>4.5</span>
              </div>
              <div class="destinationPrices">
                <p class="pricePerNight">Price per night: $100</p>
                <p class="totalPrice">Total: $300</p>
              </div>
              <div class="memberPriceTag">Member price available</div>
            </div>
          </div>

          <div className="destinationCard3">
            <img
              src={U3}
              alt="Destination"
              class="destinationImage"
            />
            <div class="destinationDetails">
              <h3 class="destinationName">Destination Name</h3>
              <p class="destinationAddress">Destination Address</p>
              <div class="destinationRating">
                Rating: <span>4.5</span>
              </div>
              <div class="destinationPrices">
                <p class="pricePerNight">Price per night: $100</p>
                <p class="totalPrice">Total: $300</p>
              </div>
              <div class="memberPriceTag">Member price available</div>
            </div>
          </div>

          <div className="destinationCard4">
            <img
              src={U4}
              alt="Destination"
              class="destinationImage"
            />
            <div class="destinationDetails">
              <h3 class="destinationName">Destination Name</h3>
              <p class="destinationAddress">Destination Address</p>
              <div class="destinationRating">
                Rating: <span>4.5</span>
              </div>
              <div class="destinationPrices">
                <p class="pricePerNight">Price per night: $100</p>
                <p class="totalPrice">Total: $300</p>
              </div>
              <div class="memberPriceTag">Member price available</div>
            </div>
          </div>

          <div className="destinationCard5">
            <img
              src={U5}
              alt="Destination"
              class="destinationImage"
            />
            <div class="destinationDetails">
              <h3 class="destinationName">Destination Name</h3>
              <p class="destinationAddress">Destination Address</p>
              <div class="destinationRating">
                Rating: <span>4.5</span>
              </div>
              <div class="destinationPrices">
                <p class="pricePerNight">Price per night: $100</p>
                <p class="totalPrice">Total: $300</p>
              </div>
              <div class="memberPriceTag">Member price available</div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HotelBook;
