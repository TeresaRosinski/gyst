import React, {useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import finalSpaceCharacters from "./data/valuesList.jsx";
import "./App.css";
import Values from './pages/values';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
     <Values />
    </div>
  );
}
export default App;
