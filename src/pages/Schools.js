import React from "react";
import "../css/schools.css";
import SchoolList from "../json/SchoolList.json";
const Schools = () => {
  const sortedList = SchoolList.sort();
  return (
    <div className="schools">
      <h1>Schools</h1>
      <ul>
        {sortedList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Schools;
