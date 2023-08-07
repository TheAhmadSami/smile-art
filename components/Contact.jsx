import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { get, post } from "@sa/utils/axios";

const Contacts = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.lang.value);

  //contact
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //branches
  const [branches, setBranches] = useState([]);
  const [activeBranch, setActiveBranch] = useState({});

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

    if (!message) {
      notify(t("message_required"));
      checker = false;
      return;
    }

    if (checker) {
      let data = new FormData();
      data.append("name", name);
      data.append("phone", phone);
      data.append("fromEmail", email);
      data.append("message", message);

      setLoading(true);
      post("/contact", data)
        .then((res) => {
          setLoading(false);
          notify(t("email_sent_success"));
        })
        .catch((error) => {
          setLoading(false);
          notify(t("email_sent_error"));
        });
    }
  };

  const loadBranches = () => {
    get("/branches").then((res) => {
      setBranches(res?.data);
      setActiveBranch(res?.data?.[0]);
    });
  };

  useEffect(() => {
    loadBranches();
  }, []);

  return (
    <div>
      <section id="location">
        <iframe src={activeBranch?.mapDisplayLink} style={{ border: 0 }} allowFullScreen />
      </section>

      <section id="contact">
        <ToastContainer
          position={lang == "ar" ? "bottom-right" : "bottom-right"}
        />
        <div className="contact-container">
          <div className="left-side">
            <div className="title">{t("contact_us")}</div>
            <div className="branchesContainer">
              {branches?.map((branch) => (
                <p
                  key={branch?.id}
                  onClick={() => setActiveBranch(branch)}
                  className={`branchCard ${
                    activeBranch?.id == branch?.id && "active"
                  }`}
                >
                  {lang == "ar" ? branch?.nameAr : branch?.nameEn}
                </p>
              ))}
            </div>

            {activeBranch && (
              <div>
                <div className="address">
                  <i className="fas fa-map-marker-alt" />
                  <p>
                    <span>
                      {lang == "ar"
                        ? activeBranch?.nameAr
                        : activeBranch?.nameEn}
                      {`: `}
                    </span>
                    <a href={activeBranch?.mapLink} target="_blank" rel="noreferrer">
                      {lang == "ar"
                        ? activeBranch?.addressAr
                        : activeBranch?.addressEn}
                    </a>
                  </p>
                </div>
                {activeBranch?.phone1 && (
                  <div className="phones">
                    <i className="fas fa-phone-alt" />
                    <p>
                      <a href={`tel: ${activeBranch?.phone1}`}>
                        {activeBranch?.phone1}
                      </a>
                    </p>
                  </div>
                )}
                {activeBranch?.phone2 && (
                  <div className="phones">
                    <i className="fas fa-phone-alt" />
                    <p>
                      <a href={`tel: ${activeBranch?.phone2}`}>
                        {activeBranch?.phone2}
                      </a>
                    </p>
                  </div>
                )}
                {activeBranch?.phone3 && (
                  <div className="phones">
                    <i className="fas fa-phone-alt" />
                    <p>
                      <a href={`tel: ${activeBranch?.phone3}`}>
                        {activeBranch?.phone3}
                      </a>
                    </p>
                  </div>
                )}
                <div className="address">
                  <i className="fas fa-clock" />
                  <p>
                    <span>{t("workhours")}: </span>
                    {t("reach_us", {
                      fromDay: t(activeBranch?.fromDay),
                      toDay: t(activeBranch?.toDay),
                      fromTime: moment(activeBranch?.fromTime, [
                        "hh:mm",
                      ]).format("hh:mmA"),
                      toTime: moment(activeBranch?.toTime, ["hh:mm"]).format(
                        "hh:mmA"
                      ),
                    })}
                  </p>
                </div>
              </div>
            )}
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
              <label>{t("message")}</label>
              <textarea
                name="message"
                id="contact_message"
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="submit-message" onClick={sendMessage}>
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

export default Contacts;
