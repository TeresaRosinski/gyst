import "../App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { peoplePuzzle } from "../media/people_puzzle.png";
import  ToDoList from "./toDoList";

function Home() {
  return (
    <div className="landingScreen">
      <ul className="navBar">
        <div className="leftTab">
          <li>Habi-Sabi</li>
        </div>
        <div className="centerTabs">
          <li>About</li>
          <li>Skills</li>
          <li>Modalities</li>
        </div>
        <div className="rightTabs">
          <li>Log-In</li>
          <li>Begin</li>
        </div>
      </ul>
      <div className="homePage_text">
        <p className="largeText">Get your shit together</p>
        <p className="uppercase">practice skills from Group Therapy</p>
        <p className="begin_button">Begin</p>
      </div>
      <div className="skills_section">
        <p className="mediumText capitalize left_title">SKILLS HEADING TEXT</p>
        <div className="skills_set">
          <Link to="/values" className="width_50 skillBox lightBackground">
            Values Drag and Drop
          </Link>
          <p className="width_50 skillBox lightBackground">RAIN</p>
          <p className="width_100 skillBox darkBackground">
            Multidimensional experiential avoidance questionnaire
          </p>
        </div>
      </div>
      <ToDoList />
    </div>
  );
}
export default Home;
