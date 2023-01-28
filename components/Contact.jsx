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
          <div className="title">Contact Us</div>
          <div className="address">
            <i className="fas fa-map-marker-alt" />
            <p>
              <span>Headquarter:</span> 92 Sayed Zakeria st., Sheraton,
              Cairo,Egypt.
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
            <label>Full name</label>
            <input id="contact_name" name="name" type="text" />
          </div>
          <div className="input-container">
            <label>Phone number</label>
            <input id="contact_phone" name="phone" type="tel" />
          </div>
          <div className="input-container">
            <label>E-mail</label>
            <input id="contact_email" name="email" type="email" />
          </div>
          <div className="input-container">
            <label>Message</label>
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