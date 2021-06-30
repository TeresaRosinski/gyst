import React, { useState } from "react";
import ReactDOM from "react-dom";
import {v4 as uuid} from "uuid"; 
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "../App.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Values() {
  
  
  //mocked backend - will need to be editable - each group will be the id + key, will have tittle and list of items - items are dragged
  const columnsFromBackend =[
    {
      [uuid()]: {
        name: 'Values', 
        items:[]
      }
    }
  ]


  return (
    <div style={{display: 'flex', justifyContent: 'center', height: '100%'  }}>
      <DragDropContext onDragEnd={result => console.log(result)}>

      </DragDropContext>
    </div>
  );
}
export default Values;
