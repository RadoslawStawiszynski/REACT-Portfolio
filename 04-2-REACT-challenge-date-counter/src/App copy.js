import { useState } from "react";
import React from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function leftButtonStep() {
    setStep((step) => step - 1);
  }
  function rightButtonStep() {
    setStep((step) => step + 1);
  }
  function leftButtonCount() {
    setCount((count) => count - step);
  }
  function rightButtonCount() {
    setCount((count) => count + step);
  }

  return (
    <div>
      <div className="firstRow">
        <button className="leftButtonStep" onClick={leftButtonStep}>
          -
        </button>
        <p>Step: {step} </p>
        <button className="rightButtonStep" onClick={rightButtonStep}>
          +
        </button>
      </div>

      <div className="secondRow">
        <button className="leftButtonCount" onClick={leftButtonCount}>
          -
        </button>
        <p>Count: {count} </p>
        <button className="rightButtonCount" onClick={rightButtonCount}>
          +
        </button>
        <Message count={count} />
      </div>
    </div>
  );
}

function Message({ count }) {
  const calculatedCount = count * 24 * 3600; // Przykład: count= ilość dni * ilość godz na dobe * ilosć sekund w godzinie = wynik podany w sekundach

  const currentDate = new Date();
  const newDate = new Date(currentDate.getTime() + calculatedCount * 1000); // Dodanie lub odjęcie czasu w sekundach

  if (count === 0) {
    return <p>{"Today is " + newDate.toDateString()}</p>;
  } else if (count > 0) {
    return <p>{count + " days from today is " + newDate.toDateString()}</p>;
  } else {
    return <p>{count + " days ago was " + newDate.toDateString()}</p>;
  }
}
