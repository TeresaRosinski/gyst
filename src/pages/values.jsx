import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import valuesList from "../data/valuesList";
import chosenValuesList from "../data/chosenValuesList";
import "../App.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Values() {
  
  const [values, updateValues] = useState(valuesList);
  const [chosenValues, updateChosenValues] = useState(chosenValuesList);

  function handleOnDragEnd(result) {
    const valuesArray = Array.from(values);
    const [reorderedItem] = valuesArray.splice(result.source.index, 1);
    valuesArray.splice(result.destination.index, 0, reorderedItem);
    updateValues(valuesArray);
  }
  function handleOnDragEnd2(result) {
    const [reorderedItem] = values.splice(result.source.index, 1);
    if (chosenValues.includes("reorderedItem")) {
      chosenValues.splice(result.destination.index, 0, reorderedItem);
      updateChosenValues(chosenValues);
    } else {
      chosenValues.push(reorderedItem);
      updateChosenValues(chosenValues);
    }
  }
  return (
    <div className="values_section">
      <Container>
        <h1>Values Drag and Drop</h1>
        <Row>
          <DragDropContext onDragEnd={handleOnDragEnd} className="side_by_side">
            <Col>
              <Droppable droppableId="valuesList">
                {(provided) => (
                  <div
                    className="values_list"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {values.map(({ id, name, detail }, index) => {
                      return (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <Card
                              key={id}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              className="value_card"
                            >
                              <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Subtitle>{detail}</Card.Subtitle>
                              </Card.Body>
                            </Card>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Col>
            <Col>
              <Droppable droppableId="chosenValuesList">
                {(provided) => (
                  <div
                    className="chosen_values_list"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <h2>Chosen Values</h2>
                    {chosenValues.map(({ id, name, detail }, index) => {
                      return (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <Card
                              key={id}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              className="value_card"
                            >
                              <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Subtitle>{detail}</Card.Subtitle>
                              </Card.Body>
                            </Card>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Col>
          </DragDropContext>
        </Row>
      </Container>
    </div>
  );
}
export default Values;
