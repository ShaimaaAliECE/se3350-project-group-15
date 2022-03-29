<<<<<<< HEAD
import React, { Component } from "react";
=======
import React, { Component, useState } from "react";
>>>>>>> version2
import Helper from "../Helper/Helper";
import SquareBtnStyle from "../components/SquareBtnStyle";
import SquareBtnStyleWithInput from "../components/SquareBtnStyleWithInput";
import LevelControl from "../components/LevelControl";
import InstructionPanel from "../components/InstructionPanel";
<<<<<<< HEAD


const helper = new Helper();

export default function Level2(){
=======

const helper = new Helper();

export default function Level2() {
>>>>>>> version2
  const currentLevel = 2;
  const [currentPoint, setCurrentPoint] = React.useState(0);
  const [currentQuestion, setCurrentQuestion] = React.useState([]);
  const [summaryArray, setSummaryArray] = React.useState([]);
  const [hasStarted, setHasStarted] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const displayArray = summaryArray.slice(0, currentStep - 1);
<<<<<<< HEAD
  const errorCount=0;
=======
  const errorCount = 0;
>>>>>>> version2

  const levelStart = () => {
    let generate = helper.generateNumberArray(10, 20);
    setCurrentQuestion(generate);
    setSummaryArray(helper.generateMap(generate));
    setCurrentStep(1);
    setHasStarted(true);
    setCurrentPoint(10);
<<<<<<< HEAD
   
=======
>>>>>>> version2
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
<<<<<<< HEAD
 

  return (
    <div className="Level1">
=======
  const getScore = () => {
    return '';
  }
  return (
    <div className="Level2">
>>>>>>> version2
      <h1>Level 2</h1>
      <LevelControl
        start={levelStart}
        restart={levelRestart}
        hasStarted={hasStarted}
        currentLevel={currentLevel}
        currentPoint={currentPoint}
<<<<<<< HEAD

      />
      <div className="display-area">
        <div className="display-area-row">
          {currentQuestion.map((item, index) => {
            return <SquareBtnStyle key={index}>{item}</SquareBtnStyle>;
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
                      {subItem.map((num, k,errorCount) => (
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
=======
        getScore={getScore} />
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
            if (item.length === currentQuestion.length &&
              item[0].length !== 1) {
              return <div className="display-area-row" key={i}>
                {item.map((item, index) => {
                  return (
                    <SquareBtnStyleWithInput
                      key={index}
                      id={item}
                      currentPoint={currentPoint}
                      setCurrentPoint={setCurrentPoint}>

                    </SquareBtnStyleWithInput>
                  );
                })}
              </div>
            } else {
              return <div className="display-area-row" key={i}>
                <SquareBtnStyle opacity />
                {item.map((subItem, j) => (
                  <div className="display-area-col" key={j}>
                    {j === item.length / 2 && <SquareBtnStyle opacity />}
                    {subItem.map((num, k) => (
                      <SquareBtnStyleWithInput
                        key={k}
                        id={num}
                        currentPoint={currentPoint}
                        setCurrentPoint={setCurrentPoint}>

                      </SquareBtnStyleWithInput>
                    ))}
                    <SquareBtnStyle opacity />
                  </div>
                ))}
              </div>
            }
          }
          )}
>>>>>>> version2
        </div>
      </div>

      <InstructionPanel
        currentLevel={currentLevel}
        currentStep={currentStep}
        canPrev={currentStep > 1}
        canNext={
          currentStep !== 0 &&
          currentStep < summaryArray.length + 1 &&
<<<<<<< HEAD
          currentPoint === currentQuestion.length
        }
        onPrevStep={previousStep}
        onNextStep={nextStep}
      />
    </div>
=======
          currentPoint === currentQuestion.length}
        onPrevStep={previousStep}
        onNextStep={nextStep} />
    </div >
>>>>>>> version2
  );
}
