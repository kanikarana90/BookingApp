import React, { useState } from "react";
import "./About.css";
import about_img from "../../assets/image11.jpg";
import play_icon from "../../assets/play-icon.png";
import { useTranslation } from "react-i18next";

const AboutComponent = () => {
  const { t } = useTranslation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="about">
      <div className="about-left">
        {isVideoPlaying ? (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vWp94-7umyQ?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ) : (
          <>
            <img src={about_img} alt="" className="about-img" />
            <img
              src={play_icon}
              alt=""
              className="play-icon"
              onClick={handlePlayVideo}
            />
          </>
        )}
      </div>
      <div className="about-right">
        <h3>{t('ABOUT_GO24Online')}</h3>
        <h2>{t('Exploring_the_World')}</h2>
        <p>
        {t('Discover_the_world')}
        </p>
      </div>
    </div>
  );
};

export default AboutComponent;
