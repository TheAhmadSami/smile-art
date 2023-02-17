import React from "react";
import { useTranslation } from "react-i18next";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Contacts = () => {
  const { t } = useTranslation();


  return (
    <section id="contact">
      <div className="contact-container">
        <div className="left-side">
          <div className="title">{t('contact_us')}</div>
          <div className="address">
            <i className="fas fa-map-marker-alt" />
            <p>
              <span>{t("headquarter")}:</span>{t('address')}
            </p>
          </div>
          <div className="phones">
            <i className="fas fa-phone" />
            <p>
              <a href="tel: +20 123 456 7890">(+2 02) 24181621</a>
              <br />
              <a href="tel: +20 123 456 7890">(+2 02) 26901298</a>
            </p>
          </div>
          <div className="note">
            Reach us by phone or email from Sunday to Thursday, 9 A.M. - 5 P.M.
          </div>
        </div>
        <div className="right-side">
          <div className="input-container">
            <label>{t('full_name')}</label>
            <input id="contact_name" name="name" type="text" />
          </div>
          <div className="input-container">
            <label>{t('phone_number')}</label>
            <input id="contact_phone" name="phone" type="tel" />
          </div>
          <div className="input-container">
            <label>{t('email')}</label>
            <input id="contact_email" name="email" type="email" />
          </div>
          <div className="input-container">
            <label>{t('message')}</label>
            <textarea name="message" id="contact_message" defaultValue={""} />
            <button className="submit-message">
              <i className="fas fa-paper-plane" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;