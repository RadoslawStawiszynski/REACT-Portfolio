import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setCounter(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={() => setCounter((c) => c - step)}>-</button>
        <input
          type="text"
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
        />
        <button onClick={() => setCounter((c) => c + step)}>+</button>
      </div>
      <p>
        <Message counter={counter} />
        <span>Counter: {counter}</span>
      </p>

      {counter !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
function Message({ counter }) {
  const calculatedCount = counter * 24 * 3600; // Przykład: count= ilość dni * ilość godz na dobe * ilosć sekund w godzinie = wynik podany w sekundach

  const currentDate = new Date();
  const newDate = new Date(currentDate.getTime() + calculatedCount * 1000); // Dodanie lub odjęcie czasu w sekundach

  if (counter === 0) {
    return <p>{"Today is " + newDate.toDateString()}</p>;
  } else if (counter > 0) {
    return <p>{counter + " days from today is " + newDate.toDateString()}</p>;
  } else {
    return <p>{counter + " days ago was " + newDate.toDateString()}</p>;
  }
}
