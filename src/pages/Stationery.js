import React, { useEffect, useRef } from "react";
import "../css/schools.css";
import ItemList from "../json/ItemList.json";

const Stationery = () => {
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    const items = list.getElementsByTagName("li");

    let maxLength = 0;

    for (let i = 0; i < items.length; i++) {
      const itemText = items[i].textContent;
      if (itemText.length > maxLength) {
        maxLength = itemText.length;
      }
    }

    for (let i = 0; i < items.length; i++) {
      items[i].style.width = `${maxLength}ch`;
    }
  }, []);

  const sortedList = ItemList.sort();

  return (
    <div className="schools">
      <h1>Fancy Stationery</h1>
      <ul ref={listRef}>
        {sortedList.map((item, index) => (
          <li key={index}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Stationery;
