import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import {
  Header,
  FacebookFeed,
  Services,
  Team,
  Gallery,
  Clients,
  SocialContacts,
} from "@sa/components";

const Main = () => {
  const { t } = useTranslation();

  const [facebokReviews, setFacebookReviews] = useState([
    {
      url: "clients/google/a1.jpg",
    },
    {
      url: "clients/google/a2.jpg",
    },
    {
      url: "clients/google/a3.jpg",
    },
    {
      url: "clients/google/a4.jpg",
    },
    {
      url: "clients/google/a5.jpg",
    },
    {
      url: "clients/google/a6.jpg",
    },
    {
      url: "clients/google/a7.jpg",
    },
    {
      url: "clients/google/a8.jpg",
    },
    {
      url: "clients/google/a9.jpg",
    },
    {
      url: "clients/google/a10.jpg",
    },
  ]);

  const [googleReviews, setGoogleReviews] = useState([
    {
      url: "clients/google/a1.jpg",
    },
    {
      url: "clients/google/a2.jpg",
    },
    {
      url: "clients/google/a3.jpg",
    },
    {
      url: "clients/google/a4.jpg",
    },
    {
      url: "clients/google/a5.jpg",
    },
    {
      url: "clients/google/a6.jpg",
    },
    {
      url: "clients/google/a7.jpg",
    },
    {
      url: "clients/google/a8.jpg",
    },
    {
      url: "clients/google/a9.jpg",
    },
    {
      url: "clients/google/a10.jpg",
    },
  ]);

  const getFacebookreviews = () => {
    // Your Access token
    const ACCESS_TOKEN =
      "EAALZCmXSEIxMBADnbPC2tHZCazbbUzcgGoZAzXF2TdZCY2LH0N8mpC9J00AYW6MWxit4c8Kc7V1FG72DLMlamcisoJCGr7bHqEN3ZCTErubfMdOedN4hkPOGlKMZBcImzUt9GeSWVRndKaosVJlsBCt7q9imlZCYzfHHz0o02oZCbbTMxE3xzZCCSA2WwMcuJdUljA4XtwJ97lfgvzZC5BSKXE";

    // page id
    const pageId = "SmileArtDrmagdy";

    // Fetch reviews for the specified page
    fetch(
      `https://graph.facebook.com/${pageId}/ratings?access_token=${ACCESS_TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  };

  useEffect(() => {
    getFacebookreviews();
  }, [])

  return (
    <div className="body-content">
      <Header />
      <SocialContacts />
      <div id="know-more">
        <div className="_know-more_">
          <p className="info">
            Al Ola was founded on the idea that technology could help the world
            work smarter. Today, we continue to provide a vision of digital
            transformation for organizations all over Egypt. We believe in
            innovation and collaboration—among our employees, partners and
            customers—which has led to the solutions that move industries
            forward.
          </p>
          {/* ITEM START ||||||||||||||||||||||||| */}
          <div className="title km_mission">Our Mission</div>
          <div className="title-body km_mission">
            <p>
              Is to provide a full range of Information &amp; Data Management
              solutions including services, consulting &amp; staffing that
              maximizes our client’s full business potential through the use of
              modern technology. Our overall goals are to provide real business
              value, efficiency &amp; ease the transition of digital
              transformation for our clients while creating professional growth
              opportunities for our employees.
            </p>
          </div>
          {/* ITEM END ||||||||||||||||||||||||| */}
          {/* ITEM START ||||||||||||||||||||||||| */}
          <div className="title km_vision">Our Vision</div>
          <div className="title-body km_vision">
            <p>
              Is to remain the most reliable and affordable digital business
              service provider, setting the highest standard for quality and
              customization through value-added IT services that our clients can
              consistently count on to meet their expectations. AL Ola
              intelligently provides solutions to overcome their business and
              technology challenges.
            </p>
          </div>
          {/* ITEM END ||||||||||||||||||||||||| */}
          {/* ITEM START ||||||||||||||||||||||||| */}
          <div className="title km_values">Values</div>
          <div className="title-body km_values">
            <p>Excellent customer service</p>
            <p>Pioneering technology</p>
            <p>Creativity</p>
            <p>Integrity</p>
            <p>Quality</p>
            <p>Social responsibility</p>
          </div>
          {/* ITEM END ||||||||||||||||||||||||| */}
        </div>
      </div>
      {/* END #know-more ************************************************************/}
      {/* START #ceo-voice ************************************************************/}
      <div id="ceo-voice">
        <div className="_ceo-voice_">
          {/* <img src="_code_/media/ceo.jpg" alt="" /> */}
          <p className="text">
            {t("who_we_are_desc")}
            <span>Eng. Magdy El Ghamry</span>
          </p>
        </div>
      </div>
      {/* END #ceo-voice ************************************************************/}

      <section id="partners">
        <h1 className="partners-title">Clients Reviews (Google):</h1>
        <Clients data={googleReviews} google />

        <h1 className="partners-title">Clients Reviews (Facebook):</h1>
        <Clients data={facebokReviews} />
      </section>

      <Services />
      <Team />

      <section id="gallery">
        <p className="section-title">
          <span>Our</span>Gallery
        </p>
        <div className="clients-container">
          <Gallery />
        </div>
      </section>

      <section id="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.615331481946!2d31.368697315029614!3d30.105201222654976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458161561d19a55%3A0x6e972289f5cfc4d8!2sSmile%20Art%20-%20Dr.Magdy%20ElGhamry!5e0!3m2!1sen!2seg!4v1673699023320!5m2!1sen!2seg"
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
        />
      </section>

      {/* START #contact ************************************************************/}
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
              Reach us by phone or email from Sunday to Thursday, 9 A.M. - 5
              P.M.
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
      {/* END #contact ************************************************************/}
      {/* START #footer ************************************************************/}
      <section id="footer">
        <p className="copyrights">
          © 2023 Smile Art Clinic, All Rights Reserved
        </p>
        <div className="developer">
          <p>
            Developed with <i className="fas fa-heart" /> By :
          </p>
          <a
            href="http://linkedin.com/in/theahmadsami"
            target="_blank"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            Ahmad Sami
          </a>
          {/* <a href="http://ahmedsami.tk" target="_blank"><img src="_code_/media/ahmed-sami-light.svg" alt=""></a> */}
        </div>
      </section>
      {/* END #footer ************************************************************/}
    </div>
  );
};

export default Main;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
