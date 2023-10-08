import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar name="Radosław Stawiszyński" photoName="rs-foto.JPEG" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.photoName} alt={props.name} />
    </div>
  );
}
// opis osoby
function Intro() {
  <div className="skill-list"></div>;
}

// function SkillList() {
//   <div className="skill">
//     <Skill skill="HTML" level={90} />
//     <Skill skill="CSS" level={80} />
//     <Skill skill="JavaScript" level={70} />
//     <Skill skill="React" level={60} />
//     <Skill skill="Redux" level={50} />
//     <Skill skill="Node.js" level={5} />
//     <Skill skill="Express.js" level={0} />
//     <Skill skill="MongoDB" level={0} />
//     <Skill skill="PostgreSQL" level={0} />
//   </div>;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
