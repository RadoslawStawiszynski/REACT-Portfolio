import { useState } from "react";
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const calculatedCount = count * 24 * 3600; // Przykład: count= ilość dni * ilość godz na dobe * ilosć sekund w godzinie = wynik podany w sekundach
  const currentDate = new Date();
  const newDate = new Date(currentDate.getTime() + calculatedCount * 1000); // Dodanie lub odjęcie czasu w sekundach

  return (
    <div>
      <div className="RowButton">
        <button
          className="ButtonStep"
          onClick={() => setStep((step) => step - 1)}
        >
          -
        </button>
        <span> Step: {step} </span>
        <button
          className="ButtonStep"
          onClick={() => setStep((step) => step + 1)}
        >
          +
        </button>
      </div>

      <div className="RowButton">
        <button
          className="ButtonCount"
          onClick={() => setCount((count) => count - step)}
        >
          -
        </button>
        <span> Count: {count} </span>
        <button
          className="ButtonCount"
          onClick={() => setCount((count) => count + step)}
        >
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{newDate.toDateString()}</span>
      </p>
    </div>
  );
}
