import React from "react";
import nycImage from "../../../../assets/nyc/nyc1.jpg"; // Import a beautiful image of France
import loc1 from "../../../../assets/nyc/skyline.jpg";
import loc2 from "../../../../assets/nyc/911memo.jpg";
import loc3 from "../../../../assets/nyc/americanmuseum.jpg";
import loc4 from "../../../../assets/nyc/brooklynbridge.jpg";
import loc5 from "../../../../assets/nyc/bryantPark.jpg";
import loc6 from "../../../../assets/nyc/centralPark.jpg";
import loc7 from "../../../../assets/nyc/grandCentralTer.jpg";
import loc9 from "../../../../assets/nyc/metromuseum.jpg";
import loc10 from "../../../../assets/nyc/timeSq.jpg";
import "./nyc.css"; // Import your CSS file for styling
import francetime from "../../../../assets/francetime.jpg";
// Hotel images
import hotel1Image from "../../../../assets/japanhot1.jpg";
import hotel2Image from "../../../../assets/japanhot2.jpg";
import hotel3Image from "../../../../assets/japanhot3.jpg";
import hotel4Image from "../../../../assets/japanhot4.jpg";
import hotel5Image from "../../../../assets/japanhot5.jpg";
import hotel6Image from "../../../../assets/japanhot6.jpg";
import hotel7Image from "../../../../assets/japanhot7.jpg";
import hotel8Image from "../../../../assets/japanhot8.jpg";

const FranceTripPage = () => {
  const destinations = [
    {
      name: "SkyLine",
      description: "Explore the romantic streets of Paris...",
      image: loc1,
    },
    {
      name: "9/11 Memorial",
      description: "Explore the romantic streets of Paris...",
      image: loc2,
    },
    {
      name: "American Museum",
      description: "Explore the romantic streets of Paris...",
      image: loc3,
    },
    {
      name: "Brooklyn Bridge ",
      description: "Discover the culinary delights of Lyon...",
      image: loc4,
    },
    {
      name: "Bryant Park",
      description: "Relax on the beautiful beaches of Nice...",
      image: loc5,
    },
    {
      name: "Central Park",
      description: "Relax on the beautiful beaches of Nice...",
      image: loc6,
    },
    // Add more destinations as needed
  ];
  // hotels
  const hotels = [
    {
      name: "hjkefgwef",
      image: hotel1Image,
      number: 3456,
    },
    {
      name: "wegfrgergerg",
      image: hotel2Image,
      number: 456,
    },
    {
      name: "Hotel 3",
      image: hotel3Image,
      number: 1467,
    },
    {
      name: "regrehth",
      image: hotel4Image,
      number: 500,
    },
    {
      name: "rgteyhregw",
      image: hotel5Image,
      number: 128,
    },
    {
      name: "xyz",
      image: hotel6Image,
      number: 1467,
    },
    {
      name: "xyz",
      image: hotel7Image,
      number: 500,
    },
    {
      name: "xyz",
      image: hotel7Image,
      number: 128,
    },
  ];

  return (
    <div className="france-trip-container">
      <div className="france-trip-header">
        <div className="image-container">
          <img src={nycImage} alt="France" className="france-image" />
          <div className="overlay1"></div> {/* Overlay */}
          <div className="hotel-booking-bar">
            <form className="search-form">
              <div className="form-group">
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  defaultValue="Japan"
                />
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
          <h1 className="france-title2">New York City</h1>
        </div>
      </div>
      <div className="france-trip-info">
        <div className="topdest">
          <h1 className="heading">Top Destinations in New York City</h1>
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
        <h1 className="heading">Best Time to Visit NewYork?</h1>
        <div className="content-container">
          <img
            src={francetime}
            alt="Best Time to Visit France"
            className="time-image"
          />
          <p className="time-info">
            The best time to visit New York City is during the fall (September
            to November) and spring (March to May). In the fall, the weather is
            crisp and cool, and the city comes alive with vibrant colors as the
            leaves change, particularly in iconic spots like Central Park and
            Brooklyn's Prospect Park. Autumn also brings cultural events like
            the New York Film Festival and Halloween celebrations, adding to the
            city's energetic atmosphere. Spring in NYC is equally enchanting,
            with mild temperatures and blooming flowers transforming the city
            into a picturesque wonderland. Cherry blossoms adorn parks like
            Brooklyn Botanic Garden and Central Park, while outdoor events like
            the Tribeca Film Festival and Macy's Flower Show showcase the city's
            dynamic spirit. Whether strolling through the bustling streets of
            Manhattan or exploring the cultural gems of Brooklyn, both seasons
            offer an unforgettable experience in the Big Apple.
          </p>
        </div>
      </div>
      <div className="hotels">
        <h1 className="heading">
          Hotels in the most popular regions in NewYork
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
        <h3 className="tag">Explore and find hotels in NewYork City</h3>
        <p>
          New York City, a global metropolis pulsating with energy, offers an
          unparalleled tapestry of experiences that enthrall visitors from all
          corners of the world. From the towering skyscrapers of Manhattan to
          the eclectic neighborhoods of Brooklyn, each borough boasts its own
          unique charm and attractions. At the heart of it all lies Manhattan,
          where the iconic skyline, adorned with architectural marvels like the
          Empire State Building and One World Trade Center, forms a breathtaking
          backdrop to the bustling streets below. Take a leisurely stroll
          through Central Park, a sprawling oasis amidst the urban jungle, or
          immerse yourself in the vibrant culture of Times Square, where neon
          lights and Broadway theaters dazzle spectators. Venture across the
          East River to Brooklyn, a melting pot of cultures and creativity.
          Explore the trendy boutiques and artisanal eateries of Williamsburg,
          or soak in the sweeping views of the Manhattan skyline from the
          picturesque Brooklyn Heights Promenade. Don't miss the cultural
          enclaves of Chinatown and Little Italy, where the sights, sounds, and
          flavors of the world converge in a vibrant mosaic. For a taste of
          history and culture, delve into the rich tapestry of museums and
          landmarks scattered throughout the city. From the Metropolitan Museum
          of Art to the Museum of Modern Art, New York City's cultural
          institutions offer a treasure trove of artistic masterpieces and
          historical artifacts. And let's not forget about the culinary delights
          that await at every turn. From iconic New York-style pizza joints to
          Michelin-starred fine dining establishments, the city's gastronomic
          scene is as diverse as its population, offering a feast for the senses
          at every corner. As the city that never sleeps, New York offers
          accommodation options to suit every taste and budget. Whether you're
          seeking luxury accommodations in Midtown Manhattan, a chic boutique
          hotel in SoHo, or a cozy bed and breakfast in the historic West
          Village, you'll find the perfect home base for your urban adventure.
          So, whether you're drawn to the bright lights of Broadway, the
          serenity of Central Park, or the bustling energy of the city streets,
          New York City promises an unforgettable experience that will leave you
          enchanted and inspired.
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
