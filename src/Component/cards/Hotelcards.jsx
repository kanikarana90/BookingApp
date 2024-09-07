import React from 'react';
import './Hotelcards.css';

const HotelCard = ({ image, name, location, reviews, price, amenities }) => {
  return (
    <div className="hotCardCont">
      <div className="hotcardimg">
        <img src={image} alt="Hotel" />
      </div>
      <div className="hotcardData">
        <h2 className="hotdesc1">{name}</h2>
        <h6 className="desc6">
          <svg width="16" height="16" fill="currentColor" className="location-icon" viewBox="0 0 16 16">
            <path d="M8 0a5.53 5.53 0 0 0-5.5 5.5C2.5 9.73 8 16 8 16s5.5-6.27 5.5-10.5A5.53 5.53 0 0 0 8 0zm0 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
          </svg>
          {location}
        </h6>
        <h2 className="reviews">
          {[...Array(5)].map((_, index) => (
            <svg key={index} width="16" height="16" fill="currentColor" className="star-icon" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.396.198-.869-.149-.801-.592l.83-4.73-3.523-3.356c-.329-.31-.158-.888.283-.95l4.898-.696L7.538.792c.197-.402.73-.402.927 0l2.19 4.327 4.898.696c.441.062.612.64.282.95l-3.523 3.356.83 4.73c.068.443-.405.79-.801.592L8 13.187l-4.389 2.256z" />
            </svg>
          ))}
          {reviews}
        </h2>
        <div className="hoticon">
          {amenities && amenities.map((amenity, index) => (
            <svg key={index} width="20" height="20" fill="currentColor" className="amenity-icon" viewBox="0 0 16 16">
              <path d={amenity.path} />
            </svg>
          ))}
        </div>
      </div>
      <div className="hotcardprice">
        <div className="deschot">
          <h4>Members rate from</h4>
          <h1>{price}</h1>
          <h5>Price for 1 person, 1 night</h5>
        </div>
        <div className="butt">
          <button className='cardbutton'>Book a Room</button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
