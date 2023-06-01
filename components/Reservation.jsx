import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { TailSpin } from "react-loader-spinner";
import { Modal } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { get } from "@sa/utils/axios";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { post } from "@sa/utils/axios";
import { setReservation } from "@sa/redux/reservation";

const Reservation = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const configs = useSelector((state) => state.configs.value);
  const reservationStatus = useSelector((state) => state?.reservation?.value);
  const lang = useSelector((state) => state.lang.value);
  const [services, setServices] = useState([]);
  const [serviceId, setServiceId] = useState(null);
  const [reservationDate, setReservationDate] = useState(new Date());
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const notify = (message) => toast(message);

  const sendMessage = () => {
    let checker = true;

    if (!name) {
      notify(t("name_required"));
      checker = false;
      return;
    }
    if (!phone) {
      notify(t("phone_required"));
      checker = false;
      return;
    }

    if (!email) {
      notify(t("email_required"));
      checker = false;
      return;
    }

    if (checker) {
      let data = new FormData();
      data.append("name", name);
      data.append("phone", phone);
      data.append("fromEmail", email);
      data.append("reservationDate", reservationDate);
      data.append(
        "service",
        JSON.stringify(
          services?.filter((service) => service?.id == serviceId)?.[0]
        )
      );

      setLoading(true);
      post("/booking", data)
        .then((res) => {
          dispatch(setReservation(true));
          setLoading(false);
          notify(t("email_sent_success"));
        })
        .catch((error) => {
          dispatch(setReservation(true));
          setLoading(false);
          notify(t("email_sent_error"));
        });
    }
  };

  const loadServices = () => {
    get("/services").then((res) => {
      setServiceId(res.data?.[0]?.id);
      setServices(res.data);
    });
  };

  useEffect(() => {
    loadServices();
  }, []);

  useEffect(() => {
    console.log("configs=-=-=-", configs);
  }, [configs]);

  return (
    <div
      className={`reservationContainer ${reservationStatus ? "active" : null}`}
    >
      <section id="reservation">
        <ToastContainer
          position={lang == "ar" ? "bottom-right" : "bottom-right"}
        />
        <div className="reservation-container">
          <div
            className="closeBooking"
            onClick={() => dispatch(setReservation(false))}
          >
            <i className="fas fa-times"></i>
          </div>
          <div className="left-side">
            <div className="title">{t("book_now")}</div>
            <div className="address">
              <i className="fas fa-map-marker-alt" />
              <p>
                <span>{t("headquarter")}:</span>
                {t("address")}
              </p>
            </div>
            <div className="phones">
              <i className="fas fa-phone" />
              <p>
                <a href={`tel: ${configs?.phone}`}>{configs?.phone}</a>
                <br />
                {configs?.phone != configs?.mobile && (
                  <a href={`tel: ${configs?.mobile}`}>{configs?.mobile}</a>
                )}
              </p>
            </div>
            <div className="note">
              {t("reach_us", {
                fromDay: t(configs?.fromDay),
                toDay: t(configs?.toDay),
                fromTime: moment(configs?.fromTime, ["hh:mm"]).format("hh:mmA"),
                toTime: moment(configs?.toTime, ["hh:mm"]).format("hh:mmA"),
              })}
            </div>
          </div>
          <div className="right-side">
            <div className="input-container">
              <label>{t("full_name")}</label>
              <input
                id="contact_name"
                name="name"
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="input-container">
              <label>{t("phone_number")}</label>
              <input
                id="contact_phone"
                name="phone"
                type="number"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <div className="input-container">
              <label>{t("email")}</label>
              <input
                id="contact_email"
                name="email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input-container">
              <label>{t("date")}</label>
              <input
                id="contact_email"
                name="date"
                type="date"
                onChange={(e) => {
                  setReservationDate(e.target.value);
                }}
              />
            </div>
            <div className="input-container">
              <label>{t("service")}</label>
              <select onChange={(e) => setServiceId(e?.target?.value)}>
                {services?.map((service, index) => (
                  <option key={index} value={service?.id}>
                    {lang == "ar" ? service?.titleAr : service?.titleEn}
                  </option>
                ))}
              </select>
            </div>

            <div className="buttonContainer">
              <button
                className="submit-message"
                style={
                  lang == "ar"
                    ? { right: "initial", left: "0px" }
                    : { right: "10px", left: "initial" }
                }
                onClick={sendMessage}
              >
                {loading ? (
                  <TailSpin
                    height="30"
                    width="30"
                    color="#b38f22"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                ) : (
                  <i className="fas fa-paper-plane" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
