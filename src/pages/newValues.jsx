import React, { useState } from "react";
import ReactDOM from "react-dom";
import { v4 as uuid } from "uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./newValues.styles.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import valuesData from "../data/values";

//mocking out what dtat will look like
const importedValues = valuesData;

//mocked backend - will need to be editable - each group will be the id + key, will have tittle and list of items - items are dragged
const columnsFromBackend = {
  [uuid()]: {
    name: "Values List",
    items: importedValues,
  },
  [uuid()]: {
    name: "Chosen Values",
    items: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};
function Values() {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div className="valuesPage_Full">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([id, column]) => {
          return (
            <div className="allValues_Column">
              <p className="columnTitle">{column.name}</p>

              <Droppable droppableId={id} key={id}>
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="centerContent"
                    >
                      {column.items.map((item, index) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <div
                                  className="valueCard"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    height: "100%",
                                    userSelect: "none",
                                    borderBottom: "33px solid #031163",
                                    backgroundColor: snapshot.isDragging
                                      ? "RGBA(251, 250, 245, .2)"
                                      : "",
                                    ...provided.draggableProps.style,
                                    color: "#FBFAF5",
                                  }}
                                >
                                  <p className="title">{item.content}</p>
                                  <p className="description">{item.desc}</p>
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}
export default Values;
