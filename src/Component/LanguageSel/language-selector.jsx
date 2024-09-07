// language-selector.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './LanguageSelector.css'; // Assuming you have a CSS file for custom styles

const languages = [
  { code: 'en', lang: 'English' },
  { code: 'fr', lang: 'French' },
  { code: 'hi', lang: 'Hindi' },
  { code: 'ar', lang: 'Arabic' },
  { code: 'ko', lang: 'Korean' },
  { code: 'zh', lang: 'Chinese' },
  { code: 'ja', lang: 'Japanese' },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation(); // Access i18n instance

  const changeLanguage = (code) => {
    i18n.changeLanguage(code); // Function to change language
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        <FontAwesomeIcon icon={faGlobe} /> {/* Globe icon */}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {languages.map((lng) => (
          <Dropdown.Item key={lng.code} onClick={() => changeLanguage(lng.code)}>
            {lng.lang}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;
