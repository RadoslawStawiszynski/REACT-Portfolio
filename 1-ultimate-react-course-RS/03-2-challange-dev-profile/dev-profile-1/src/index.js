import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skillsData = [
  {
    skill: "HTML",
    level: "intermediate",
    background: "#FFEEE4",
  },
  { skill: "CSS", level: "intermediate", background: "gold" },
  {
    skill: "JavaScript",
    level: "intermediate",
    background: "#fc913a",
  },
  { skill: "React", level: "advanced", background: "silver" },
  {
    skill: "Python",
    level: "intermediate",
    background: "#D7FFF1",
  },
  {
    skill: "Node.js",
    level: "beginner",
    background: "#D09E88",
  },
  {
    skill: "Git and GitHub",
    level: "advanced",
    background: "#8EC0E4",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    background: "#F6B352",
  },
];

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
  const skill = skillsData;
  return (
    <div className="skill-list">
      {skill.map((skill) => (
        <Skill
          skill={skill.skill}
          background={skill.background}
          level={skill.level}
        />
      ))}
    </div>
  );
}

function Skill({ skill, background, level }) {
  // console.log(ico);
  return (
    <div className="skill" style={{ backgroundColor: background }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "\u{1F476}"}
        {level === "advanced" && "\u{1F4AA}"}
        {level === "intermediate" && "\u{1F44D}"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
