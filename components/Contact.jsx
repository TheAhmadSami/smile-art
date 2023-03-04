import React from "react";
import { useTranslation } from "react-i18next";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

const Contacts = () => {
  const { t } = useTranslation();
  const configs = useSelector((state) => state.configs.value);


  const convertTime = (timeString) => {
    const [hours, minutes] = timeString?.split(':');
    let output = '';
    let period = '';

    if (hours > 12) {
      output = hours - 12;
      period = 'pm';
    } else {
      output = hours;
      period = 'am';
    }

    output = `${output}:${minutes} ${period}`;
    return output;
  }


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
              <a href={`tel: ${configs?.phone}`}>{configs?.phone}</a>
              <br />
              {configs?.phone != configs?.mobile &&
                <a href={`tel: ${configs?.mobile}`}>{configs?.mobile}</a>}
            </p>
          </div>
          <div className="note">
            {
              t('reach_us', {
                fromDay: t(configs?.fromDay),
                toDay: t(configs?.toDay),
                fromTime: configs?.fromTime && convertTime(configs?.fromTime),
                toTime: configs?.toTime && convertTime(configs?.toTime)
              })
            }
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