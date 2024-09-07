import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Package.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import backg from "../../assets/hero14.jpg";

const Package = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img src={next_icon} alt="Next" className="arrow next-arrow" />,
    prevArrow: (
      <img src={back_icon} alt="Previous" className="arrow prev-arrow" />
    ),
    currentSlide: false, // Set currentSlide prop to false
    slideCount: false, // Set slideCount prop to false
  };

  return (
    <div className="background">
      <img src={backg} alt="" className="backgr" />
      <div className="overlay1">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="slide1">
              <h1 className="heading">MALDIVES DELUXE PACKAGE</h1>
              <div className="rating_r rating_r_4">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
              <p className="cta_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                quod veritatis quos. Nesciunt enim, eveniet adipisci hic iure
                fugiat temporibus porro quos error. Aliquam quidem, inventore
                praesentium quod dicta numquam consectetur porro reprehenderit,
                quis, possimus qui? Saepe ipsam ab reiciendis distinctio itaque
              </p>
              <Link to="packPage" className="packbtn">
                Book Now
              </Link>
            </div>
            <div className="slide1">
              <h1 className="heading">KOREA SPECIAL OFFER</h1>
              <div className="rating_r rating_r_4">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
              <p className="cta_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, aut quas libero necessitatibus delectus vero
                veritatis laborum ipsam at, nam perspiciatis nobis aliquid ipsa
                est? Fugiat placeat quisquam cupiditate adipisci?
              </p>
              <Link to="packPage" className="packbtn">
                Book Now
              </Link>
            </div>
            <div className="slide1">
              <h1 className="heading">50% OFF ON YOUR FIRST FLIGHT BOOKING</h1>
              <div className="rating_r rating_r_4">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
              <p className="cta_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                repudiandae optio minus ducimus architecto, animi ipsam harum
                doloremque tempore nihil sapiente eum, fugit vero odit dolores
                quae assumenda saepe aspernatur.
              </p>
              <Link to="packPage" className="packbtn">
                Book Now
              </Link>
            </div>
            <div className="slide1">
              <h1 className="heading">DUBAI SPECIAL OFFER</h1>
              <div className="rating_r rating_r_4">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
              <p className="cta_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                repudiandae optio minus ducimus architecto, animi ipsam harum
                doloremque tempore nihil sapiente eum, fugit vero odit dolores
                quae assumenda saepe aspernatur.
              </p>
              <Link to="packPage" className="packbtn">
                Book Now
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Package;
