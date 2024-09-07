import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Discount.css";

const Discount = () => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log("Email submitted:", email);
    // Reset email state after submission
    setEmail("");
  };

  return (
    <div className="discountCont">
      <div className="boxcont">
        <div className="Disrow1">
          <h1 className="firstdis">{t('SignUpForDiscount')}</h1>
        </div>
        <div className="disrow2">
          <p>{t('InstantDiscountMessage')}</p>
        </div>
        <div className="disrow">
          <form onSubmit={handleSubmit}>
            <div className="disrow3">
              <input
                className="discemail"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder={t('Enter your email')}
                required
              />
              <button className="discbutton" type="submit">
                {t('Subscribe')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Discount;
