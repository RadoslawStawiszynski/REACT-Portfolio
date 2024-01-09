import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img
        src="rs-foto.JPEG"
        alt="Radosław Stawiszyński"
        style={{ width: "100%", height: "auto" }}
        />
    </div>
  );
}
// opis osoby
function Intro() {
  return (
    <div>
      <h1>"Radosław Stawiszyński"</h1>
      <h3>
        I'm a web developer with a passion for creating digital experiences. In
        my free time, you'll often find me immersed in adventurous video games.
      </h3>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" level={40} ico={"\u{1F44D}"} background="#FFEEE4" />
      <Skill skill="CSS" level={40} ico={"\u{1F44D}"} background="gold" />
      <Skill
        skill="JavaScript"
        level={40}
        ico={"\u{1F44D}"}
        background="#fc913a"
      />
      <Skill
        skill="React"
        level={80}
        emoji=""
        ico={"\u{1F4AA}"}
        background="silver"
      />
      <Skill skill="Python" level={50} ico={"\u{1F44D}"} background="#D7FFF1" />
      <Skill skill="Node.js" level={5} ico={"\u{1F476}"} background="#D09E88" />
      <Skill
        skill="Git and GitHub"
        level={80}
        ico={"\u{1F4AA}"}
        background="#8EC0E4"
      />
      <Skill
        skill="Web Design"
        level={50}
        ico={"\u{1F44D}"}
        background="#F6B352"
      />
    </div>
  );
}

function Skill(props) {
  const style = {
    backgroundColor: props.background,
  };

  return (
    <div className="skill" style={style}>
      <h3>{props.skill}</h3>
      <p>{props.level}%</p>
      <span>{props.ico}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
