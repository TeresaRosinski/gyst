import React from "react";
import "../App.css";
import { Droppable, Draggable } from "react-beautiful-dnd";

export default class Column extends React.Component {
  render() {
    return (
      <Droppable droppableId={this.props.column.id}>
        {provided => (
          <ul
            className="valuesList"
            innerRef={provided.innerRef}
            {...provided.droppableProps}
          >
            {this.props.values.map((value, index) => (
              <Value key={value.id} value={value} index={index} />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    );
  }
}
