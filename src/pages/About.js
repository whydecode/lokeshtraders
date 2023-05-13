import React from "react";
import "../css/about.css";
import lokeshtraders from "../images/lokeshtraders.png";
const About = () => {
  return (
    <div className="about">
      <h1>About us</h1>
      <div className="aboutContent">
        <p>
          Welcome to Lokesh Traders & Mukesh Traders! We are your one-stop
          destination for high-quality books, stationery, and educational
          resources. With a wide range of subjects and age groups covered, our
          curated collection ensures you'll find the perfect materials for your
          educational needs.
        </p>
        <p>
          In addition to books, we offer an extensive range of stationery
          supplies. From pens and pencils to notebooks and art materials, we
          have everything you need to stay organized and creative. We believe
          that the right stationery can enhance productivity and foster
          creativity, which is why we carefully select our products from trusted
          brands.
        </p>
        <p>
          Our friendly and knowledgeable staff is dedicated to providing
          exceptional customer service and personalized recommendations. We
          believe in affordability without compromising quality and offer
          competitive prices. As a community-focused business, we support local
          schools and initiatives. Explore our website and embark on an
          enriching educational journey with us at Lokesh Traders & Mukesh
          Traders.
        </p>
        <p>
          We proudly operate our own book publishing house. Explore our
          extensive range of books crafted in-house, designed to meet the
          diverse needs and interests of our valued readers.
        </p>
        <p>
          Thank you for choosing Lokesh Traders & Mukesh Traders. We look
          forward to serving you and being a part of your educational success.
        </p>
      </div>
      <div className="photo">
        <img src={lokeshtraders} alt="Lokesh Traders" />
      </div>
    </div>
  );
};

export default About;
