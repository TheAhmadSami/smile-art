import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className="__page">
      <div className="body-content">
        {/* START #header ************************************************************/}
        <section id="header">
          <div className="menu">
            <a href="http://www.alola-eg.com" className="main-logo">
              <img src="_code_/media/logo.png" alt="" />
            </a>
            <div className="_menu_">
              <div className="menu-item">
                <a href="#header" className="active">
                  Home
                </a>
              </div>
              <div className="menu-item sub-menu">
                <a className="submenu-toggle" href>
                  About&nbsp;Us
                </a>
                <div className="_sub-menu_">
                  <p>
                    <span>
                      <a href id="about" className="_km_">
                        About Us
                      </a>
                    </span>
                    <span>
                      <a href id="mission" className="_km_">
                        Our Mission
                      </a>
                    </span>
                    <span>
                      <a href id="vision" className="_km_">
                        Our Vision
                      </a>
                    </span>
                    <span>
                      <a href id="values" className="_km_">
                        Values
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="menu-item">
                <a href="#partners">Partners</a>
              </div>
              <div className="menu-item">
                <a href="#services">Services</a>
              </div>
              <div className="menu-item sub-menu">
                <a className="submenu-toggle" href="#products">
                  Products
                </a>
                <div className="_sub-menu_">
                  <p>
                    <span>
                      <a company="image-access">image access</a>
                    </span>
                    <span>
                      <a company="scantron">scantron</a>
                    </span>
                    <span>
                      <a company="addmen">addmen</a>
                    </span>
                    <span>
                      <a company="avision">avision</a>
                    </span>
                    <span>
                      <a company="xerox">xerox</a>
                    </span>
                    <span>
                      <a company="fujitsu">fujitsu</a>
                    </span>
                    <span>
                      <a company="agi">agi</a>
                    </span>
                    <span>
                      <a company="indus">indus</a>
                    </span>
                    <span>
                      <a company="crowley">crowley</a>
                    </span>
                    <span>
                      <a company="datawin">datawin</a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="menu-item logo">
                <a href="http://www.alola-eg.com">
                  <img src="_code_/media/logo.png" alt="" />
                </a>
              </div>
              <div className="menu-item">
                <a href="#clients">Clients</a>
              </div>
              <div className="menu-item">
                <a href="#awards">Awards</a>
              </div>
              <div className="menu-item">
                <a href="#projects">Projects</a>
              </div>
              <div className="menu-item">
                <a href="#news">News</a>
              </div>
              <div className="menu-item">
                <a href="#contact">Contact&nbsp;Us</a>
              </div>
            </div>
            <div className="menu-toggle">
              <i />
            </div>
          </div>
          <div className="header-content">
            <p className="header-title">
              Smile Art Modern Systems,
              <br />a leading company since 1986
            </p>
            <p className="header-desc">
              Smile Art was founded to provide local and regional market with
              software and hardware solutions in fields of imaging solution,
              archiving, microfilms, education, item banking, printing and
              scanning.
            </p>
            <div className="header-buttons">
              <button id="know_more_btn">
                <i className="fas fa-info-circle" /> Know More
              </button>
              <button id="ceo_voice_btn">
                <i className="fas fa-user-tie" /> Voice of CEO
              </button>
            </div>
          </div>
          <div className="header-video">
            <video
              className="sample-video"
              src="videos/video.mp4"
              muted
              loop
              autoPlay
            />
            <div className="original-video">
              <div id="player" />
            </div>
          </div>
          <div id="play_video">
            <i className="fas fa-play" />
          </div>
          <div id="close_video">
            <i className="fas fa-times" />
          </div>
        </section>
        {/* END #header ************************************************************/}
        {/* START #know-more ************************************************************/}
        <div id="know-more">
          <div className="_know-more_">
            <p className="info">
              Al Ola was founded on the idea that technology could help the
              world work smarter. Today, we continue to provide a vision of
              digital transformation for organizations all over Egypt. We
              believe in innovation and collaboration—among our employees,
              partners and customers—which has led to the solutions that move
              industries forward.
            </p>
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="title km_mission">Our Mission</div>
            <div className="title-body km_mission">
              <p>
                Is to provide a full range of Information &amp; Data Management
                solutions including services, consulting &amp; staffing that
                maximizes our client’s full business potential through the use
                of modern technology. Our overall goals are to provide real
                business value, efficiency &amp; ease the transition of digital
                transformation for our clients while creating professional
                growth opportunities for our employees.
              </p>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="title km_vision">Our Vision</div>
            <div className="title-body km_vision">
              <p>
                Is to remain the most reliable and affordable digital business
                service provider, setting the highest standard for quality and
                customization through value-added IT services that our clients
                can consistently count on to meet their expectations. AL Ola
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
            <img src="_code_/media/ceo.jpg" alt="" />
            <p className="text">
              After twenty-eight-years of continuum hard work, I can tell my
              colleagues and partners – and all who participated in building
              this entity - you are the owners of this achievement. You have
              achieved something you have to be proud of it. Your company, which
              began in 1986 as a modest and small entity, now became one of the
              important sites that serves this nation and its government sites
              with the best services in the field of information technology. I
              say to our customers - who represent most of the information
              centers in various government sites - we are with you and we look
              forward for the best to our country. We renew the covenant and the
              promise to earn your trust. God bless us all.
              <span>
                Eng. Abdel Hamed Kabeel - <b>Founder and CEO</b>
              </span>
            </p>
          </div>
        </div>
        {/* END #ceo-voice ************************************************************/}
        {/* START #partners ************************************************************/}
        <section id="partners">
          <h1 className="partners-title">Our Partners:</h1>
          <div className="partners-container">
            {/* ITEM START ||||||||||||||||||||||||| */}
            <a
              href="https://www.imageaccess.de/"
              target="_blank"
              className="partner-item"
            >
              <div
                className="partner-image"
                style={{ backgroundImage: "url(partners/image-access.png)" }}
              />
              <h2>Image Access</h2>
              <div className="partner-location">Germany</div>
            </a>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <a
              href="https://www.scantron.com/"
              target="_blank"
              className="partner-item"
            >
              <div
                className="partner-image"
                style={{ backgroundImage: "url(partners/scantron.png)" }}
              />
              <h2>Scantron</h2>
              <div className="partner-location">USA</div>
            </a>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <a
              href="https://www.avision.com"
              target="_blank"
              className="partner-item"
            >
              <div
                className="partner-image"
                style={{ backgroundImage: "url(partners/avision.png)" }}
              />
              <h2>Avision</h2>
              <div className="partner-location">Taiwan</div>
            </a>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <a
              href="https://www.admengroup.com/"
              target="_blank"
              className="partner-item"
            >
              <div
                className="partner-image"
                style={{ backgroundImage: "url(partners/addmen.png)" }}
              />
              <h2>addmen</h2>
              <div className="partner-location">India</div>
            </a>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <a
              href="https://www.fujitsu.com/global/products/computing/peripheral/scanners/"
              target="_blank"
              className="partner-item"
            >
              <div
                className="partner-image"
                style={{ backgroundImage: "url(partners/fujitsu.png)" }}
              />
              <h2>Fujitsu</h2>
              <div className="partner-location">Japan</div>
            </a>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <a
              href="https://www.xerox.com"
              target="_blank"
              className="partner-item"
            >
              <div
                className="partner-image"
                style={{ backgroundImage: "url(partners/xerox.png)" }}
              />
              <h2>Xerox</h2>
              <div className="partner-location">USA</div>
            </a>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <a
              href="http://www.indususa.com/"
              target="_blank"
              className="partner-item"
            >
              <div
                className="partner-image"
                style={{ backgroundImage: "url(partners/indus.png)" }}
              />
              <h2>Indus</h2>
              <div className="partner-location">USA</div>
            </a>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <a
              href="https://www.datawin.de"
              target="_blank"
              className="partner-item"
            >
              <div
                className="partner-image"
                style={{ backgroundImage: "url(partners/datawin.png)" }}
              />
              <h2>DataWin</h2>
              <div className="partner-location">Germany</div>
            </a>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <a
              href="https://www.thecrowleycompany.com/"
              target="_blank"
              className="partner-item"
            >
              <div
                className="partner-image"
                style={{ backgroundImage: "url(partners/crowley.png)" }}
              />
              <h2>Crowley</h2>
              <div className="partner-location">USA</div>
            </a>
            {/* ITEM END ||||||||||||||||||||||||| */}
          </div>
        </section>
        {/* END #partners ************************************************************/}
        {/* START #services ************************************************************/}
        <section id="services">
          <p className="section-title">
            <span>Our</span> Services
          </p>
          <div className="services-container">
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="services-item">
              <div className="service-icon">
                <i className="fal fa-cogs" />
              </div>
              <p className="service-title">Maintenance</p>
              <p className="service-desc">
                Smile Art offers a flexible range of customizable Service Level
                Agreements to cover all our systems to help customer resolve
                hardware &amp; software issues quickly and conveniently.
              </p>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="services-item">
              <div className="service-icon">
                <i className="fal fa-users-class" />
              </div>
              <p className="service-title">Training</p>
              <p className="service-desc">
                To achieve absolute client satisfaction through effective
                delivery of high quality, and to meet the commercial reality in
                the workplace.
              </p>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="services-item">
              <div className="service-icon">
                <i className="fal fa-users" />
              </div>
              <p className="service-title">Outsourcing</p>
              <p className="service-desc">
                Smile Art Outsourcing offers a variety of value added services to
                our customers to assist them especially, in the field of imaging
                solutions, archiving and educational assessment.
              </p>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
          </div>
        </section>
        {/* END #services ************************************************************/}
        {/* START #products ************************************************************/}
        <section id="products">
          <p className="section-title">
            <span>Our</span> Products
          </p>
          {/* START COMPANIES ***************************************/}
          <div className="partners-controls">
            <button data-filter=".image-access">
              <img src="partners/image-access.png" alt="" />
            </button>
            <button data-filter=".scantron">
              <img src="partners/scantron.png" alt="" />
            </button>
            <button data-filter=".addmen">
              <img src="partners/addmen.png" alt="" />
            </button>
            <button data-filter=".avision">
              <img src="partners/avision.png" alt="" />
            </button>
            <button data-filter=".xerox">
              <img src="partners/xerox.png" alt="" />
            </button>
            <button data-filter=".fujitsu">
              <img src="partners/fujitsu.png" alt="" />
            </button>
            <button data-filter=".indus">
              <img src="partners/indus.png" alt="" />
            </button>
            <button data-filter=".crowley">
              <img src="partners/crowley.png" alt="" />
            </button>
            <button data-filter=".datawin">
              <img src="partners/datawin.png" alt="" />
            </button>
          </div>
          {/* END COMPANIES *****************************************/}
          {/* START COMPANIES CATEGORIES ***************************************/}
          <div className="avision categories-controls flex-center">
            <button data-filter=".avision.document-scanners">
              Document Scanners
            </button>
            <button data-filter=".avision.flatbed-scanners">
              Flatbed Scanners
            </button>
            <button data-filter=".avision.network-scanners">
              Network Scanners
            </button>
            <button data-filter=".avision.network-scanners">ADF + FB</button>
          </div>
          <div className="fujitsu categories-controls flex-center">
            <button data-filter=".fujitsu.scan-snap">ScanSnap</button>
            <button data-filter=".fujitsu.fi-series">fi Series</button>
            <button data-filter=".fujitsu.sp-series">SP Series</button>
          </div>
          <div className="xerox categories-controls flex-center">
            <button data-filter=".xerox.workgroup">
              Workgroup &amp; Departmental Scanners
            </button>
            <button data-filter=".xerox.production">Production Scanners</button>
            <button data-filter=".xerox.personal">
              Personal &amp; Mobile Scanners
            </button>
          </div>
          <div className="image-access categories-controls flex-center">
            <button data-filter=".image-access.flatbed">
              Flatbed Scanners
            </button>
            <button data-filter=".image-access.wide">
              Wide Format Scanners
            </button>
            <button data-filter=".image-access.book">Book Scanners</button>
            <button data-filter=".image-access.art">Art Scanners</button>
          </div>
          <div className="crowley categories-controls flex-center">
            <button data-filter=".crowley.microfilm">Microfilm Scanners</button>
            <button data-filter=".crowley.microfiche">
              Microfiche Scanners
            </button>
            <button data-filter=".crowley.microform">
              Universal Microform Scanner
            </button>
            <button data-filter=".crowley.card">Card Scanners</button>
            <button data-filter=".crowley.silver">
              Silver Microfilm Duplicators
            </button>
            <button data-filter=".crowley.archive">Archive Processors</button>
          </div>
          <div className="datawin categories-controls flex-center">
            <button data-filter=".datawin.scanners">Scanners</button>
            <button data-filter=".datawin.omr-scanners">OMR Scanners</button>
          </div>
          <div className="indus categories-controls flex-center">
            <button data-filter=".indus.indus-series">
              Indus Series 3 Microfilm
            </button>
            <button data-filter=".indus.microfilm-reader">
              Archive Writer
            </button>
            <button data-filter=".indus.book-scanner">Archive Processor</button>
          </div>
          <div className="scantron categories-controls flex-center">
            <button data-filter=".scantron.opscan">
              (OMR) Scanners – OpScan Series
            </button>
            <button data-filter=".scantron.insight">
              OMR &amp; Image Scanners – iNSIGHT Series
            </button>
            <button data-filter=".scantron.softwares">OMR Softwares</button>
          </div>
          {/* END COMPANIES CATEGORIES ****************************/}
          {/* START PRODUCTS ***************************************/}
          <div className="products-container flex-center">
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="avision document-scanners mix product-item">
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121448&cat=9"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121448&cat=9"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/avision.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{ backgroundImage: "url(products/avision/AD240.jpg)" }}
                />
                <div className="bottom">
                  <p className="product-name">AD240</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span>600
                    <br />
                    <span>ADF Capacity:</span> 80 sheets
                    <br />
                    <span>Scanning Speed:</span>
                    <br />• B/W @ 200dpi, A4[Simplex : 60 ppm ,Duplex : 120 ipm]
                    <br />• Color @ 200dpi, A4 [Simplex : 45 ppm ,Duplex : 90
                    ipm]
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="avision document-scanners mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121390&cat=9"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121390&cat=9"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/avision.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{ backgroundImage: "url(products/avision/AD215.jpg)" }}
                />
                <div className="bottom">
                  <p className="product-name">AD215</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 20 sheets
                    <br />
                    <span>Scanning Speed:</span>
                    <br />• B/W @ 200dpi, A4 Simplex : 20 ppm ,Duplex : 40 ipm
                    <br />• Color @ 200dpi, A4 Simplex : 20 ppm ,Duplex : 40 ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="avision document-scanners mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121335&cat=9"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121335&cat=9"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/avision.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/avision/AD176V.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">AD176U</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 50 sheets
                    <br />
                    <span>Scanning Speed:</span>
                    <br />• B/W @ 200dpi, A4 Simplex : 30 ppm ,Duplex : 60 ipm
                    <br />• Color @ 200dpi, A4 Simplex : 30 ppm ,Duplex : 60 ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="avision document-scanners mix product-item">
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121330&cat=9"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121330&cat=9"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/avision.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/avision/Av320E2t.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">AV320E2+</p>
                  <p className="product-desc">
                    <span>Size:</span> A3/A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 100 sheets
                    <br />
                    <span>Scanning Speed:</span>
                    <br />• B/W @ 200dpi, A4 Simplex : 80 ppm ,Duplex : 160 ipm
                    <br />• Color @ 200dpi, A4 Simplex : 60 ppm ,Duplex : 120
                    ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="avision document-scanners mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121394&cat=9"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121394&cat=9"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/avision.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/avision/AD260F.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">AD260F</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 100 sheets
                    <br />
                    <span>Scanning Speed:</span>
                    <br />• B/W @ 200dpi, A4 Simplex : 70 ppm ,Duplex : 140 ipm
                    <br />• Color @ 200dpi, A4 Simplex : 70 ppm ,Duplex : 140
                    ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="avision document-scanners mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121351&cat=9"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121351&cat=9"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/avision.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{ backgroundImage: "url(products/avision/AD260.jpg)" }}
                />
                <div className="bottom">
                  <p className="product-name">AD260</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 75, 100, 150, 200,
                    240, 250, 300, 400, 600, 1200 dpi
                    <br />
                    <span>ADF Capacity:</span> 100 sheets
                    <br />
                    <span>Scanning Speed:</span>
                    <br />• B/W @ 200dpi, A4 Simplex : 70 ppm ,Duplex : 140 ipm
                    <br />• Color @ 200dpi, A4 Simplex : 70 ppm ,Duplex : 140
                    ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="avision document-scanners mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121346&cat=9"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121346&cat=9"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/avision.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/avision/AV5400.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">AV5400</p>
                  <p className="product-desc">
                    <span>Size:</span> A3/A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 50 sheets
                    <br />
                    <span>Scanning Speed:</span>
                    <br />• B/W @ 200dpi, A4 Simplex : 50 ppm ,Duplex : 100 ipm
                    <br />• Color @ 200dpi, A4 Simplex : 30 ppm ,Duplex : 60 ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="avision flatbed-scanners mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121434&cat=9"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121434&cat=9"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/avision.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{ backgroundImage: "url(products/avision/FB10.jpg)" }}
                />
                <div className="bottom">
                  <p className="product-name">FB10</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 4800
                    <br />
                    <span>Scanning Speed:</span>
                    <br />• B/W @ 200dpi,9 sec ( Include Backhome 18 sec )
                    <br />• Color @ 200dpi,9 sec ( Include Backhome 18 sec )
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="avision flatbed-scanners mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121323&cat=9"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121323&cat=9"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/avision.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/avision/FB1200plus.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">FB1200 Plus</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 1200
                    <br />
                    <span>Scanning Speed:</span>
                    <br />• B/W @ 200dpi,4 sec. ( Include Backhome 6 sec. )
                    <br />• Color @ 200dpi,4 sec. ( Include Backhome 6 sec. )
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="avision flatbed-scanners mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121303&cat=9"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121303&cat=9"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/avision.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/avision/FB5000.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">FB5000</p>
                  <p className="product-desc">
                    <span>Size:</span> A3
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>Scanning Speed:</span>
                    <br />• B/W @ 200dpi,6 sec. / 10 sec. ( Include Backhome )
                    <br />• Color @ 200dpi,6 sec. / 10 sec. ( Include Backhome )
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            {/* <div class="avision network-scanners mix product-item" style="display: none">
          <a href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121382&cat=9"
            target="_blank" class="pdf-download flex-center"><i class="fas fa-download"></i></a>
          <a href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121382&cat=9"
            target="_blank" class="p-container">
            <div class="top flex-center">
              <div class="company-logo flex-center">
                <div class="clogo" style="background-image: url(partners/avision.png)"></div>
              </div>
            </div>
            <div class="product-image" style="background-image: url(products/avision/AN230w.jpg)"></div>
            <div class="bottom">
              <p class="product-name">AN230W</p>
              <p class="product-desc"><span>Size:</span> A4
                <br><span>Optical Resolution (dpi):</span> 600
                <br><span>Scanning Speed:</span>
                <br>• B/W @ 200dpi, A4 Simplex : 40 ppm ,Duplex : 80 ipm
                <br>• Color @ 200dpi, A4 Simplex : 40 ppm ,Duplex : 80 ipm</p>
            </div>
          </a>
        </div> */}
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="avision network-scanners mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121382&cat=9"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121382&cat=9"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/avision.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/avision/AN230w.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">AN360W</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>Scanning Speed:</span>
                    <br />• B/W @ 200dpi, A4 Simplex : 40 ppm ,Duplex : 80 ipm
                    <br />• Color @ 200dpi, A4 Simplex : 40 ppm ,Duplex : 80 ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="avision network-scanners mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121385&cat=9"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.avision.com/motion.asp?siteid=100407&lgid=2&menuid=10075&prodid=121385&cat=9"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/avision.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/avision/AN240W.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">AN240W</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 100 sheets
                    <br />
                    <span>Scanning Speed:</span>
                    <br />• B/W @ 200dpi, A4 Simplex : 60 ppm ,Duplex : 120 ipm
                    <br />• Color @ 200dpi, A4 Simplex : 60 ppm ,Duplex : 120
                    ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="fujitsu scan-snap mix product-item">
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/scansnap/ix100/index.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/scansnap/ix100/index.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/fujitsu.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{ backgroundImage: "url(products/fujitsu/iX100.jpg)" }}
                />
                <div className="bottom">
                  <p className="product-name">iX100</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>Continuous Scanning:</span> 260 sheets
                    <br />
                    <span>Scanning Speed:</span> 5.2 seconds/page
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="fujitsu scan-snap mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/scansnap/s1100i/index.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/scansnap/s1100i/index.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/fujitsu.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/fujitsu/S1100i.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">S1100i Mobile Scanner</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>Scanning Speed:</span> 7.5 seconds/page
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="fujitsu scan-snap mix product-item">
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/scansnap/sv600/index.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/scansnap/sv600/index.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/fujitsu.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{ backgroundImage: "url(products/fujitsu/SV600.jpg)" }}
                />
                <div className="bottom">
                  <p className="product-name">SV600</p>
                  <p className="product-desc">
                    <span>Size:</span> A3/A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 285 to 218 dpi
                    (Horizontal scanning), 283 to 152 dpi (Vertical scanning)(1)
                    <br />
                    <span>Scanning Speed:</span> 3 seconds/page
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="fujitsu fi-series mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/workgroup/fi7260/index.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/workgroup/fi7260/index.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/fujitsu.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/fujitsu/fi-7260.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">fi-7260</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 80 Sheets
                    <br />
                    <span>Scanning Speed:</span> Simplex: 60 ppm, Duplex: 120
                    ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="fujitsu fi-series mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/workgroup/fi7240/index.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/workgroup/fi7240/index.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/fujitsu.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/fujitsu/fi-7240.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">fi-7240</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 80 Sheets
                    <br />
                    <span>Scanning Speed:</span> Simplex: Simplex: 40 ppm,
                    Duplex: 80 ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="fujitsu fi-series mix product-item">
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/workgroup/fi6160zla/index.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/workgroup/fi6160zla/index.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/fujitsu.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/fujitsu/fi-6160ZLA.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">fi-6160ZLA</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 60 Sheets
                    <br />
                    <span>Scanning Speed:</span> Simplex: 60 ppm, Duplex: 120
                    ipm (200 dpi)
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="fujitsu fi-series mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/departmental/fi7280/index.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/departmental/fi7280/index.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/fujitsu.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/fujitsu/fi-7280.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">fi-7280</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 80 Sheets
                    <br />
                    <span>Scanning Speed:</span> Simplex: 80 ppm, Duplex: 160
                    ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="fujitsu fi-series mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/departmental/fi7480/index.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/departmental/fi7480/index.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/fujitsu.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/fujitsu/fi-7480.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">fi-7480</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 100 Sheets
                    <br />
                    <span>Scanning Speed:</span> Simplex: 80 ppm, Duplex: 160
                    ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="fujitsu fi-series mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/production/fi7800/index.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/production/fi7800/index.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/fujitsu.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/fujitsu/fi-7800.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">fi-7800</p>
                  <p className="product-desc">
                    <span>Size:</span> A3, A4, A5, A6, B5, B6, Business Card,
                    Post Card, Letter, Double Letter, Legal and Custom Size
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>Expected Daily Volume*6:</span> 100,000 sheets
                    <br />
                    <span>Scanning Speed:</span> Simplex: 110 ppm, Duplex 220
                    ipm{" "}
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="fujitsu fi-series mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/production/fi7600/index.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/production/fi7600/index.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/fujitsu.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/fujitsu/fi-7600.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">fi-7600</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 300 Sheets
                    <br />
                    <span>Scanning Speed:</span> Simplex: 100 ppm, Duplex: 200
                    ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="fujitsu fi-series mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/production/fi6400/index.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/production/fi6400/index.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/fujitsu.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/fujitsu/fi-6400.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">fi-6400</p>
                  <p className="product-desc">
                    <span>Size:</span> A3/A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 500 Sheets
                    <br />
                    <span>Scanning Speed:</span> Simplex: 85 ppm, Duplex: 170
                    ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="fujitsu fi-series mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/production/fi6800/index.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/production/fi6800/index.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/fujitsu.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/fujitsu/fi-6800.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">fi-6800</p>
                  <p className="product-desc">
                    <span>Size:</span> A3/A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 500 Sheets
                    <br />
                    <span>Scanning Speed:</span> Simplex: 100 ppm, Duplex: 200
                    ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="fujitsu fi-series mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/production/fi5950/index.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/fi/production/fi5950/index.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/fujitsu.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/fujitsu/fi-5950.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">fi-5950</p>
                  <p className="product-desc">
                    <span>Size:</span> A3/A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 500 Sheets
                    <br />
                    <span>Scanning Speed:</span> Simplex: 105 ppm, Duplex: 210
                    ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="fujitsu sp-series mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/sp-s/sp1425/index.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/sp-s/sp1425/index.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/fujitsu.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/fujitsu/SP-1425.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">SP-1425</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 50 Sheets
                    <br />
                    <span>Scanning Speed:</span> Simplex: 25 ppm, Duplex: 50 ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="fujitsu sp-series mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/sp-s/sp1130/index.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.fujitsu.com/uk/products/computing/peripheral/scanners/sp-s/sp1130/index.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/fujitsu.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/fujitsu/SP-1130.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">SP-1130</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 50 Sheets
                    <br />
                    <span>Scanning Speed:</span> Simplex: 30 ppm, Duplex: 60 ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="xerox workgroup mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.xeroxscanners.com/en/en/products/item.asp?PN=DM6440"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.xeroxscanners.com/en/en/products/item.asp?PN=DM6440"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/xerox.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/xerox/DocuMate-6440.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">DocuMate 6440</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 80 Sheets
                    <br />
                    <span>Scanning Speed:</span> Speed @ 200 dpi, b&amp;w,
                    greyscale, or color: 60 ppm / 120 ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="xerox workgroup mix product-item">
              <a
                href="https://www.xeroxscanners.com/en/en/products/item.asp?PN=DM6480"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.xeroxscanners.com/en/en/products/item.asp?PN=DM6480"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/xerox.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/xerox/DocuMate-6480.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">DocuMate 6480</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 120 Sheets
                    <br />
                    <span>Scanning Speed:</span> Speed @ 200 dpi, b&amp;w,
                    greyscale, or color: Up to 88 ppm / 176 ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="xerox workgroup mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.xeroxscanners.com/en/en/products/item.asp?PN=97-0083-00U"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.xeroxscanners.com/en/en/products/item.asp?PN=97-0083-00U"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/xerox.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/xerox/DocuMate-5540.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">DocuMate 5540</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 50 Sheets
                    <br />
                    <span>Scanning Speed:</span> Speed @ 200 dpi, b&amp;w,
                    greyscale, or color: 40 ppm / 80 ipm{" "}
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="xerox production mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.xeroxscanners.com/en/en/products/item.asp?PN=DM4700"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.xeroxscanners.com/en/en/products/item.asp?PN=DM4700"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/xerox.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/xerox/DocuMate-4700.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">DocuMate 4700</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 600
                    <br />
                    <span>ADF Capacity:</span> 100 Sheets
                    <br />
                    <span>Scanning Speed:</span> Speed @ 200 dpi, b&amp;w,
                    greyscale, or color: 40 ppm / 80 ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="xerox production mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.xeroxscanners.com/en/en/products/item.asp?PN=DM4830"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.xeroxscanners.com/en/en/products/item.asp?PN=DM4830"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/xerox.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/xerox/DocuMate-4830.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">DocuMate 4830</p>
                  <p className="product-desc">
                    <span>Size:</span> A3/A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 300
                    <br />
                    <span>ADF Capacity:</span> 75 Sheets
                    <br />
                    <span>Scanning Speed:</span> Speed @ 200 dpi, b&amp;w,
                    greyscale, or color: 50 ppm / 100 ipm in b&amp;w,30 ppm / 60
                    ipm in color
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="xerox production mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.xeroxscanners.com/en/en/products/item.asp?PN=DM4799"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.xeroxscanners.com/en/en/products/item.asp?PN=DM4799"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/xerox.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/xerox/DocuMate-4799.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">DocuMate 4799</p>
                  <p className="product-desc">
                    <span>Size:</span> A3/A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 300
                    <br />
                    <span>ADF Capacity:</span> 350 Sheets
                    <br />
                    <span>Scanning Speed:</span> Speed @ 300 dpi, b&amp;w,
                    grayscale, or color: 112 ppm / 224 ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="xerox production mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.xeroxscanners.com/en/en/products/item.asp?PN=DM4790"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.xeroxscanners.com/en/en/products/item.asp?PN=DM4790"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/xerox.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/xerox/DocuMate-4790.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">DocuMate 4790</p>
                  <p className="product-desc">
                    <span>Size:</span> A3/A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 300
                    <br />
                    <span>ADF Capacity:</span> 200 Sheets
                    <br />
                    <span>Scanning Speed:</span> Speed @ 200 dpi, b&amp;w,
                    greyscale, or color: 90 ppm / 180 ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="xerox personal mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.xeroxscanners.com/en/en/products/item.asp?PN=DM3125"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.xeroxscanners.com/en/en/products/item.asp?PN=DM3125"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/xerox.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/xerox/DocuMate-3125.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">DocuMate 3125</p>
                  <p className="product-desc">
                    <span>Size:</span> A4
                    <br />
                    <span>Optical Resolution (dpi):</span> 300
                    <br />
                    <span>ADF Capacity:</span> 50 Sheets
                    <br />
                    <span>Scanning Speed:</span> Speed @ 200 dpi, b&amp;w,
                    greyscale, or color: 38 ppm / 66 ipm
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="image-access flatbed mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersWT12-650&lang=en"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersWT12-650&lang=en"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{
                        backgroundImage: "url(partners/image-access.png)",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/image-access/WideTEK-12.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">WideTEK® 12</p>
                  <p className="product-desc">
                    <span>Size:</span> 12.5 x 18.5 inch or ISO/DIN
                    <br />
                    <span>Resolution:</span> 1200 x 1200 dpi scanner resolution
                    <br />
                    <span>Interface: :</span> 30 inch width, only 5 inches more
                    than scanning area
                    <br />
                    <span>Scanning Speed:</span> A3+ scan of full document bed
                    in less than 3 seconds
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="image-access flatbed mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersWT25-650&lang=en"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersWT25-650&lang=en"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{
                        backgroundImage: "url(partners/image-access.png)",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/image-access/WideTEK-25.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">WideTEK® 25</p>
                  <p className="product-desc">
                    <span>Size:</span> 18.5 x 25 inch or ISO/DIN
                    <br />
                    <span>Resolution:</span> 1200 x 1200 dpi scanner resolution
                    <br />
                    <span>Interface: :</span> 30 inch width, only 5 inches more
                    than scanning area
                    <br />
                    <span>Scanning Speed:</span> A2 scan of full document bed in
                    less than 3 seconds
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="image-access wide mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersWT36CL-600&lang=en"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersWT36CL-600&lang=en"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{
                        backgroundImage: "url(partners/image-access.png)",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/image-access/WideTEK-36CL.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">WideTEK® 36CL</p>
                  <p className="product-desc">
                    <span>Size:</span> Scans 36 inch widths, nearly unlimited
                    length
                    <br />
                    <span>Resolution:</span> 1200 x 1200 dpi scanner resolution
                    <br />
                    <span>Scanning Speed:</span> Fastest color scanning at 10
                    inches per second (15 m/min) @ 200 dpi
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="image-access wide mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersWT48CL-600&lang=en"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersWT48CL-600&lang=en"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{
                        backgroundImage: "url(partners/image-access.png)",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/image-access/WideTEK-48CL.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">WideTEK® 48CL</p>
                  <p className="product-desc">
                    <span>Size:</span> Scans 48 inch widths, nearly unlimited
                    length
                    <br />
                    <span>Resolution:</span> 1200 x 1200 dpi scanner resolution
                    <br />
                    <span>Scanning Speed:</span> Fastest color scanning at 10
                    inches per second (15 m/min) @ 150 dpi
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="image-access wide mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersWT60CL-600&lang=en"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersWT60CL-600&lang=en"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{
                        backgroundImage: "url(partners/image-access.png)",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/image-access/WideTEK-60CL.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">WideTEK® 60CL</p>
                  <p className="product-desc">
                    <span>Size:</span> Scans 60 inch widths, nearly unlimited
                    length
                    <br />
                    <span>Resolution:</span> 1200 x 1200 dpi scanner resolution
                    <br />
                    <span>Scanning Speed:</span> Fastest color scanning at 8
                    inches per second (12,2 m/min) @ 150 dpi
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="image-access wide mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersWT36-600&lang=en"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersWT36-600&lang=en"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{
                        backgroundImage: "url(partners/image-access.png)",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/image-access/WideTEK-36.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">WideTEK® 36</p>
                  <p className="product-desc">
                    <span>Size:</span> Scans up to 36 inches (915 mm) in width
                    <br />
                    <span>Resolution:</span> 1200 x 1200 dpi scanner resolution
                    <br />
                    <span>Scanning Speed:</span> Fastest color scanning at 8
                    inches per second (12,2 m/min) @ 150 dpi
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="image-access wide mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersWT42-600&lang=en"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersWT42-600&lang=en"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{
                        backgroundImage: "url(partners/image-access.png)",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/image-access/WideTEK-44.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">WideTEK® 44</p>
                  <p className="product-desc">
                    <span>Size:</span> 50 inch (1270 mm) width
                    <br />
                    <span>Resolution:</span> 1200 x 1200 dpi scanner resolution
                    <br />
                    <span>Scanning Speed:</span> 200 dpi - 17 m/min (11.2
                    inch/s)
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="image-access wide mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersWT48-600&lang=en"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersWT48-600&lang=en"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{
                        backgroundImage: "url(partners/image-access.png)",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/image-access/WideTEK-48.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">WideTEK® 48</p>
                  <p className="product-desc">
                    <span>Size:</span> Scans up to 48 inches (1220 mm) in width
                    <br />
                    <span>Resolution:</span> 1200 x 1200 dpi scanner resolution
                    <br />
                    <span>Scanning Speed:</span>Fastest color scanning at 15
                    inches per second (22.9 m/min) @ 150 dpi
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="image-access wide mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersWT36DS-600&lang=en"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersWT36DS-600&lang=en"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{
                        backgroundImage: "url(partners/image-access.png)",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/image-access/WideTEK-36DS.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">WideTEK® 36DS</p>
                  <p className="product-desc">
                    <span>Size:</span> 36 inch (915 mm) wide
                    <br />
                    <span>Resolution:</span> 1200 x 1200 dpi scanner resolution
                    <br />
                    <span>Scanning Speed:</span>2.5 seconds at 300 dpi for front
                    and back sides of a newspaper page
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="image-access book mix product-item">
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersBE4-SGS-V2Kiosk&lang=en"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersBE4-SGS-V2Kiosk&lang=en"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{
                        backgroundImage: "url(partners/image-access.png)",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/image-access/Bookeye-4V2Kiosk.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">Bookeye® 4 V2 Kiosk</p>
                  <p className="product-desc">
                    <span>Size:</span> Color overhead scanner for formats up to
                    A2+,V-shaped book cradle 120 - 180 degrees
                    <br />
                    <span>Resolution:</span> 400 x 400 dpi scanner resolution
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="image-access book mix product-item">
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersBE4-SGS-V2Professional&lang=en"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersBE4-SGS-V2Professional&lang=en"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{
                        backgroundImage: "url(partners/image-access.png)",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/image-access/Bookeye-4V2Professional.jpg)",
                  }}
                ></div>
                <div className="bottom">
                  <p className="product-name">Bookeye® 4 V2 Professional</p>
                  <p className="product-desc">
                    <span>Size:</span> Color overhead scanner for formats up to
                    A2+,V-shaped book cradle 120 - 180 degrees
                    <br />
                    <span>Resolution:</span> 600 x 600 dpi scanner resolution
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="image-access book mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersBE4-SGS-V1&lang=en"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersBE4-SGS-V1&lang=en"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{
                        backgroundImage: "url(partners/image-access.png)",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/image-access/Bookeye-4V1A.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">Bookeye® 4 V1A</p>
                  <p className="product-desc">
                    <span>Size:</span> Color overhead scanner for formats up to
                    A1+ ,V-shaped book cradle 140 - 180 degrees
                    <br />
                    <span>Resolution:</span> 600 x 600 dpi scanner resolution
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="image-access book mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersBE4-SGS-V1-C35&lang=en"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.imageaccess.de/index.php?page=ScannersBE4-SGS-V1-C35&lang=en"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{
                        backgroundImage: "url(partners/image-access.png)",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/image-access/Bookeye4-V1A-C35.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">Bookeye® 4 V1A-C35</p>
                  <p className="product-desc">
                    <span>Size:</span> Color overhead scanner for formats up to
                    A1+ ,V-shaped book cradle 140 - 180 degrees
                    <br />
                    <span>Resolution:</span> 600 x 600 dpi scanner resolution
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="image-access art mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.imageaccess.de/?page=ScannersWT36ART-600&lang=en"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.imageaccess.de/?page=ScannersWT36ART-600&lang=en"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{
                        backgroundImage: "url(partners/image-access.png)",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/image-access/WideTEK-36ART.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">WideTEK® 36ART</p>
                  <p className="product-desc">
                    <span>Size:</span> Scans fine art or other material 914 x
                    1524 mm / 36 x 60 inches wide or 914 x 2224 mm / 36 x 87.6
                    inches wide, with optional scan table extension
                    <br />
                    <span>Resolution:</span> 600 x 600 dpi scanner resolution
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="crowley microfilm mix product-item">
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/mekel-technology/microfilm-scanners/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/mekel-technology/microfilm-scanners/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/crowley.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/crowley/mach10.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">MACH12</p>
                  <p className="product-desc">
                    True archival image quality
                    <br />
                    Up to 750 dpi true optical resolution
                    <br />
                    Scan speeds under 4.5 minutes per 100’ roll
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="crowley microfilm mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/mekel-technology/microfilm-scanners/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/mekel-technology/microfilm-scanners/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/crowley.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/crowley/mach10.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">MACH10</p>
                  <p className="product-desc">
                    High-efficiency combo of speed and image quality
                    <br />
                    Up to 600 dpi true optical resolution
                    <br />
                    Scan speeds under 2.5 minutes per 100’ roll
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="crowley microfilm mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/mekel-technology/microfilm-scanners/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/mekel-technology/microfilm-scanners/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/crowley.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{ backgroundImage: "url(products/crowley/mach5.jpg)" }}
                />
                <div className="bottom">
                  <p className="product-name">MACH5</p>
                  <p className="product-desc">
                    Lower-cost option
                    <br />
                    Up to 600 dpi true optical resolution
                    <br />
                    Scan speeds under 6 minutes per 100’ roll
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="crowley microfilm mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/crowley/crowley-mach-mini-microfilm-scanner/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/crowley/crowley-mach-mini-microfilm-scanner/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/crowley.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/crowley/mach-mini.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">MACH Mini Microfilm Scanner</p>
                  <p className="product-desc">
                    <span>Size:</span> The MACH Mini has the smallest footprint
                    in the microfilm scanner.
                    <br />
                    <span>Space:</span> The stable footing and compact design of
                    the MACH Mini allows for scanner stacking to further save
                    space while increasing production capability.
                    <br />
                    <span>Production:</span> The MACH Mini’s included external
                    PC ensures that downtime due to computer malfunctions is
                    kept to a bare minimum.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="crowley microfiche mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/mekel-technology/microfiche-scanners/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/mekel-technology/microfiche-scanners/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/crowley.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{ backgroundImage: "url(products/crowley/mach6.jpg)" }}
                />
                <div className="bottom">
                  <p className="product-name">MACH6</p>
                  <p className="product-desc">
                    Scans all standard aperture card and fiche types including
                    COM and jacket Up to 600 dpi true optical resolution
                    <br />
                    Scan speeds up to 100 images per minute
                    <br />
                    Runs on Mekel Technology’s FastFiche software
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="crowley microfiche mix product-item">
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/mekel-technology/microfiche-scanners/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/mekel-technology/microfiche-scanners/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/crowley.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{ backgroundImage: "url(products/crowley/mach7.jpg)" }}
                />
                <div className="bottom">
                  <p className="product-name">MACH7</p>
                  <p className="product-desc">
                    Scans all standard aperture card and fiche types including
                    COM and jacket Up to 600 dpi true optical resolution
                    <br />
                    Scan speeds up to 200 images per minute
                    <br />
                    Runs on Mekel Technology’s FastFiche software
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="crowley microfiche mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.wwl.co.uk/micrographic-scanning-systems/scanstation-7700/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.wwl.co.uk/micrographic-scanning-systems/scanstation-7700/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/crowley.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{ backgroundImage: "url(products/crowley/7700.jpg)" }}
                />
                <div className="bottom">
                  <p className="product-name">
                    WWL 7700-Series Microfiche Scan Stations
                  </p>
                  <p className="product-desc">
                    Scans jacket/COM/AB Dick fiche/jumbo and standard aperture
                    cards Up to 600 dpi true optical resolution
                    <br />
                    Scan speeds up to 105 images per minute (standard fiche)
                    <br />
                    Enhanced COM capture capabilities
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="crowley microfiche mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-types/universal-microform-scanners/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-types/universal-microform-scanners/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/crowley.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{ backgroundImage: "url(products/crowley/uscan.jpg)" }}
                />
                <div className="bottom">
                  <p className="product-name">
                    USCAN+ UF-Series Universal Film Scanner
                  </p>
                  <p className="product-desc">
                    Scans 16/35mm microfilm, microfiche,aperture cards,
                    micro-cards,photographic material (slides, negatives) and
                    more. Up to 2400 dpi resolution.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="crowley microform mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-types/universal-microform-scanners/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-types/universal-microform-scanners/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/crowley.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{ backgroundImage: "url(products/crowley/uscan.jpg)" }}
                />
                <div className="bottom">
                  <p className="product-name">USCAN+ HD LTE</p>
                  <p className="product-desc">
                    Industry-high 18 megapixel active pixel area array sensor.
                    <br />
                    Scan, print or save in grayscale or bitonal capture.
                    <br />
                    Output to network, file save, USB, print, Cloud, Google Docs
                    Up to 2400 dpi resolution.
                    <br />
                    <span>Features:</span> touchscreen; manual and motorized
                    roll film pods; smart edit; opaque microcard LED;
                    annotation; timed auto-capture for film and fiche.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="crowley microform mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-types/universal-microform-scanners/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-types/universal-microform-scanners/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/crowley.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{ backgroundImage: "url(products/crowley/uscan.jpg)" }}
                />
                <div className="bottom">
                  <p className="product-name">USCAN+ HD</p>
                  <p className="product-desc">
                    Industry-high 18 megapixel active pixel area array sensor.
                    <br />
                    Scan, print or save in grayscale or bitonal capture.
                    <br />
                    Output to network, file save, USB, print, Cloud, Google
                    Docs. Up to 2400 dpi resolution.
                    <br />
                    UScan+ HD LTE features plus: 3M adapter; RapidScan Batch
                    scanning.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="crowley card mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.wwl.co.uk/micrographic-scanning-systems/c-series-aperture-card-scanner/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.wwl.co.uk/micrographic-scanning-systems/c-series-aperture-card-scanner/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/crowley.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/crowley/wwl-c400.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">WWL C400 Aperture Card Scanner</p>
                  <p className="product-desc">
                    Batch scanning at speeds of up to 300 cards/hour.
                    <br />
                    150 card automated feed hopper for unattended batch
                    scanning.
                    <br />
                    Automatic Hollerith (punch) data entry.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="crowley card mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.wwl.co.uk/micrographic-scanning-systems/c-series-aperture-card-scanner/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.wwl.co.uk/micrographic-scanning-systems/c-series-aperture-card-scanner/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/crowley.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/crowley/wwl-c-x.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">
                    WWL C Drive X Aperture Card Scanner
                  </p>
                  <p className="product-desc">
                    On-demand scanning of single aperture cards at speeds of up
                    to 10 seconds/scan.
                    <br />
                    Manual Hollerith (punch) data entry.
                    <br />
                    Affordable model, compact size.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="crowley silver mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/extek-microsystems/silver-duplicator-2150/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/extek-microsystems/silver-duplicator-2150/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/crowley.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{ backgroundImage: "url(products/crowley/2150.jpg)" }}
                />
                <div className="bottom">
                  <p className="product-name">2150 Silver Film Dublicator</p>
                  <p className="product-desc">
                    Designed to meet the needs of users having low-volume
                    microfilm duplication requirements.
                    <br />
                    Compact and completely self-contained desktop unit.
                    <br />
                    Suitable for use in an office environment.
                    <br />
                    Automatic features allow for unattended operations.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="crowley silver mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/extek-microsystems/silver-duplicator-3441/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/extek-microsystems/silver-duplicator-3441/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/crowley.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{ backgroundImage: "url(products/crowley/3441.jpg)" }}
                />
                <div className="bottom">
                  <p className="product-name">3441 Silver Film Dublicator</p>
                  <p className="product-desc">
                    Free-standing unit.
                    <br />
                    Designed to produce high-quality duplicates from old, curled
                    and damaged masters.
                    <br />
                    Works with all types of master films and puts the least
                    possible stress on fragile masters, including those with
                    nitrate or acetate backings.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="crowley archive mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/hf-processors/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/hf-processors/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/crowley.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/crowley/hf-processor.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">HF Processors</p>
                  <p className="product-desc">
                    16/35mm silver (B&amp;W) dual strand film processor
                    <br />
                    Microprocessor temperature controllers and digital speed
                    readout
                    <br />
                    Adjustable output of up to 40 feet or 12.2 meters per minute
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="crowley archive mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/imagelink/imagelink-archive-processor/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.thecrowleycompany.com/scanners-software/product-brands/imagelink/imagelink-archive-processor/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/crowley.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/crowley/imagelink-archive.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">ImageLink Archive Processors</p>
                  <p className="product-desc">
                    Quiet and compact
                    <br />
                    Designed for room-light operation
                    <br />
                    Speeds up to 10 feet per minute
                    <br />
                    Self-threading
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="addmen mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.addmengroup.com/test-and-assessment-software-solutions.htm"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.addmengroup.com/test-and-assessment-software-solutions.htm"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/addmen.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/addmen/omr-ocr.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">Addmen OMR Software Solution</p>
                  <p className="product-desc">
                    A complete array of integrated software solutions for test
                    and assessment needs OMR Answer Sheet Checker, MCQ Test
                    Scoring, Feedback and Survey Analysis
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="scantron opscan mix product-item">
              <a
                href="https://www.scantron.com/scanners-forms/optical-mark-recognition-omr-scanners-opscan-series/opscan-4es-omr-scanner/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.scantron.com/scanners-forms/optical-mark-recognition-omr-scanners-opscan-series/opscan-4es-omr-scanner/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/scantron.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/scantron/OpScan-4ES-OMR-Scanner.jpg)",
                  }}
                ></div>
                <div className="bottom">
                  <p className="product-name">OpScan® 4ES OMR Scanner</p>
                  <p className="product-desc">
                    OMR Only
                    <br />
                    The scanner has a form throughput rate of up to 2,800 sheets
                    per hour and a fixed, automatic feed hopper holds 100
                    sheets. Scanner self-diagnostics quickly pinpoint any
                    operating problems.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="scantron opscan mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.scantron.com/scanners-forms/optical-mark-recognition-omr-scanners-opscan-series/opscan-6-8-scanner/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.scantron.com/scanners-forms/optical-mark-recognition-omr-scanners-opscan-series/opscan-6-8-scanner/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/scantron.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/scantron/OpScan-68-Scanner.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">OpScan® 6/8 Scanner</p>
                  <p className="product-desc">
                    OMR Only
                    <br />
                    Optical mark read (OMR) technology -- 300 sheet autofeed.
                    <br />
                    Up to 5,000 sheets per hour -- Single or dual, ink or pencil
                    read heads -- Faster communication speed, from 1,200 to
                    115,200 baud.
                    <br />
                    OpScan 8 includes an auxiliary output tray for sorting
                    documents that fail user-defined edits.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="scantron opscan mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.scantron.com/scanners-forms/optical-mark-recognition-omr-scanners-opscan-series/opscan-16-scanner/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.scantron.com/scanners-forms/optical-mark-recognition-omr-scanners-opscan-series/opscan-16-scanner/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/scantron.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/scantron/OpScan-16-Scanner.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">OpScan® 16 Scanner</p>
                  <p className="product-desc">
                    OMR Only
                    <br />
                    Optical mark read (OMR) technology.
                    <br />
                    High-speed document transport up to 10,800 sheets per hour
                    -- Automatic feed up to 750 forms -- Open feed path design
                    -- Two output stackers holding 750 and 200 forms.
                    <br />
                    OpScan 8 includes an auxiliary output tray for sorting
                    documents that fail user-defined edits -- Processor
                    controlled picker and multiple sheet detector.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="scantron opscan mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.scantron.com/scanners-forms/optical-mark-recognition-omr-scanners-opscan-series/scantron-score/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.scantron.com/scanners-forms/optical-mark-recognition-omr-scanners-opscan-series/scantron-score/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/scantron.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/scantron/Scantron-Score.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">Scantron Score™</p>
                  <p className="product-desc">
                    Scores 200-question objective tests (multiple choice,
                    true/false, matching).
                    <br />
                    Prints an error mark or the correct answer next to the wrong
                    answer.
                    <br />
                    Reads up to 100 items per side (multiple choice, matching,
                    true/false, etc.).
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="scantron opscan mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.scantron.com/scanners-forms/optical-mark-recognition-omr-scanners-opscan-series/selfscore/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.scantron.com/scanners-forms/optical-mark-recognition-omr-scanners-opscan-series/selfscore/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/scantron.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/scantron/Self-Score.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">SelfScore®</p>
                  <p className="product-desc">
                    Score up to 36 tests per minute, either as a standalone or
                    connected test scoring machine and get immediate feedback.
                    with the SelfScore option let you score tests and
                    quizzes-and see the feedback immediately. Score up to 36
                    tests per minute, using any of a wide selection of answer
                    sheet forms designed to meet your testing needs.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="scantron opscan mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.scantron.com/scanners-forms/optical-mark-recognition-omr-scanners-opscan-series/ezdata-omr-scanner/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.scantron.com/scanners-forms/optical-mark-recognition-omr-scanners-opscan-series/ezdata-omr-scanner/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/scantron.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/scantron/EZData-OMR-Scanner.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">EZData™ OMR Scanner</p>
                  <p className="product-desc">
                    Small size measures 5.5 by 5.5, Handles forms 3.25 by
                    between 3.25 and 14 Accommodates 25 to 30 hand fed forms per
                    minute
                    <br />
                    Uses a standard USB computer connection
                    <br />
                    Indicates readiness with red/green LED light
                    <br />
                    Single-side read head tilts up for easy cleaning
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="scantron insight mix product-item">
              <a
                href="https://www.scantron.com/scanners-forms/omr-image-scanners-insight-series/insight-4es/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.scantron.com/scanners-forms/omr-image-scanners-insight-series/insight-4es/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/scantron.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/scantron/iNSIGHT-4ES-OMR-Scanner.jpg)",
                  }}
                ></div>
                <div className="bottom">
                  <p className="product-name">iNSIGHT™ 4ES OMR Scanner</p>
                  <p className="product-desc">
                    OMR with Image
                    <br />
                    The i NSIGHT 4ES scanner is accurate, fast and efficient. It
                    has a form throughput rate of up to 2,800 sheets-per-hour
                    and a fixed, automatic feed hopper that holds 100 sheets.
                    <br />
                    Read traditional OMR bubble marks.
                    <br />
                    Capture image clips of text areas or text boxes, such as
                    essay responses on a test or comment fields on a survey.
                    Capture images of full pages.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="scantron insight mix product-item">
              <a
                href="https://www.scantron.com/scanners-forms/omr-image-scanners-insight-series/insight-700c-scanner/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.scantron.com/scanners-forms/omr-image-scanners-insight-series/insight-700c-scanner/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/scantron.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/scantron/iNSIGHT-700c-Scanner.jpg)",
                  }}
                ></div>
                <div className="bottom">
                  <p className="product-name">iNSIGHT™ 700C Scanner</p>
                  <p className="product-desc">
                    OMR with Image
                    <br />
                    Single dual-sided read-head scans optical mark read (OMR)
                    and color image scanning in a single pass.
                    <br />
                    500 sheet autofeed; 500 sheet output tray.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="scantron insight mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.scantron.com/scanners-forms/omr-image-scanners-insight-series/insight-70-scanner/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.scantron.com/scanners-forms/omr-image-scanners-insight-series/insight-70-scanner/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/scantron.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/scantron/iNSIGHT-70-Scanner.jpg)",
                  }}
                ></div>
                <div className="bottom">
                  <p className="product-name">iNSIGHT™ 70 Scanner</p>
                  <p className="product-desc">
                    OMR with Image
                    <br />
                    OMR form and image processing at up to 7,000 sheets per hour
                    and includes a PC controller as an integral component,
                    making it an affordable choice for projects that require
                    capturing both traditional OMR (optical mark read) data and
                    image data.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div className="scantron insight mix product-item">
              <a
                href="https://www.scantron.com/scanners-forms/omr-image-scanners-insight-series/insight-150-scanner/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.scantron.com/scanners-forms/omr-image-scanners-insight-series/insight-150-scanner/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/scantron.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/scantron/iNSIGHT-150-Scanner.jpg)",
                  }}
                ></div>
                <div className="bottom">
                  <p className="product-name">iNSIGHT™ 150 Scanner</p>
                  <p className="product-desc">
                    OMR with Image
                    <br />
                    provides OMR form and black-and-white image scanning at up
                    to 15,000 sheets per hour.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="scantron insight mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.scantron.com/scanners-forms/omr-image-scanners-insight-series/insight-1500c-scanner/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.scantron.com/scanners-forms/omr-image-scanners-insight-series/insight-1500c-scanner/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/scantron.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/scantron/iNSIGHT-150-Scanner.jpg)",
                  }}
                ></div>
                <div className="bottom">
                  <p className="product-name">iNSIGHT™ 1500C Scanner</p>
                  <p className="product-desc">
                    OMR with Image
                    <br />
                    High-speed color digital cameras for optical mark read (OMR)
                    and color image scanning in a single pass.
                    <br />
                    750 sheet autofeed; 750 sheet output tray (main); 250 sheet
                    select stacker.
                    <br />
                    Up to 15,000 sheets per hour.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="scantron softwares mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.scantron.com/scanners-forms/scantools-plus/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.scantron.com/scanners-forms/scantools-plus/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/scantron.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/scantron/scan-tools-plus.jpg)",
                  }}
                ></div>
                <div className="bottom">
                  <p className="product-name">ScanTools® Plus</p>
                  <p className="product-desc">
                    Capture both OMR data and image data on one pass through
                    your Scantron image scanner.
                    <br />
                    Define unique edit criteria each time you scan.
                    <br />
                    Add constants to each record.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="scantron softwares mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.scantron.com/scanners-forms/scantools-prisma/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.scantron.com/scanners-forms/scantools-prisma/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/scantron.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/scantron/prisma.jpg)",
                  }}
                ></div>
                <div className="bottom">
                  <p className="product-name">ScanTools® Prisma</p>
                  <p className="product-desc">
                    Built-in ImageFlex technology for rapid, simultaneous pencil
                    or ink OMR data and image capture.
                    <br />
                    Built-in ScanFlex technology for flexible scanning of forms
                    printed to lower tolerances, such as plain paper forms.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="scantron softwares mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.scantron.com/scanners-forms/remark-classic-omr-software/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.scantron.com/scanners-forms/remark-classic-omr-software/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/scantron.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/scantron/remark-classic-omr.jpg)",
                  }}
                ></div>
                <div className="bottom">
                  <p className="product-name">Remark Classic OMR®</p>
                  <p className="product-desc">
                    Convert paper tests and surveys into useable data. Remark’s
                    robust recognition engine reads most common Scantron forms
                    and transforms marks into usable data.
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="datawin scanners mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.datawin.de/produkte/hemera-s.htm"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.datawin.de/produkte/hemera-s.htm"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/datawin.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/datawin/hemra-s.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">HEMERA S</p>
                  <p className="product-desc">
                    <span>Size:</span> A3/A4 A1050x650x640 mm, Weight: 85 - 95
                    kg
                    <br />
                    <span>Resolution: </span>300 DPI CCD-camera
                    <br />
                    <span>Speed: </span>A3 per Min 200 DPI 260 sheet
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="datawin scanners mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.datawin.de/produkte/hemera-c.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.datawin.de/produkte/hemera-c.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/datawin.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/datawin/hemra-c.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">HEMERA C</p>
                  <p className="product-desc">
                    <span>Size: </span>A3/A4 900x500x 480 mm, Weight: 30 - 35 kg
                    <br />
                    <span>Resolution: </span>300 DPI CCD-camera
                    <br />
                    <span>Speed: </span>DIN A3 per Min 200 DPI 130 sheet
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="datawin omr-scanners mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.datawin.de/produkte/omr-300s.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.datawin.de/produkte/omr-300s.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/datawin.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/datawin/omr-300s.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">OMR 300S</p>
                  <p className="product-desc">
                    Optical mark reader with two sorting trays
                    <br />
                    <span>Throughput: </span>up to 9‘000 docs/h
                    <br />
                    <span>Transporter speed: </span>up to 1,3 m/s
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="datawin omr-scanners mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.datawin.de/produkte/omr-200s.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.datawin.de/produkte/omr-200s.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/datawin.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/datawin/omr-200s.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">OMR 200S</p>
                  <p className="product-desc">
                    Optical mark reader with automatic document feed
                    <br />
                    <span>Throughput: </span>up to 6‘000 docs/h
                    <br />
                    <span>Transporter speed: </span>up to 1,2 m/s
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="datawin omr-scanners mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="https://www.datawin.de/produkte/omr-19e.html"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="https://www.datawin.de/produkte/omr-19e.html"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/datawin.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/datawin/omr-19e.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">OMR 19E</p>
                  <p className="product-desc">
                    Versatile optical mark reader with manual document feed
                    <br />
                    <span>Quality: </span>OCR acc. bis DIN 66223
                    <br />
                    Easy maintenance without tools
                    <br />
                    Single output tray
                  </p>
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="indus book-scanner mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="http://www.indususa.com/book-scanners/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="http://www.indususa.com/book-scanners/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/indus.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage:
                      "url(products/indus/book-scanner-9000.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">Book Scanner 9000</p>
                  <p className="product-desc" />
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="indus indus-series mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="http://www.indususa.com/book-scanners/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="http://www.indususa.com/book-scanners/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/indus.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/indus/indus-3000.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">Indus 3000 microfilm processor</p>
                  <p className="product-desc" />
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
            {/* ITEM START ||||||||||||||||||||||||| */}
            <div
              className="indus microfilm-reader mix product-item"
              style={{ display: "none" }}
            >
              <a
                href="http://www.indususa.com/book-scanners/"
                target="_blank"
                className="pdf-download flex-center"
              >
                <i className="fas fa-download" />
              </a>
              <a
                href="http://www.indususa.com/book-scanners/"
                target="_blank"
                className="p-container"
              >
                <div className="top flex-center">
                  <div className="company-logo flex-center">
                    <div
                      className="clogo"
                      style={{ backgroundImage: "url(partners/indus.png)" }}
                    />
                  </div>
                </div>
                <div
                  className="product-image"
                  style={{
                    backgroundImage: "url(products/indus/super-carrel.jpg)",
                  }}
                />
                <div className="bottom">
                  <p className="product-name">Super Carrel Motorized</p>
                  <p className="product-desc" />
                </div>
              </a>
            </div>
            {/* ITEM END ||||||||||||||||||||||||| */}
          </div>
          {/* END PRODUCTS *****************************************/}
        </section>
        {/* END #products ************************************************************/}
        {/* START #testimonials ************************************************************/}
        {/* <section id="testimonials">

    </section> */}
        {/* END #testimonials ************************************************************/}
        {/* START #clients ************************************************************/}
        <section id="clients">
          <p className="section-title">
            <span>Our</span>Clients
          </p>
          <div className="clients-container">
            <div className="top-clients">
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{
                    backgroundImage:
                      "url(clients/top-clients/alex-library.svg)",
                  }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{
                    backgroundImage: "url(clients/top-clients/aoi.png)",
                  }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{
                    backgroundImage: "url(clients/top-clients/asuit.png)",
                  }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{
                    backgroundImage: "url(clients/top-clients/azhar.png)",
                  }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{
                    backgroundImage: "url(clients/top-clients/msa.png)",
                  }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{
                    backgroundImage: "url(clients/top-clients/nahda.png)",
                  }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{
                    backgroundImage: "url(clients/top-clients/port-said.png)",
                  }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{
                    backgroundImage: "url(clients/top-clients/sadat.png)",
                  }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{
                    backgroundImage: "url(clients/top-clients/sinai.png)",
                  }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{
                    backgroundImage: "url(clients/top-clients/suez-canal.png)",
                  }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{
                    backgroundImage: "url(clients/top-clients/usa-embasy.png)",
                  }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{
                    backgroundImage:
                      "url(clients/top-clients/zagazig-university.png)",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="clients-container">
            <div className="normal-clients">
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{
                    backgroundImage: "url(clients/ahram-candinian.png)",
                  }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{ backgroundImage: "url(clients/ain-shams.png)" }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{ backgroundImage: "url(clients/alex-uni.png)" }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{ backgroundImage: "url(clients/banisuief.png)" }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{ backgroundImage: "url(clients/cairo.png)" }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{ backgroundImage: "url(clients/damnhur.png)" }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{ backgroundImage: "url(clients/delta.png)" }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{ backgroundImage: "url(clients/education-min.png)" }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{ backgroundImage: "url(clients/fayoum.png)" }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{ backgroundImage: "url(clients/future-uni.png)" }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{ backgroundImage: "url(clients/guc.png)" }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{ backgroundImage: "url(clients/helwan.png)" }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{
                    backgroundImage: "url(clients/higher-technology.png)",
                  }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{ backgroundImage: "url(clients/kafr-elshiekh.png)" }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{ backgroundImage: "url(clients/king-maryot.png)" }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{ backgroundImage: "url(clients/mansoura.png)" }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{ backgroundImage: "url(clients/menoufiya.png)" }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{ backgroundImage: "url(clients/miu.png)" }}
                />
              </div>
              <div className="client-item swiper-slide">
                <div
                  className="ct-container"
                  style={{ backgroundImage: "url(clients/october.png)" }}
                />
              </div>
            </div>
          </div>
        </section>
        {/* END #clients ************************************************************/}
        {/* START #awards ************************************************************/}
        <section id="awards">
          <p className="section-title">
            <span>Smile Art</span>Awards
          </p>
          <div className="awards-container">
            <div className="_ac_">
              <div className="_ac-item_">
                {" "}
                <img src="awards/a1.jpg" alt="" className="ac-image" />
              </div>
              <div className="_ac-item_ long">
                {" "}
                <img src="awards/a2.jpg" alt="" className="ac-image" />
              </div>
              <div className="_ac-item_ long">
                {" "}
                <img src="awards/a3.jpg" alt="" className="ac-image" />
              </div>
              <div className="_ac-item_ long">
                {" "}
                <img src="awards/a4.jpg" alt="" className="ac-image" />
              </div>
              <div className="_ac-item_">
                {" "}
                <img src="awards/a5.jpg" alt="" className="ac-image" />
              </div>
              <div className="_ac-item_ long">
                {" "}
                <img src="awards/a6.jpg" alt="" className="ac-image" />
              </div>
              <div className="_ac-item_ long">
                {" "}
                <img src="awards/a7.jpg" alt="" className="ac-image" />
              </div>
              <div className="_ac-item_ long">
                {" "}
                <img src="awards/a8.jpg" alt="" className="ac-image" />
              </div>
              <div className="_ac-item_ long">
                {" "}
                <img src="awards/a9.jpg" alt="" className="ac-image" />
              </div>
              <div className="_ac-item_ long">
                {" "}
                <img src="awards/a10.jpg" alt="" className="ac-image" />
              </div>
              <div className="_ac-item_ long">
                {" "}
                <img src="awards/a11.jpg" alt="" className="ac-image" />
              </div>
            </div>
          </div>
        </section>
        {/* END #awards ************************************************************/}
        <div id="awards_preview">
          <div className="__awards_close__">
            <div className="close-toggle" />
          </div>
          <div className="__awards__">
            <div className="__awardsimg__" />
          </div>
        </div>
        {/* START #projects ************************************************************/}
        <section id="projects">
          <div className="left-side">
            <p className="title">
              Digital transformation projects implemnted by the company in{" "}
              <span>2019</span>
            </p>
            <div className="projects-item">
              <p className="location">Cairo, Egypt</p>
              <p className="c-name">Greater Cairo Water Co.</p>
              <p className="brand-name">Avision</p>
            </div>
            <div className="projects-item">
              <p className="location">Cairo, Egypt</p>
              <p className="c-name">
                The Ministry of Environment Through the Ministry of
                Communications and Information Technology
              </p>
              <p className="brand-name">Avision, Xerox</p>
            </div>
          </div>
          <div className="right-side">
            <div className="projects-item">
              <p className="location">Cairo, Egypt</p>
              <p className="c-name">
                Public Prosecution (Prosecution of Egypt)
              </p>
              <p className="brand-name">Fujitsu</p>
            </div>
            <div className="projects-item">
              <p className="location">Alexanderia, Egypt</p>
              <p className="c-name">Bibliotheca of Alexandria</p>
              <p className="brand-name">Avision, ,Xerox, Image Access</p>
            </div>
            <div className="download">
              <a href="documents/Digital_Transformation_Projects.pdf">
                <i className="fas fa-download" />
                <span>Download full PDF document</span>
              </a>
            </div>
          </div>
        </section>
        {/* END #projects ************************************************************/}
        {/* START #news ************************************************************/}
        <section id="news">
          <p className="section-title light">news</p>
          <div className="news-background" />
          <div className="news-container swiper-container">
            <div className="swiper-wrapper">
              {/* ITEM START ||||||||||||||||||||||||| */}
              <div
                news-title="Alexandria Library"
                path="alex-library"
                location="Alexandria, Egypt"
                map-link="https://goo.gl/maps/BX5UvppHe6QiPsrG9"
                fb-link="https://www.facebook.com"
                insta-link="https://www.instagram.com"
                className="news-item swiper-slide"
                style={{ backgroundImage: "url(news/alex-library/a0.jpg)" }}
              >
                <div className="ni-content">
                  <p className="ni-desc">
                    Installation and Configuration of BOOKEYE 4 SCANNERS from
                    Image Access Co. .Used to scan Books in 120 and 180 degrees
                    with 400dpi quality and convert them to the following Output
                    formats: PDF, PDF/A, JPEG, TIFF, PNM, multipage PDF and
                    TIFF, DICOM and many more.
                  </p>
                </div>
              </div>
              {/* ITEM END ||||||||||||||||||||||||| */}
            </div>
            {/* <div class="slick-next"></div> */}
            {/* <div class="slick-prev"></div> */}
          </div>
          {/* <div class="news-container">
        <div class="news-slider">
          <img src="news/alex-library/a1.jpg" alt="">
        </div>
        <div class="news-content">
          <p class="news-title">Ahmed Sami Al-Sayed</p>
          <a class="news-location" href=""><i class="fas fa-map-marker-alt"></i><span>Cairo, Egypt</span></a>
          <p class="news-desc"></p>
          <div class="news-share">
            <a class="facebook-link" href=""><i class="fab fa-facebook-f"></i></a>
            <a class="instagram-link" href=""><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="more-news">

          <div title="Bookeye Installation in Alexanderia Library"
            path="alex-library"
            news-location="Alexanderia, Egypt"
            map-link=""
            facebook-link="https://www.facebook.com"
            instagram-link="https://www.instagram.com"
            class="_tooltip_ swiper-slide news-tile"
            dir-content="">
            <p class="news-desc2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium minus ut eveniet impedit fuga tempora ratione maxime tempore dignissimos nesciunt est velit quam odio harum cupiditate, dolorum, quas rem!
            </p>
          </div>

        </div>
        
      </div> */}
        </section>
        {/* END #news ************************************************************/}
        {/* START #location ************************************************************/}
        <section id="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3452.8246072998404!2d31.3360852!3d30.0705616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f4a944d9dbb%3A0xd8d55df9765c36e3!2sAl-Ola+Modern+Systems!5e0!3m2!1sen!2seg!4v1563567353179!5m2!1sen!2seg"
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
          />
        </section>
        {/* END #location ************************************************************/}
        {/* START #contact ************************************************************/}
        <section id="contact">
          <div className="contact-container">
            <div className="left-side">
              <div className="title">Contact Us</div>
              <div className="address">
                <i className="fas fa-map-marker-alt" />
                <p>
                  <span>Headquarter:</span> 19 Rabaa Investement Project, Nozha
                  st.,Nasr City, Cairo,Egypt.
                </p>
              </div>
              <div className="phones">
                <i className="fas fa-phone" />
                <div>
                  <p>(+2 02) 24181621</p>
                  <p>(+2 02) 26901298</p>
                  <p>
                    <span>Fax:</span> (+2 02) 26901298
                  </p>
                </div>
              </div>
              <div className="address">
                <i className="fas fa-map-marker-alt" />
                <p>
                  <span>Maintenance Center:</span> 30 Rabaa Investement Project,
                  Nozha st.,Nasr City, Cairo,Egypt.
                </p>
              </div>
              <div className="phones">
                <i className="fas fa-phone" />
                <div>
                  <p>(+2 02) 24198716</p>
                </div>
              </div>
              <div className="note">
                Reach us by phone or email from Sunday to Thursday, 9 A.M. - 5
                P.M.
              </div>
            </div>
            <div className="right-side">
              <div className="title">Send us a message</div>
              <div className="input-container reciver">
                <p>Send this message to:</p>
                <select id="contact_receive">
                  <option value="info@alola-eg.com">Administration</option>
                  <option value="support@alola-eg.com">
                    Technical Support
                  </option>
                  <option value="sales@alola-eg.com">Sales Department</option>
                </select>
              </div>
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
                <textarea
                  name="message"
                  id="contact_message"
                  defaultValue={""}
                />
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
      {/* END .body-content ************************************************************/}
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
