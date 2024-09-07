import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import logo from "../../assets/logoGO24.png";
import LanguageSelector from "../LanguageSel/language-selector";
import "./Navbar.css"; // Assuming this is your custom CSS file

const Header = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  const [navbarTransparent, setNavbarTransparent] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showStripeFlightButton, setShowStripeFlightButton] = useState(false);
  const [showStripeHotelButton, setShowStripeHotelButton] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null); // State for submission result

  const stripeFlightRef = useRef(null); // Reference to the Stripe flight popup
  const stripeHotelRef = useRef(null); // Reference to the Stripe hotel popup

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavbarTransparent(false);
    } else {
      setNavbarTransparent(true);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close contact popup if clicked outside or on "Contact" link in navbar
      if (
        showContactPopup &&
        !document.getElementById("contactPopup").contains(event.target) &&
        event.target.getAttribute("id") !== "contactLink"
      ) {
        setShowContactPopup(false);
      }
      // Close Stripe flight or hotel popups if clicked outside
      if (
        stripeFlightRef.current &&
        !stripeFlightRef.current.contains(event.target)
      ) {
        setShowStripeFlightButton(false);
      }
      if (
        stripeHotelRef.current &&
        !stripeHotelRef.current.contains(event.target)
      ) {
        setShowStripeHotelButton(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showContactPopup]); // Dependency on showContactPopup to monitor changes

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBuyFlight = () => {
    setShowStripeFlightButton(true);
    setShowStripeHotelButton(false); // Close hotel booking popup if open
    setIsMenuOpen(false); // Close the menu when Buy Flight is clicked
  };

  const handleBuyHotel = () => {
    setShowStripeHotelButton(true);
    setShowStripeFlightButton(false); // Close flight booking popup if open
    setIsMenuOpen(false); // Close the menu when Buy Hotel is clicked
  };

  const handleCloseStripeButton = () => {
    setShowStripeFlightButton(false);
    setShowStripeHotelButton(false);
  };

  const handleContactClick = () => {
    setShowContactPopup(true);
    setIsMenuOpen(false); // Close the menu when Contact Us is clicked
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmissionResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Replace with your actual access key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmissionResult("Form Submitted Successfully");
        event.target.reset(); // Reset the form after successful submission
      } else {
        console.error("Error", data);
        setSubmissionResult(data.message); // Set the error message if submission fails
      }
    } catch (error) {
      console.error("Error", error);
      setSubmissionResult("An error occurred, please try again."); // Generic error message
    }
  };

  const SubmissionPopup = () => (
    <div className="submission-popup">
      <div className="popup-content">
        <button className="close-button" onClick={() => setSubmissionResult(null)}>
          <i className="fa fa-times"></i>
        </button>
        <h3>{submissionResult}</h3>
      </div>
    </div>
  );

  return (
    <div className={`Navbar ${navbarTransparent ? "transparent" : "solid"}`}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              isMenuOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  
                  {t("Home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/available" className="nav-link">
                  {t("BookFlight")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Hotelbook" className="nav-link">
                  {t("Hotel")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutUs" className="nav-link">
                  {t("AboutUs")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  id="contactLink"
                  to="/"
                  className="nav-link"
                  onClick={handleContactClick}
                >
                  {t("Contact")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/offers" className="nav-link">
                  {t("Offers")}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("Payment")}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleBuyFlight}
                    >
                      {t("Payment.BookFlight")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleBuyHotel}
                    >
                      {t("Payment.BookHotel")}
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {t("Payment.SignUp")}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder={t("Search")}
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                {t("Search")}
              </button>
            </form>
            <li>
              <LanguageSelector/>
              </li>
          </div>
        </div>
      </nav>
      {showStripeFlightButton && (
        <div className="stripe-popup" ref={stripeHotelRef}>
          <button className="close-button" onClick={handleCloseStripeButton}>
            <i className="fa fa-times"></i>
          </button>
          <stripe-buy-button
            buy-button-id="buy_btn_1PXSjO2Lwpz3v2Q9WBlhDYSy"
            publishable-key="pk_live_51PG2dU2Lwpz3v2Q9Ig5I7yQfL3MPlQzbppZF5NTrBw4NpgwZm9wBnTU9mt8Fss4FrAtfC5SjEpmpef4LzoRF5Ip300OmlYrWuv"
          ></stripe-buy-button>
        </div>
      )}
      {showStripeHotelButton && (
        <div className="stripe-popup" ref={stripeFlightRef}>
          <button className="close-button" onClick={handleCloseStripeButton}>
            <i className="fa fa-times"></i>
          </button>
          <stripe-buy-button
            buy-button-id="buy_btn_1PXSjO2Lwpz3v2Q9WBlhDYSy"
            publishable-key="pk_live_51PG2dU2Lwpz3v2Q9Ig5I7yQfL3MPlQzbppZF5NTrBw4NpgwZm9wBnTU9mt8Fss4FrAtfC5SjEpmpef4LzoRF5Ip300OmlYrWuv"
          ></stripe-buy-button>
        </div>
      )}
      {showContactPopup && (
        <div className="contact-popup" id="contactPopup">
          <div className="popup-content">
            <button className="close-button" onClick={() => setShowContactPopup(false)}>
              <i className="fa fa-times"></i>
            </button>
            <h2>{t("contact.title")}</h2>
            <p>{t("contact.subtitle")}</p>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                name="name"
                placeholder={t("contact.form.name")}
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t("contact.form.email")}
                required
              />
              <textarea
                name="message"
                rows="4"
                placeholder={t("contact.form.message")}
                required
              ></textarea>
              <button type="submit">{t("contact.form.submit")}</button>
            </form>
            {submissionResult && <SubmissionPopup />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
