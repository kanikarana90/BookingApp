import React from 'react';
import './FlightCard.css';

const FlightCard = ({ image, airline, destination, price, rating }) => {
  return (
    <div className="flight-card">
      <img src={image} alt={airline} className="flight-image" />
      <div className="flight-info">
        <div className="flight-airline">{airline}</div>
        <div className="flight-destination">{destination}</div>
        <div className="flight-price">${price}</div>
        <div className="flight-rating">Rating: {rating}</div>
      </div>
    </div>
  );
};

export default FlightCard;
