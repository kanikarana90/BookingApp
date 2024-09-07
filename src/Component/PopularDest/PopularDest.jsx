import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./PopularDest.css"; // Import your CSS file
import destI1 from "../../assets/destI1.jpg"; // Import image files
import destI2 from "../../assets/destI2.jpg";
import destI3 from "../../assets/destI3.jpg";
import destI4 from "../../assets/destI4.jpg";
import destI5 from "../../assets/destI5.jpg";

const PopularDestinations = () => {
  const { t } = useTranslation();

  return (
    <div className="destination-container">
      <div className="overlay12"></div>
      <h1 className="heading">{t('TrendingDest')}</h1>
      <div className="destination-wrapper">
        <div className="destination-boxA">
          <img
            src={destI1}
            alt={t('Singapore')}
            className="destination-image"
          />
          <div className="destination-text">{t('Singapore')}</div>
        </div>
        <div className="destination-boxA">
          <img
            src={destI2}
            alt={t('Dubai')}
            className="destination-image"
          />
          <div className="destination-text">{t('Dubai')}</div>
        </div>
        <div className="destination-boxA">
          <img
            src={destI3}
            alt={t('India')}
            className="destination-image"
          />
          <div className="destination-text">{t('India')}</div>
        </div>
        <div className="destination-boxA">
          <img
            src={destI4}
            alt={t('Barcelona')}
            className="destination-image"
          />
          <div className="destination-text">{t('Barcelona')}</div>
        </div>
        <div className="destination-boxA">
          <img
            src={destI5}
            alt={t('Paris')}
            className="destination-image"
          />
          <div className="destination-text">{t('Paris')}</div>
        </div>
        <Link to="/popdest" className="btn1">
          {t('ExploreMore')}
        </Link>
      </div>
    </div>
  );
};

export default PopularDestinations;
