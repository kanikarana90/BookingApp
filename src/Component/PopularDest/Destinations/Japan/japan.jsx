import React from "react";
import japanImage from "../../../../assets/japan1.jpg"; // Import a beautiful image of France
import tokyo from "../../../../assets/tokyo.jpg";
import osaka from "../../../../assets/osaka.jpg";
import hiroshima from "../../../../assets/hiroshima.jpg";
import sapporo from "../../../../assets/sapporo.jpg";
import fukuoka from "../../../../assets/fukuoka.jpg";
import nara from "../../../../assets/nara.jpg";
import "./japan.css"; // Import your CSS file for styling
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
      name: "Tokyo",
      description: "Explore the romantic streets of Paris...",
      image: tokyo,
    },
    {
      name: "Osaka",
      description: "Explore the romantic streets of Paris...",
      image: osaka,
    },
    {
      name: "Hiroshima",
      description: "Explore the romantic streets of Paris...",
      image: hiroshima,
    },
    {
      name: "Sapporo",
      description: "Discover the culinary delights of Lyon...",
      image: sapporo,
    },
    {
      name: "Fukuoka",
      description: "Relax on the beautiful beaches of Nice...",
      image: fukuoka,
    },
    {
      name: "Nara",
      description: "Relax on the beautiful beaches of Nice...",
      image: nara,
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
          <img src={japanImage} alt="France" className="france-image" />
          <div className="overlay1"></div> {/* Overlay */}
          <div className="hotel-booking-bar">
            <form className="search-form">
              <div className="form-group">
              <input type="text" id="city" name="city" placeholder="City" defaultValue="Japan" />
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
          <h1 className="france-title2">Japan</h1>
        </div>
      </div>
      <div className="france-trip-info">
        <div className="topdest">
          <h1 className="heading">Top Destinations in Japan City</h1>
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
        <h1 className="heading">Best Time to Visit Japan?</h1>
        <div className="content-container">
          <img
            src={francetime}
            alt="Best Time to Visit France"
            className="time-image"
          />
          <p className="time-info">
            The best time to visit Japan is during spring (March to May) and
            autumn (September to November). In spring, the weather is mild, and
            cherry blossoms (sakura) create stunning landscapes, making it an
            ideal period for sightseeing and cultural experiences. Popular
            hanami (flower viewing) spots, like Tokyo's Ueno Park and Kyoto's
            Philosopher’s Path, attract both locals and tourists. Autumn offers
            equally pleasant weather and is renowned for its vibrant fall
            foliage, with destinations like Nikko and Kyoto offering
            breathtaking views of colorful leaves. Both seasons provide a
            perfect blend of comfortable temperatures and picturesque scenery,
            ensuring a memorable visit to Japan.
          </p>
        </div>
      </div>
      <div className="hotels">
        <h1 className="heading">Hotels in the most popular regions in Japan</h1>
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
        <h3 className="tag">Explore and find hotels in Japan</h3>
        <p>
          Arguably one of the most enchanting destinations in the world, Japan
          has been captivating travelers with its rich traditions, stunning
          landscapes, and vibrant cities for centuries. From the ancient temples
          of Kyoto to the neon-lit streets of Tokyo and the serene hot springs
          of Hakone, each region offers a new discovery. Home to historic
          landmarks like the Imperial Palace, the majestic Mount Fuji, and the
          bustling Tsukiji Fish Market, it's easy to see why Japan attracts
          millions of visitors annually. Each of Tokyo's neighborhoods (known as
          wards) has its own distinct character. Wander through Shibuya and
          you'll experience the iconic crossing and trendy boutiques. Venture
          into Asakusa and you'll find yourself amidst centuries-old temples and
          traditional crafts. If you head north, you can explore the historic
          city of Sapporo, known for its winter festivals and beer, or the
          cultural treasures of Nikko. The southern regions boast a tropical
          charm, with Okinawa offering beautiful beaches and a unique island
          culture. Depending on which part of the country you're visiting,
          you'll find accommodation to suit your needs. Whether it's a luxurious
          ryokan in Kyoto, a sleek hotel in Tokyo, or a cozy guesthouse in the
          Japanese Alps, you'll find the perfect stay. Top tip: Look for a
          "ryokan" for a traditional Japanese inn experience, complete with
          tatami mats and onsen baths.
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
