import React from 'react';
import './Offers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCompass, faBicycle, faSailboat } from '@fortawesome/free-solid-svg-icons';
import image1 from '../../assets/offers1.jpg';
import image2 from '../../assets/offers2.jpg';
import image3 from '../../assets/offers3.jpg';
import image4 from '../../assets/offers4.jpg';
import './Offers.css';
import { useTranslation } from "react-i18next";

const Offers = () => {
  const { t } = useTranslation();
  return (
    <div className="offers">
      <div className="containerOff">
        <div className="row">
          <div className="col text-center">
            <h2 className="section_title">the best offers with rooms</h2>
          </div>
        </div>
        <div className="row offers_items">

          {/* Offers Item */}
          <div className="col-lg-6 col-sm-12 offers_col">
            <div className="offers_item">
              <div className="row">
                <div className="col-lg-6">
                  <div className="offers_image_container">
                    <div className="offers_image_background"><img src={image1} alt="" /></div>
                    <div className="offer_name"><a href="#">{t('GrndCas')}</a></div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="offers_content">
                    <div className="offers_price">$70<span>per night</span></div>
                    <div className="rating_r rating_r_4 offers_rating">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                    <div className="offers_icons">
                      <ul className="offers_icons_list">
                        <li className="offers_icons_item"><FontAwesomeIcon icon={faEnvelope} /></li>
                        <li className="offers_icons_item"><FontAwesomeIcon icon={faCompass} /></li>
                        <li className="offers_icons_item"><FontAwesomeIcon icon={faBicycle} /></li>
                        <li className="offers_icons_item"><FontAwesomeIcon icon={faSailboat} /></li>
                      </ul>
                    </div>
                    <div className="offers_link"><a href="offers.html">read more</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat similar structure for other offers items with different images */}

          {/* Offers Item */}
          <div className="col-lg-6 col-sm-12 offers_col">
            <div className="offers_item">
              <div className="row">
                <div className="col-lg-6">
                  <div className="offers_image_container">
                    <div className="offers_image_background"><img src={image2} alt="" /></div>
                    <div className="offer_name"><a href="#">{t('turHills')}</a></div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="offers_content">
                    <div className="offers_price">$50<span>per night</span></div>
                    <div className="rating_r rating_r_4 offers_rating">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                    <div className="offers_icons">
                      <ul className="offers_icons_list">
                        <li className="offers_icons_item"><FontAwesomeIcon icon={faEnvelope} /></li>
                        <li className="offers_icons_item"><FontAwesomeIcon icon={faCompass} /></li>
                        <li className="offers_icons_item"><FontAwesomeIcon icon={faBicycle} /></li>
                        <li className="offers_icons_item"><FontAwesomeIcon icon={faSailboat} /></li>
                      </ul>
                    </div>
                    <div className="offers_link"><a href="offers.html">read more</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Offers Item */}
          <div className="col-lg-6 col-sm-12 offers_col">
            <div className="offers_item">
              <div className="row">
                <div className="col-lg-6">
                  <div className="offers_image_container">
                    <div className="offers_image_background"><img src={image3} alt="" /></div>
                    <div className="offer_name"><a href="#">{t('islandDream')}</a></div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="offers_content">
                    <div className="offers_price">$90<span>per night</span></div>
                    <div className="rating_r rating_r_4 offers_rating">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                    <div className="offers_icons">
                      <ul className="offers_icons_list">
                        <li className="offers_icons_item"><FontAwesomeIcon icon={faEnvelope} /></li>
                        <li className="offers_icons_item"><FontAwesomeIcon icon={faCompass} /></li>
                        <li className="offers_icons_item"><FontAwesomeIcon icon={faBicycle} /></li>
                        <li className="offers_icons_item"><FontAwesomeIcon icon={faSailboat} /></li>
                      </ul>
                    </div>
                    <div className="offers_link"><a href="offers.html">read more</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Offers Item */}
          <div className="col-lg-6 col-sm-12 offers_col">
            <div className="offers_item">
              <div className="row">
                <div className="col-lg-6">
                  <div className="offers_image_container">
                    <div className="offers_image_background"><img src={image4} alt="" /></div>
                    <div className="offer_name"><a href="#">{t('travelLight')}</a></div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="offers_content">
                    <div className="offers_price">$30<span>per night</span></div>
                    <div className="rating_r rating_r_4 offers_rating">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                    <div className="offers_icons">
                      <ul className="offers_icons_list">
                        <li className="offers_icons_item"><FontAwesomeIcon icon={faEnvelope} /></li>
                        <li className="offers_icons_item"><FontAwesomeIcon icon={faCompass} /></li>
                        <li className="offers_icons_item"><FontAwesomeIcon icon={faBicycle} /></li>
                        <li className="offers_icons_item"><FontAwesomeIcon icon={faSailboat} /></li>
                      </ul>
                    </div>
                    <div className="offers_link"><a href="offers.html">read more</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <button type="button" class="OffBtn">Secondary</button> */}
        </div>
      </div>
    </div>
  );
};

export default Offers;
