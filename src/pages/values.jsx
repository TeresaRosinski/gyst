import "../App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Values() {
  const draggable_list = document.getElementById("draggable_list");
  const valuesList = ["family", "love", "respect"];
  //store list items

  const valueItems = [];
  let dragStartIndex;

  //Insert List items into DOM
  function createList() {
    [...valuesList].forEach((value, index) => {
      const valueItem = document.createElement("li");
      valueItem.setAttribute("data-index", index);
      valueItem.innerHTML = `<span className="number">${index + 1}</span>
      <div className="draggable" draggable="true">
      <p className="value_name">${value}</p>
      </div>`;
      valueItems.push(valueItem);
      draggable_list.appendChild(valueItem);
    });
  }
  createList();
  return (
    <div className="valuesPage">
      <p className="largeText">Values Sort</p>
      <p>Directions for dragging and dropping values</p>
      <p className="mediumText">Values List</p>
      
      <ul className="draggable_list" id="draggable_list"></ul>
     
    </div>
  );
}
export default Values;
