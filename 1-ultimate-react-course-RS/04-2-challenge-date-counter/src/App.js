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

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth(); // miesiące numerowane są od 0 (styczeń) do 11 (grudzień)
  const dayMonth = date.getDate();
  const day = date.getDay();
  const newDate = ` ${day} ${month + 1} ${dayMonth} ${year}`;

  function leftButtonStep() {
    setStep((step) => step - 1);
  }
  function leftButtonCount() {
    setCount((count) => count - step);
  }

  function rightButtonStep() {
    setStep((step) => step + 1);
  }
  function rightButtonCount() {
    setCount((count) => count + step);
  }

  function Message({ count, newDate }) {
    if (count === 0) {
      return <p>{"Today is " + newDate}</p>;
    } else if (count > 0) {
      return <p>{count + "days from today is" + newDate}</p>;
    } else {
      return <p>{"Today is 2 " + newDate}</p>;
    }
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
        <Message count={count} newDate={newDate} />
      </div>
    </div>
  );
}
