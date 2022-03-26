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

const helper = new Helper();

export default function Level3() {
  const alert = useAlert(); //Henry: fancy alert
  const currentLevel = 3;
  const [currentPoint, setCurrentPoint] = React.useState(0);
  const [currentQuestion, setCurrentQuestion] = React.useState([]);
  const [summaryArray, setSummaryArray] = React.useState([]);
  const [hasStarted, setHasStarted] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [NumofInputBtn, setNumofInputBtn] = React.useState(0); //NumofInputBtn = displayArray.length - currentQuestion.length
  const displayArray = summaryArray.slice(0, currentStep - 1);
  const [time, setTime] = React.useState(0); //time from Timer component
  const [score,setScore] =  React.useState(0);//testing

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

  const getTime = (time) => {
    setTime(time);
  };

  const getScore = () => {
    return score;
  }

  //handle submit answer
  async function handleSubmit(e) {
    // e.preventDefault();
    let timeSpent = `${Math.floor((time / 60000) %60)} minutes ${Math.floor((time / 1000) %60)} seconds`;
    let userEmail = localStorage.getItem("userEmail");
    let currentdate = new Date();
    let datetime = ` ${currentdate.getDate()} /
                 ${currentdate.getMonth() + 1} /
                 ${currentdate.getFullYear()} -
                 ${currentdate.getHours()} :
                 ${currentdate.getMinutes()} : 
                 ${currentdate.getSeconds()}`;
    //check if user is signed in
    if (userEmail != null) {
      const usersCollectionRef = collection(db, "gameRecords");
      await addDoc(usersCollectionRef, {
        email: userEmail,
        score: score,
        timeSpent: timeSpent,
        dateTime: datetime,
        level: 'Level 3'
      });
      alert.show("Submitted record successfully", { timeout: 1500 });
    } else {
      alert.error("please sign in first!", { timeout: 1500 });
    }
  }


  return (
    <div className="Level1">
      <h1>Level 3</h1>
      <Timer getTime={getTime} />
      <LevelControl
        start={levelStart}
        restart={levelRestart}
        hasStarted={hasStarted}
        getScore={getScore}
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
                        currentPoint={currentPoint}
                        setCurrentPoint={setCurrentPoint}
                        setScore={setScore}//testing
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
                          setScore={setScore}//testing
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

      {/* store user's mistakes+time in firebase */}
      <button onClick={handleSubmit}>Submit Answer</button>
    </div>
  );
}
