import React from "react";
import Helper from "../Helper/Helper";
import SquareBtnStyle from "../components/SquareBtnStyle";
import SquareBtnStyleWithInput from "../components/SquareBtnStyleWithInput";
import LevelControl from "../components/LevelControl";
import InstructionPanel from "../components/InstructionPanel";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Authentication/firebase";
import { useAlert } from "react-alert";
import Timer from "../components/Timer";
//import the popup window ---chen wang
import Popup from "../components/Popup";
import {useState} from 'react';

const helper = new Helper();

export default function Level3() {
  const alert = useAlert(); //Henry: fancy alert
  const currentLevel = 3;
  const [currentPoint, setCurrentPoint] = React.useState(0);
  const [currentError, setCurrentError] = React.useState(0);
  const [currentQuestion, setCurrentQuestion] = React.useState([]);
  const [summaryArray, setSummaryArray] = React.useState([]);
  const [hasStarted, setHasStarted] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const displayArray = summaryArray.slice(0, currentStep - 1);
  const [time, setTime] = React.useState(0); //time from Timer component
  const [score, setScore] = React.useState(0); //testing
  const [error, setError] = React.useState(0);
  //testing for popup button
  const [buttonPopup,setButtonPopup]=useState(false);


  const [popupWindow, setPopupWindow] = React.useState(false);

  const levelStart = () => {
    let generate = helper.generateNumberArray(10, 20);
    setCurrentQuestion(generate);
    setSummaryArray(helper.generateMap(generate));
    setCurrentStep(1);
    setHasStarted(true);
    setCurrentPoint(10);
    setCurrentError(0);
  };

  const levelRestart = () => {
    let generate = helper.generateNumberArray(10, 20);
    setCurrentQuestion(generate);
    setSummaryArray(helper.generateMap(generate));
    setCurrentStep(1);
    setHasStarted(true);
    setCurrentPoint(10);
    setCurrentError(0);
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

  //when there is 3 errors, a window will be poped up
  const popup = () => {
    setPopupWindow(true);
    console.log(popup);
  };
  //get the number of errors

  const getTime = (time) => {
    setTime(time);
  };

  const getScore = () => {
    //testing from Chen Wang
    // console.log("===score")
    // console.log(score) // increase when thers is a correct answer
    return score;
  };

  //it runs successfully everytime there is an error
  //currently setPopupWindow() is not working

  const getError = () => {
    //Problem: equal to zero when there is an error????
    //testing ---Chen Wang
    // if(error===3){
    setPopupWindow(false);
    // }
    console.log("=====error====");
    console.log(error);
    return error;
  };

  //handle submit answer
  async function handleSubmit(e) {
    // e.preventDefault();
    let timeSpent = `${Math.floor((time / 60000) % 60)} minutes ${Math.floor(
      (time / 1000) % 60
    )} seconds`;
    let userEmail = localStorage.getItem("userEmail");
    let currentdate = new Date();
    let datetime = ` ${currentdate.getDate()}/${
      currentdate.getMonth() + 1
    }/${currentdate.getFullYear()} - ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
    //check if user is signed in
    if (userEmail != null) {
      const usersCollectionRef = collection(db, "gameRecords");
      await addDoc(usersCollectionRef, {
        email: userEmail,
        score: score,
        timeSpent: timeSpent,
        dateTime: datetime,
        level: "Level 3",
      });
      alert.show("Submitted record successfully", { timeout: 1500 });
    } else {
      alert.error("please sign in first!", { timeout: 1500 });
    }
  }

  return (
    <div className="Level3">
      <h1>Level 3</h1>
      <Timer getTime={getTime} />
      <LevelControl
        start={levelStart}
        restart={levelRestart}
        hasStarted={hasStarted}
        getScore={getScore}
        getError={getError}
      />
      {/* button to trigger the popup window */}
      <button onClick={()=>setButtonPopup(true)}>click to open popup window</button>
      
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />

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
                        currentPoint={currentPoint}
                        setCurrentPoint={setCurrentPoint}
                        setCurrentError={setCurrentError}
                        setScore={setScore} //testing
                        setError={setError}
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
                      {subItem.map((num, k) => (
                        <SquareBtnStyleWithInput
                          key={k}
                          id={num}
                          currentPoint={currentPoint}
                          setCurrentPoint={setCurrentPoint}
                          setCurrentError={setCurrentError}
                          setScore={setScore} //testing
                          setError={setError}
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

      {/* <Popup trigger={popupWindow} /> */}

      {/* store user's mistakes+time in firebase */}
      <button className="submitBtn" onClick={handleSubmit}>
        Submit Answer
      </button>
    </div>
  );
}
