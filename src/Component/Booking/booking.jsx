import React, { useState } from "react";
import "./booking.css";

function BookingForm() {
  const [destinations, setDestinations] = useState([]);
  const [tripType, setTripType] = useState("oneway");

  const showFlightForm = () => {
    setTripType("oneway");
  };

  const showHotelForm = () => {
    setTripType("hotel");
  };

  const handleAddDestination = () => {
    const newDestination = { from: "", to: "", departureDate: "" };
    setDestinations([...destinations, newDestination]);
  };

  const handleRemoveDestination = (index) => {
    const updatedDestinations = [...destinations];
    updatedDestinations.splice(index, 1);
    setDestinations(updatedDestinations);
  };

  const handleDestinationChange = (index, field, value) => {
    const updatedDestinations = [...destinations];
    updatedDestinations[index][field] = value;
    setDestinations(updatedDestinations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.destinations = destinations;
    console.log("Form Data:", data);
    // Add form submission logic here
  };

  const renderDestinations = () => {
    return destinations.map((destination, index) => (
      <div className="form-row mb-3" key={index}>
        <div className="col-md-3 form-groupBook">
          <label htmlFor={`from${index}`}>From</label>
          <input
            type="text"
            className="form-control"
            id={`from${index}`}
            value={destination.from}
            onChange={(e) =>
              handleDestinationChange(index, "from", e.target.value)
            }
            required
          />
        </div>
        <div className="col-md-3 form-groupBook">
          <label htmlFor={`to${index}`}>To</label>
          <input
            type="text"
            className="form-control"
            id={`to${index}`}
            value={destination.to}
            onChange={(e) =>
              handleDestinationChange(index, "to", e.target.value)
            }
            required
          />
        </div>
        <div className="col-md-3 form-groupBook">
          <label htmlFor={`departureDate${index}`}>Departure Date</label>
          <input
            type="date"
            className="form-control"
            id={`departureDate${index}`}
            value={destination.departureDate}
            onChange={(e) =>
              handleDestinationChange(index, "departureDate", e.target.value)
            }
            required
          />
        </div>
        <div className="col-md-3 form-group d-flex align-items-end">
          <button
            type="button"
            className="btn btn-danger btn-remove-destination"
            onClick={() => handleRemoveDestination(index)}
          >
            Remove
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="container form-container1">
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={showFlightForm}
        >
          Flight Booking
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={showHotelForm}
        >
          Hotel Booking
        </button>
      </div>

      {tripType === "oneway" && (
        <form id="flightBookingForm" onSubmit={handleSubmit}>
          <div className="form-row mb-3">
            <div className="custom-radio">
              <input
                type="radio"
                id="oneway"
                name="tripType"
                value="oneway"
                required
                checked
              />
              <label htmlFor="oneway">One-way</label>
            </div>
            <div className="custom-radio">
              <input
                type="radio"
                id="roundtrip"
                name="tripType"
                value="roundtrip"
                required
              />
              <label htmlFor="roundtrip">Round-trip</label>
            </div>
            <div className="custom-radio">
              <input
                type="radio"
                id="multiple"
                name="tripType"
                value="multiple"
                required
              />
              <label htmlFor="multiple">Multi-city</label>
            </div>
          </div>

          <div className="form-row mb-3" id="originB">
            <div className="col-md-3 form-groupBook">
              <label htmlFor="origin">Origin</label>
              <input
                type="text"
                className="form-control"
                id="origin"
                name="origin"
                required
              />
            </div>
            <div className="col-md-3 form-groupBook">
              <label htmlFor="destination">Destination</label>
              <input
                type="text"
                className="form-control"
                id="destination"
                name="destination"
                required
              />
            </div>
            <div className="col-md-3 form-groupBook">
              <label htmlFor="departureDate">Departure Date</label>
              <input
                type="date"
                className="form-control"
                id="departureDate"
                name="departureDate"
                required
              />
            </div>
            <div className="col-md-3 form-groupBook" id="returnDateDiv">
              <label htmlFor="returnDate">Return Date</label>
              <input
                type="date"
                className="form-control"
                id="returnDate"
                name="returnDate"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="passengers">
              <div className="pass">
                <div className="col-md-4">
                  <label htmlFor="adults">Adults</label>
                  <div className="input-groupBook">
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-outline-secondary minus-btn"
                        type="button"
                        onClick={() => decrementValue("adults")}
                      >
                        -
                      </button>
                    </div>
                    <input
                      type="number"
                      className="form-control1"
                      id="adults"
                      name="adults"
                      value="1"
                      min="1"
                      max="5"
                      readOnly
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary plus-btn"
                        type="button"
                        onClick={() => incrementValue("adults")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="infants">Infants</label>
                  <div className="input-groupBook">
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-outline-secondary minus-btn"
                        type="button"
                        onClick={() => decrementValue("infants")}
                      >
                        -
                      </button>
                    </div>
                    <input
                      type="number"
                      className="form-control1"
                      id="infants"
                      name="infants"
                      value="0"
                      min="0"
                      max="5"
                      readOnly
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary plus-btn"
                        type="button"
                        onClick={() => incrementValue("infants")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="children">Children</label>
                  <div className="input-groupBook">
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-outline-secondary minus-btn"
                        type="button"
                        onClick={() => decrementValue("children")}
                      >
                        -
                      </button>
                    </div>
                    <input
                      type="number"
                      className="form-control1"
                      id="children"
                      name="children"
                      value="0"
                      min="0"
                      max="5"
                      readOnly
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary plus-btn"
                        type="button"
                        onClick={() => incrementValue("children")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 form-group">
                <label htmlFor="class">Class</label>
                <select
                  className="form-control"
                  id="class"
                  name="class"
                  required
                >
                  <option value="economy">Economy</option>
                  <option value="premium">Premium</option>
                  <option value="business">Business</option>
                  <option value="first">First Class</option>
                </select>
              </div>

              <div className="form-row mb-3">
                <div className="col-md-12 form-group">
                  <label htmlFor="airline">Preferred Airline</label>
                  <input
                    type="text"
                    className="form-control"
                    id="airline"
                    name="airline"
                  />
                </div>
              </div>
            </div>
          </div>

          {tripType === "multiple" && (
            <>
              <div id="multiCityDestinations">{renderDestinations()}</div>

              <div id="addDestinationButton" className="row mb-3">
                <button
                  type="button"
                  onClick={handleAddDestination}
                  className="btn btn-secondary btn-add-destination"
                >
                  <span className="plus-icon">+</span> Add Another Destination
                </button>
              </div>
            </>
          )}

          <div className="form-row mb-3">
            <div className="col-md-12 form-group1" id="FltButton">
              <button type="submit" className="btn btn-primary btn-block">
                Search Flights
              </button>
            </div>
          </div>
        </form>
      )}

      {tripType === "hotel" && (
        <form id="hotelBookingForm" onSubmit={handleSubmit}>
          <div className="form-row mb-3">
            
              <div className="col-md-4B form-groupBook">
                <label htmlFor="destination">Destination</label>
                <input
                  type="text"
                  className="form-control"
                  id="destination"
                  name="destination"
                  required
                />
              </div>
              <div className="col-md-4B form-groupBook">
                <label htmlFor="checkInDate">Check-In</label>
                <input
                  type="date"
                  className="form-control"
                  id="checkInDate"
                  name="checkInDate"
                  required
                />
              </div>
            
            
              <div className="col-md-4B form-groupBook">
                <label htmlFor="checkOutDate">Check-Out</label>
                <input
                  type="date"
                  className="form-control"
                  id="checkOutDate"
                  name="checkOutDate"
                  required
                />
              </div>
              <div className="col-md-4B form-groupBook">
                <label htmlFor="guests">Guests</label>
                <input
                  type="number"
                  className="form-control"
                  id="guests"
                  name="guests"
                  required
                />
              </div>
            
          </div>

          <div className="form-row mb-3">
            <div className="col-md-3 form-group1">
              <label htmlFor="rooms">Rooms</label>
              <input
                type="number"
                className="form-control"
                id="rooms"
                name="rooms"
                required
              />
            </div>
            
            <div className="col-md-3 form-group1">
              <label htmlFor="boardType">Board Type</label>
              <select
                className="form-control"
                id="boardType"
                name="boardType"
                required
              >
                <option value="roomOnly">Room Only</option>
                <option value="bedAndBreakfast">Bed & Breakfast</option>
                <option value="halfBoard">Half Board</option>
                <option value="fullBoard">Full Board</option>
                <option value="allInclusive">All Inclusive</option>
              </select>
            </div>
            <div className="col-md-3 form-group1">
              <label htmlFor="hotelName">Hotel Name</label>
              <input
                type="text"
                className="form-control"
                id="hotelName"
                name="hotelName"
              />
            </div>
          </div>

          <div className="form-row mb-3">
          <div className="col-md-3 form-groupBook">
              <label htmlFor="hotelClass">Hotel Class</label>
              <select
                className="form-control"
                id="hotelClass"
                name="hotelClass"
                required
              >
                <option value="1">1 Star</option>
                <option value="2">2 Star</option>
                <option value="3">3 Star</option>
                <option value="4">4 Star</option>
                <option value="5">5 Star</option>
              </select>
            </div>
            <div className="ButtonHt">
              <button type="submit" className="btn btn-primary btn-block">
                Search Hotels
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default BookingForm;
