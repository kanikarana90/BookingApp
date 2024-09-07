import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookFlights.css";
import back from "../../assets/formback.png";

const BookFlightsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { departureCity, arrivalCity, departureDate, returnDate } =
    location.state || {};

  const [formDepartureCity, setFormDepartureCity] = useState(
    departureCity || ""
  );
  const [formArrivalCity, setFormArrivalCity] = useState(arrivalCity || "");
  const [formDepartureDate, setFormDepartureDate] = useState(
    departureDate || ""
  );
  const [formReturnDate, setFormReturnDate] = useState(returnDate || "");
  const [passengerCount, setPassengerCount] = useState(1);
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dobDay, setDobDay] = useState("");
  const [dobMonth, setDobMonth] = useState("");
  const [dobYear, setDobYear] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [totalBill, setTotalBill] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Calculate total bill based on passenger count and flight details
  useEffect(() => {
    // Add your calculation logic here
    const basePrice = 100; // Assuming base price per ticket
    const totalPrice = basePrice * passengerCount;
    setTotalBill(totalPrice);
  }, [passengerCount, departureCity, arrivalCity, departureDate, returnDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      // Call PayPal API to process payment
      // Here you would typically use the PayPal SDK to create and process a payment
      // For demonstration purposes, we'll just log a message
      console.log("Processing payment...");
      // After payment is processed, you can redirect the user or perform other actions
      setFormSubmitted(true);
    }
  };

  const handleRedirect = () => {
    setFormSubmitted(false);
    navigate("/");
  };

  return (
    <div className="formMain-container">
      <div className="form-container">
        <img src={back} alt="" className="formImg" />
        <h2>Book Flights</h2>
        <div className="formBook">

       
        {step === 1 && (
          <form
            action="https://sheetdb.io/api/v1/gowvctexirfrv"
            method="post"
            id="sheetdb-form"
            className="BookFltForm"
          
          >
            <div className="form-group">
              <label htmlFor="Pname">Passenger Name</label>
              <div className="name">
                <input
                  type="text"
                  className="fname"
                  placeholder="First Name"
                  value={firstName}
                  name="data[firstname]"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  className="mname"
                  placeholder="Middle Name"
                  value={middleName}
                  name="data[middlename]"
                  onChange={(e) => setMiddleName(e.target.value)}
                />
                <input
                  type="text"
                  className="lname"
                  placeholder="Last Name"
                  value={lastName}
                  name="data[lastname]"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Pdob">Date of Birth</label>
              <div className="dob">
                <input
                  type="text"
                  className="bdate"
                  placeholder="DD"
                  value={dobDay}
                  name="data[dob]"
                  onChange={(e) => setDobDay(e.target.value)}
                  required
                />
                <input
                  type="text"
                  className="bmonth"
                  placeholder="MM"
                  value={dobMonth}
                  name="data[departureCity]"
                  onChange={(e) => setDobMonth(e.target.value)}
                  required
                />
                <input
                  type="text"
                  className="byear"
                  placeholder="YYYY"
                  value={dobYear}
                  name="data[arrivalCity]"
                  onChange={(e) => setDobYear(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <button
                type="button"
                className="next-btn"
                onClick={() => setStep(2)}
              >
                Next
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="BookFltForm">
            <div className="form-group">
              <label htmlFor="departureCity">Departure City:</label>
              <input
                type="text"
                id="departureCity"
                name="departureCity"
                value={formDepartureCity}
                onChange={(e) => setFormDepartureCity(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="arrivalCity">Arrival City:</label>
              <input
                type="text"
                id="arrivalCity"
                name="arrivalCity"
                value={formArrivalCity}
                onChange={(e) => setFormArrivalCity(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="departureDate">Departure Date:</label>
              <input
                type="date"
                id="departureDate"
                name="departureDate"
                value={formDepartureDate}
                onChange={(e) => setFormDepartureDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="returnDate">Return Date:</label>
              <input
                type="date"
                id="returnDate"
                name="returnDate"
                value={formReturnDate}
                onChange={(e) => setFormReturnDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="passengerCount">Passenger Count:</label>
              <input
                type="number"
                id="passengerCount"
                name="passengerCount"
                value={passengerCount || ""}
                onChange={(e) =>
                  setPassengerCount(parseInt(e.target.value) || 1)
                }
                min={1}
                required
              />
            </div>
            <div className="form-group form-buttons">
              <button
                type="button"
                className="fback-btn"
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button type="submit" className="fsubmit-btn">
                Submit
              </button>
            </div>
          </form>
        )}
 {step === 3 && (
          <form onSubmit={handleSubmit} className="BookFltForm">
            {/* Step 3: Payment details */}
            <div className="form-group">
              <label htmlFor="paymentMethod">Payment Method:</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="">Select Payment Method</option>
                <option value="credit_card">Credit Card</option>
                <option value="paypal">PayPal</option>
                {/* Add more payment options if needed */}
              </select>
            </div>
            <div className="form-group">
              <label>Total Bill:</label>
              <p>{totalBill}</p>
            </div>
            <div className="form-group form-buttons">
              <button
                type="button"
                onClick={() => setStep(2)}
              >
                Back
              </button>
              <button type="submit">
                Pay with PayPal
              </button>
            </div>
          </form>
        )}
         </div>

        {formSubmitted && (
          <div className="form-submitted">
            <p>Payment Successful!</p>
            <button onClick={handleRedirect}>Go Back to Home</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookFlightsPage;