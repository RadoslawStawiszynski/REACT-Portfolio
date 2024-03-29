import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //const [test, setTest] = useState({ name: " RSpro" });

  // nie należy uzywać let zamiast const
  // const step = 1;
  // bardzo przydatna zmienna

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    //  if (step > 1) setStep(step - 1);
    // step = step - 1; nie używać do zaaktualizowania step
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);

    // if (step < 3) setStep((s) => s + 1);

    // BAD PRACTICE
    // test.name = "Radek";
    //{
    //  /* setTest({ name: " Radek" });*/
    //}
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button> */}

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
            {/*{test.name}*/}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
              // onMouseEnter={() => alert("TEST")}
              // po najechaniu myszką włącza się alert
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
