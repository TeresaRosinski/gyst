import "../App.css";
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { valuesData } from "./valuesList.js";
import Column from "./column";


class Values extends React.Component {
  state = valuesData;

render(){
  return (
    <div className="valuesPage">
      <p className="largeText">
        Values Sort:
        <span>Directions for dragging and dropping values</span>
      </p>

      <div className="sortSect">
        
          {this.state.columnOrder.map((columnId) => {
            const column = this.state.columns["column-1"];
            const values = column.valueIDs.map(valueId => this.state.valuesList[valueId]);
            return <Column key={column.id} column={column} values={values} />
          })}
       
        <ul className="valuesList">
          <p className="mediumText">Chosen Values</p>
        </ul>
      </div>
    </div>
  );
}
} export default Values;