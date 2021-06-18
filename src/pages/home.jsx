import "../App.css";
import { peoplePuzzle } from "../media/people_puzzle.png";

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
        <p className="large_text">Get your shit together</p>
        <p className="small_text uppercase">practice skills from Group Therapy</p>
        <p className="begin_button">Begin</p>
      </div>
      <div className="skills_section">
        <p className="large_text left_title">Change your relationship to yourself and others</p>
        <div className="skills_set">
          <p className="medium_text width_40">Values Drag and Drop</p>
          <p className="medium_text width_40">RAIN</p>
          <p className="medium_text width_80">Multidimensional experiential avoidance questionnaire</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
