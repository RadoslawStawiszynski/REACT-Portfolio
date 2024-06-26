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
      {/* <Steps /> */}
      <StepMessage step={"First"}>
        <p>Pass in content</p>
        <p>🙄</p>
      </StepMessage>
      <StepMessage step={"Second"}>
        <p>Read children prop</p>
        <p>🥱</p>
      </StepMessage>
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
          <StepMessage step={step}>
            <div>{messages[step - 1]}</div>
            {/*{test.name}*/}
            <p></p>
            <div className="buttons">
              <Button2
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button2>
            </div>
          </StepMessage>
          <div className="buttons">
            <Button1
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
              text="Previous"
              emoji="👈"
            />
            <Button2 bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              <span>👉</span>
              Next
            </Button2>
          </div>
        </div>
      )}
    </div>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button1({ textColor, bgColor, onClick, text, emoji }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      <span>{emoji}</span>
      {text}
    </button>
  );
}
function Button2({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
