import React, { useRef } from "react";
import "../css/home.css";
import books from "../images/books.png";
import stationery from "../images/stationery.png";
import publisher from "../images/publisher.png";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import NewArrivals from "../components/NewArrivals";
const Home = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });

  return (
    <div className="home">
      {/* ---------------------------------- INTRO ----------------------------------- */}
      <div className="intro">
        <div className="intro-overlay">
          <h1 className="introHead">School Books & Fancy Stationery</h1>
          <p className="introText">
            Lokesh Traders in Bharatpur, Rajasthan, India is a renowned shop for
            school books and fancy stationery. It has been serving the local
            community for over 30 years, offering a wide variety of items at
            reasonable prices. From textbooks to notebooks, pens to pencils, and
            other office supplies, We have it all.
          </p>
        </div>
      </div>
      {/* ---------------------------------- New Arrivals ----------------------------------- */}

      <NewArrivals />

      {/* ---------------------------------- Services ----------------------------------- */}

      <div className="services">
        <h1>Services we Provide</h1>
        <br />
        <div
          ref={ref1}
          className="card"
          style={{
            transform: isInView1 ? "none" : "translatex(-200px)",
            opacity: isInView1 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <img src={books} alt="" />
          <h2>School Books</h2>
          <p>
            We provide a wide selection of books catering to the curriculum of
            numerous schools in Bharatpur.
          </p>
          <Link to="/schools">
            <button id="bottone1">
              <strong>More Info</strong>
            </button>
          </Link>
        </div>
        <div
          ref={ref2}
          className="card"
          style={{
            transform: isInView2 ? "none" : "translatey(200px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <img src={stationery} alt="" />
          <h2>Fancy Stationery</h2>
          <p>
            Explore our curated selection of fine stationery products designed
            to elevate your writing experience and meet your unique style and
            preferences.
          </p>
          <Link to="/stationery">
            <button id="bottone1">
              <strong>More Info</strong>
            </button>
          </Link>
        </div>
        <div
          ref={ref3}
          className="card"
          style={{
            transform: isInView3 ? "none" : "translatex(200px)",
            opacity: isInView3 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <img src={publisher} alt="" />
          <h2>Books Publishing</h2>
          <p>
            We proudly operate our own book publishing house. Explore our
            extensive range of books crafted in-house, designed to meet the
            diverse needs and interests of our valued readers.
          </p>
          <Link to={"http://www.mountvalleybooks.com/"} target="_blank">
            <button id="bottone1">
              <strong>More Info</strong>
            </button>
          </Link>
        </div>
      </div>

      {/* ---------------------------------- Map ----------------------------------- */}

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443.4529364758668!2d77.48571014447859!3d27.230968376610466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973a39a748c2307%3A0xed42c77a332448a9!2sLOKESH%20TRADERS!5e0!3m2!1sen!2sin!4v1682761165984!5m2!1sen!2sin"
          width="800"
          height="600"
          allowFullScreen
          loading="lazy"
          title="map"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
