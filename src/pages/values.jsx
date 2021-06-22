import "../App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { valuesList } from "./valuesList";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
export default function Values() {
  //store list items

  //Insert List items into DOM

  return (
    <div className="valuesPage">
      <p className="largeText">Values Sort:
      <span>Directions for dragging and dropping values</span>
      </p>

      <div className="sortSect">
        <ul className="valuesList" id="allValues">
          <p className="mediumText">All Values</p>
          {valuesList.map(({ name, index }) => {
            return <li key={index}>{name}</li>;
          })}
        </ul>
        <ul className="valuesList">
          <p className="mediumText">Chosen Values</p>
        </ul>
      </div>
    </div>
  );
}
