import React from "react";
import "../App.css";
import { Draggable, Droppable } from "react-beautiful-dnd";

export default class Value extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.value.id} index={this.props.index}>
        {(provided) =>(
        <li
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        innerRef={provided.innerRef}>{this.props.value.name}</li>
        )}
      </Draggable>
    );
  }
}
