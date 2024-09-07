import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./dest.css";
import parisImage from "../../../assets/paris.jpg";
import tokyoImage from "../../../assets/tokyo.jpg";
import nycImage from "../../../assets/nyc.jpg";
import maldivesImage from "../../../assets/maldives.jpg";
import koreaImage from "../../../assets/korea.jpg";
import barcelonaImage from "../../../assets/barcelona.jpg";
import floridaImage from "../../../assets/florida.jpg";
import indiaImage from "../../../assets/india.jpg";
import aura from "../../../assets/aurawall.jpg";

const PopularDestinations = () => {
  const destinations = [
    {
      name: "France",
      description:
        "Explore the romantic city of Paris with its iconic landmarks like the Eiffel Tower and Louvre Museum.",
      image: parisImage,
      path: "/France", // Add path for France
    },
    {
      name: "Japan",
      description:
        "Discover the vibrant city of Tokyo with its blend of traditional culture and modern skyscrapers.",
      image: tokyoImage,
      path: "/japan", // Add path for Japan
    },
    {
      name: "New York City",
      description:
        "Experience the hustle and bustle of New York City, known for its Broadway shows and Times Square.",
      image: nycImage,
      path: "/nyc", // Add path for New York City
    },
    {
      name: "India",
      description:
        "Experience the hustle and bustle of New York City, known for its Broadway shows and Times Square.",
      image: indiaImage,
      path: "/indiaImage", // Add path for New York City
    },
    {
      name: "Florida",
      description:
        "Experience the hustle and bustle of New York City, known for its Broadway shows and Times Square.",
      image: floridaImage,
      path: "/nyc", // Add path for New York City
    },
    {
      name: "Maldives",
      description:
        "Experience the hustle and bustle of New York City, known for its Broadway shows and Times Square.",
      image: maldivesImage,
      path: "/maldives", // Add path for New York City
    },
    {
      name: "Barcelona",
      description:
        "Experience the hustle and bustle of New York City, known for its Broadway shows and Times Square.",
      image: barcelonaImage,
      path: "/barcelona", // Add path for New York City
    },
    {
      name: "Korea",
      description:
        "Experience the hustle and bustle of New York City, known for its Broadway shows and Times Square.",
      image: koreaImage,
      path: "/korea", // Add path for New York City
    },
    // Add more destinations here if needed
  ];

  return (
    <div>
      <div className="plane">
        <img src={aura} alt="" />
      </div>
      <div className="popular-destinations">
        <h2 className="heading">Popular Destinations</h2>
        <div className="destination-list">
          {destinations.map((destination, index) => (
            <div key={index} className="destination-card">
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
                {/* Use Link component to navigate to the respective destination */}
                <Link to={destination.path} className="explore-button">
                  Explore {destination.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
