import React from "react";
import "../App.css";
import Value from "./value";

export default class Column extends React.Component {
  render() {
    return (
      <ul className="valuesList" id="allValues">
        <p className="mediumText">{this.props.column.title}</p>
        {this.props.values.map(value => <Value key={value.id} value={value} />)}
      </ul>
    );
  }
}
