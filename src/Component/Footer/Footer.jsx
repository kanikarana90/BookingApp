import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest, faFacebookF, faTwitter, faDribbble, faBehance } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/smallLogo.png';
import blogImg1 from '../../assets/footer_blog_1.jpg';
import blogImg2 from '../../assets/footer_blog_2.jpg';
import blogImg3 from '../../assets/footer_blog_3.jpg';
import './Footer.css';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <div className="footer-about">
            <div className="logo-container">
              <div className="footerLogo">
                <a href="#">
                  <img src={logo} alt="Go24Online"  /> {t('Go24Online')}
                </a>
              </div>
            </div>
            <p className="footer-about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium.
            </p>
            <ul className="footer-social-list">
              <li className="footer-social-item"><a href="#"><FontAwesomeIcon icon={faPinterest} /></a></li>
              <li className="footer-social-item"><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li className="footer-social-item"><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li className="footer-social-item"><a href="#"><FontAwesomeIcon icon={faDribbble} /></a></li>
              <li className="footer-social-item"><a href="#"><FontAwesomeIcon icon={faBehance} /></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-blog">
            <div className="footer-title"> {t('Blog_Posts')}</div>
            <div className="footer-blog-items">
              <div className="footer-blog-item">
                <div className="footer-blog-image"><img src={blogImg1} alt="" /></div>
                <div className="footer-blog-content">
                  <div className="footer-blog-title"><a href="blog.html">{t('Travel_with_us_this_year')}</a></div>
                  <div className="footer-blog-date">Nov 29, 2017</div>
                </div>
              </div>
              <div className="footer-blog-item">
                <div className="footer-blog-image"><img src={blogImg2} alt="" /></div>
                <div className="footer-blog-content">
                  <div className="footer-blog-title"><a href="blog.html">{t('New_Destinations_for_you')}</a></div>
                  <div className="footer-blog-date">Nov 29, 2017</div>
                </div>
              </div>
              <div className="footer-blog-item">
                <div className="footer-blog-image"><img src={blogImg3} alt="" /></div>
                <div className="footer-blog-content">
                  <div className="footer-blog-title"><a href="blog.html">{t('Travel_with_us_this_year')}</a></div>
                  <div className="footer-blog-date">Nov 29, 2017</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="footer-col">
          <div className="footer-tags">
            <div className="footer-title">Tags</div>
            <ul className="tags-list">
              <li className="tag-item"><a href="#">design</a></li>
              <li className="tag-item"><a href="#">fashion</a></li>
              <li className="tag-item"><a href="#">music</a></li>
              <li className="tag-item"><a href="#">video</a></li>
              <li className="tag-item"><a href="#">party</a></li>
              <li className="tag-item"><a href="#">photography</a></li>
              <li className="tag-item"><a href="#">adventure</a></li>
              <li className="tag-item"><a href="#">travel</a></li>
            </ul>
          </div>
        </div> */}
        <div className="footer-col">
          <div className="footer-contact">
            <div className="footer-title">Contact Info</div>
            <ul className="contact-info-list">
              <li className="contact-info-item">
                <div className="contact-info-icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                <div className="contact-info-text">{t('Shams_Business_Center')}</div>
              </li>
              <li className="contact-info-item">
                <div className="contact-info-icon"><FontAwesomeIcon icon={faPhone} /></div>
                <div className="contact-info-text">+971585617707</div>
              </li>
              <li className="contact-info-item">
                <div className="contact-info-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                <div className="contact-info-text"><a href="mailto:contactme@gmail.com?Subject=Hello" target="_top">info@go24online.travel</a></div>
              </li>
              <li className="contact-info-item">
                <div className="contact-info-icon"><FontAwesomeIcon icon={faGlobe} /></div>
                <div className="contact-info-text"><a href="http://go24online.travel/" target='_blank'>GO24Online.travel</a></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;