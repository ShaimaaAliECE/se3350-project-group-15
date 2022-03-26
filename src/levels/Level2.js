import React, { Component, useState } from "react";
import Helper from "../Helper/Helper";
import SquareBtnStyle from "../components/SquareBtnStyle";
import SquareBtnStyleWithInput from "../components/SquareBtnStyleWithInput";
import LevelControl from "../components/LevelControl";
import InstructionPanel from "../components/InstructionPanel";
import Popup from "../components/Popup";

const helper = new Helper();

export default function Level2() {
  const currentLevel = 2;
  const [currentPoint, setCurrentPoint] = React.useState(0);
  const [currentQuestion, setCurrentQuestion] = React.useState([]);
  const [summaryArray, setSummaryArray] = React.useState([]);
  const [hasStarted, setHasStarted] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const displayArray = summaryArray.slice(0, currentStep - 1);
  const errorCount = 0;

  const levelStart = () => {
    let generate = helper.generateNumberArray(10, 20);
    setCurrentQuestion(generate);
    setSummaryArray(helper.generateMap(generate));
    setCurrentStep(1);
    setHasStarted(true);
    setCurrentPoint(10);
  };

  const levelRestart = () => {
    let generate = helper.generateNumberArray(10, 20);
    setCurrentQuestion(generate);
    setSummaryArray(helper.generateMap(generate));
    setCurrentStep(1);
    setHasStarted(true);
    setCurrentPoint(10);
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCurrentPoint(10);
    }
  };

  const nextStep = () => {
    if (currentStep < summaryArray.length + 1) {
      setCurrentStep(currentStep + 1);
      setCurrentPoint(0);
    }
  };

  //for the popup close button test
  const [buttonPopup, setButtonPopup] = useState(false);

  // const errorPopup=()=>{
  //   if(errorCount===3){
  //     ()=>{setButtonPopup(true);}

  //   }

  // };
  return (
    <div className="Level1">
      <h1>Level 2</h1>
      <LevelControl
        start={levelStart}
        restart={levelRestart}
        hasStarted={hasStarted}
        currentLevel={currentLevel}
        currentPoint={currentPoint}
      />

      <div className="display-area">
        <div className="display-area-row">
          {currentQuestion.map((item, index) => {
            return (
              <div>
                <SquareBtnStyle key={index}>{item}</SquareBtnStyle>
                
              </div>
            );
          })}
        </div>
        <div className="display-area-dynamic">
          {displayArray.map((item, i) => {
            if (
              item.length === currentQuestion.length &&
              item[0].length !== 1
            ) {
              return (
                <div className="display-area-row" key={i}>
                  {item.map((item, index) => {
                    return (
                      <SquareBtnStyleWithInput
                        key={index}
                        id={item}
                        error={errorCount}
                        currentPoint={currentPoint}
                        setCurrentPoint={setCurrentPoint}
                      ></SquareBtnStyleWithInput>
                    );
                  })}
                </div>
              );
            } else {
              return (
                <div className="display-area-row" key={i}>
                  <SquareBtnStyle opacity />
                  {item.map((subItem, j) => (
                    <div className="display-area-col" key={j}>
                      {j === item.length / 2 && <SquareBtnStyle opacity />}
                      {subItem.map((num, k, errorCount) => (
                        <SquareBtnStyleWithInput
                          key={k}
                          id={num}
                          error={errorCount}
                          currentPoint={currentPoint}
                          setCurrentPoint={setCurrentPoint}
                        ></SquareBtnStyleWithInput>
                      ))}
                      <SquareBtnStyle opacity />
                    </div>
                  ))}
                </div>
              );
            }
          })}
        </div>
        {/* <Popup
                  trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <h1> my pop up</h1>
                </Popup> */}
      </div>

      <InstructionPanel
        currentLevel={currentLevel}
        currentStep={currentStep}
        canPrev={currentStep > 1}
        canNext={
          currentStep !== 0 &&
          currentStep < summaryArray.length + 1 &&
          currentPoint === currentQuestion.length
        }
        onPrevStep={previousStep}
        onNextStep={nextStep}
      />
    </div>
  );
}
