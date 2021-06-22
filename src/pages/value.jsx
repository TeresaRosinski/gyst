import React from 'react';
import "../App.css"

export default class Value extends React.Component {
  render(){
    return <li>{this.props.value.name}</li>;
  }
}