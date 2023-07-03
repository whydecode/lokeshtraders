import React from "react";
import "../css/newArrival.css";
import new1 from "../images/jumbo-kit.jpg";
const NewArrivals = () => {
  return (
    <div className="newArrivals">
      <div className="sliding-paragraphs">
        <h1 className="slide-paragraph">
          <img src={new1} alt="" /> Jumbo Kit<sup>new</sup>
        </h1>
        <h1 className="slide-paragraph">
          <sup>new</sup> Second Item
        </h1>
        <h1 className="slide-paragraph">
          <sup>new</sup> Third Item
        </h1>
      </div>
    </div>
  );
};

export default NewArrivals;
