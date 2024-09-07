import React from "react";
import franceImage from "../../../../assets/france1.jpg"; // Import a beautiful image of France
import bordeaux from "../../../../assets/bordeaux.jpg";
import frenchrivera from "../../../../assets/frenchRivera.jpg";
import lyon from "../../../../assets/Lyon.jpg";
import nice from "../../../../assets/nice.jpg";
import paris from "../../../../assets/paris.jpg";
import "./France.css"; // Import your CSS file for styling
import francetime from "../../../../assets/francetime.jpg";
// Hotel images
import hotel1Image from "../../../../assets/francehot1.jpg";
import hotel2Image from "../../../../assets/francehot2.jpg";
import hotel3Image from "../../../../assets/francehot3.jpg";
import hotel4Image from "../../../../assets/francehot4.jpg";
import hotel5Image from "../../../../assets/francehot5.jpg";

const FranceTripPage = () => {
  const destinations = [
    {
      name: "Paris",
      description: "Explore the romantic streets of Paris...",
      image: paris,
    },
    {
      name: "Bordeaux",
      description: "Explore the romantic streets of Paris...",
      image: bordeaux,
    },
    {
      name: "French Rivera",
      description: "Explore the romantic streets of Paris...",
      image: frenchrivera,
    },
    {
      name: "Lyon",
      description: "Discover the culinary delights of Lyon...",
      image: lyon,
    },
    {
      name: "Nice",
      description: "Relax on the beautiful beaches of Nice...",
      image: nice,
    },
    // Add more destinations as needed
  ];
  // hotels
  const hotels = [
    {
      name: "Hotel 1La Défense",
      image: hotel1Image,
      number: 3456,
    },
    {
      name: "Corsica",
      image: hotel2Image,
      number: 456,
    },
    {
      name: "Hotel 3",
      image: hotel3Image,
      number: 1467,
    },
    {
      name: "Normandy",
      image: hotel4Image,
      number: 500,
    },
    {
      name: "3 Valleys",
      image: hotel5Image,
      number: 128,
    },
  ];

  return (
    <div className="france-trip-container">
      <div className="france-trip-header">
        <div className="image-container">
          <img src={franceImage} alt="France" className="france-image" />
          <div className="overlay1"></div> {/* Overlay */}
          <div className="hotel-booking-bar">
            <form className="search-form">
              <div className="form-group">
                <input type="text" id="city" name="city" placeholder="City" />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  id="checkin"
                  name="checkin"
                  placeholder="Check-in"
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  id="checkout"
                  name="checkout"
                  placeholder="Check-out"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  id="adults"
                  name="adults"
                  min="1"
                  placeholder="Adults"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  id="children"
                  name="children"
                  min="0"
                  placeholder="Children"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  id="rooms"
                  name="rooms"
                  min="1"
                  placeholder="Rooms"
                />
              </div>
              <button type="submit" className="search-button">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="text-overlay">
          <h3 className="france-title1">Experience</h3>
          <h1 className="france-title2">France</h1>
        </div>
      </div>
      <div className="france-trip-info">
        <div className="topdest">
          <h1 className="heading">Top Destinations in France City</h1>
          <div className="destination-list">
            {destinations.map((destination, index) => (
              <div key={index} className="destination-card1">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="destination-image"
                />
                <div className="destination-info">
                  <h3 className="destination-name">{destination.name}</h3>
                  <p className="destination-description">
                    {destination.description}
                  </p>
                  <button className="explore-button">Explore</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="time-container">
        <h1 className="heading">Best Time to Visit France?</h1>
        <div className="content-container">
          <img
            src={francetime}
            alt="Best Time to Visit France"
            className="time-image"
          />
          <p className="time-info">
            The best time to visit France is from April to June and September to
            November. You’ll benefit from fewer crowds and moderate temperatures
            outside of the sweltering summer period. If it’s skiing you’re
            after, hit the slopes any time between December and early April.
            Exploring France’s varied regions outside its busy holiday periods
            from mid-July to the end of August is recommended. Although, bear in
            mind that many businesses shut down during this time and public
            transport is also affected so do your research well in advance. The
            Mediterranean climate in the French Riviera offers warm weather for
            most of the year, whereas winter in Paris lets you explore cultural
            sights like The Louvre with less queues. For some serious wine
            tasting, head to regions like Bordeaux and Burgundy between March
            and May for the best scenery or in October and November to visit
            during grape harvest season.
          </p>
        </div>
      </div>
      <div className="hotels">
        <h1 className="heading">
          Hotels in the most popular regions in France
        </h1>
        <div className="hotel-container">
          {hotels.map((hotel, index) => (
            <div key={index} className="hotel-card">
              <img src={hotel.image} alt={hotel.name} className="hotel-image" />
              <div className="hotel-info">
                <h3 className="hotel-name">{hotel.name}</h3>
                <h5 className="num">{hotel.number}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="notes">
        <h3 className="tag">Explore and find hotels in France</h3>
        <p>
          Arguably the most romantic country in the world, France has been
          wooing travellers with its heavenly cuisine, eye-popping architecture
          and captivating culture for centuries. From the châteaux of the Loire
          Valley to the legendary Latin Quarter of Paris and the ski resorts of
          the French Alps, each region offers a new discovery. Home to the
          Louvre, the Eiffel Tower and the iconic cathedral of Notre-Dame, it's
          easy to see why Paris pulls in over two million tourists a year. Each
          of the capital's districts (known as arrondissements) have their own
          unique vibe. Stroll through Le Marais and you'll experience a medieval
          labyrinth of crooked lanes filled with quirky shops and old-school
          bakers. Venture into the seventh arrondissement and you'll be in the
          heart of the action, with some of the city's best museums on show. If
          you fancy a jaunt north, you'll find Lille with its noticeably Belgian
          influences, the Champagne wine region and the pretty cities of
          Normandy. Famed for its tropical subclimate, the south shows off
          France's glamourous side, with the Côte d’Azur home to super-snazzy
          St-Tropez, Cannes and Nice. Depending on which part of the country
          you're visiting, you'll find accommodation to suit your needs. Whether
          its an extravagant five-star hotel in Paris, a ski lodge in Chamonix
          or a campsite in Brittany, you'll find the perfect stay. Top tip:
          Hôtel de Ville is French for 'town hall' so don't be confused when
          they don't offer you a room for the night!
        </p>
      </div>
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-section about">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vehicula gravida ex, sit amet feugiat felis. Vivamus tempus arcu
              id elit rutrum, nec venenatis magna tempus.
            </p>
          </div>
          <div class="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div class="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Destinations</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 YourWebsite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FranceTripPage;
