import React from 'react';
import Helper from '../Helper/Helper';
import SquareBtnStyle from '../components/SquareBtnStyle';
import SquareBtnStyleWithInput from '../components/SquareBtnStyleWithInput';
import LevelControl from '../components/LevelControl';
import InstructionPanel from '../components/InstructionPanel';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../Authentication/firebase';
import { useAlert } from 'react-alert';
import Timer from '../components/Timer';
import ReactLoading from 'react-loading';
import KickOutTimer from '../components/KickOutTimer';

const helper = new Helper();

export default function Level5() {
  const currentLevel = 5;
  const alert = useAlert(); //Henry: fancy alert
  const [currentPoint, setCurrentPoint] = React.useState(0);
  const [currentQuestion, setCurrentQuestion] = React.useState([]);
  const [summaryArray, setSummaryArray] = React.useState([]);
  const [hasStarted, setHasStarted] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const displayArray = summaryArray.slice(0, currentStep - 1);
  const [time, setTime] = React.useState(0); //time from Timer component
  const [isLoading, setIsLoading] = React.useState(false);

  const levelStart = () => {
    let generate = helper.generateNumberArray(50, 100);
    setCurrentQuestion(generate);
    setSummaryArray(helper.generateMap(JSON.parse(JSON.stringify(generate)), localStorage.getItem("selectedAlgorithm")));
    setCurrentStep(1);
    setHasStarted(true);
    setCurrentPoint(50);
  };

  const levelRestart = () => {
    let generate = helper.generateNumberArray(50, 100);
    setCurrentQuestion(generate);
    setSummaryArray(helper.generateMap(JSON.parse(JSON.stringify(generate)), localStorage.getItem("selectedAlgorithm")));
    setCurrentStep(1);
    setHasStarted(true);
    setCurrentPoint(50);
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCurrentPoint(50);
    }
  };

  const nextStep = () => {
    if (currentStep < summaryArray.length + 1) {
      setCurrentStep(currentStep + 1);
      setCurrentPoint(0);
    }
  };

  const getScore = () => {
    return score;
  };

  const getTime = (time) => {
    setTime(time);
  };

  //handle submit answer
  async function handleSubmit(e) {
    if (localStorage.getItem("userEmail") !== null) {
      setIsLoading(true);
    }
    let timeSpent = `${Math.floor((time / 60000) % 60)} minutes ${Math.floor((time / 1000) % 60)} seconds`;
    let userEmail = localStorage.getItem("userEmail");
    let currentdate = new Date();
    let datetime = `${currentdate.getDate()}/${currentdate.getMonth() + 1}/${currentdate.getFullYear()} - ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
    //check if user is signed in
    if (userEmail != null) {
      const usersCollectionRef = collection(db, "gameRecords");
      await addDoc(usersCollectionRef, {
        email: userEmail,
        score: score,
        timeSpent: timeSpent,
        dateTime: datetime,
        level: 'Level 5'
      }).then(() => {
        setIsLoading(false);
      });
      alert.show("Submitted record successfully", { timeout: 2500 });
    } else {
      alert.error("please sign in first!", { timeout: 1500 });
    }
  }

  return (
    <div className="Level5">
      <KickOutTimer />
      <h1>Level 5</h1>
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
            return (
              <SquareBtnStyle key={index}>
                {item}
              </SquareBtnStyle>
            )
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
                        setScore={setScore}
                      ></SquareBtnStyleWithInput>
                    )
                  })}
                </div>
              )
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
                          setScore={setScore}
                        ></SquareBtnStyleWithInput>
                      ))}
                      <SquareBtnStyle opacity />
                    </div>
                  ))}
                </div>
              )
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
      <button className='submitBtn' onClick={handleSubmit}>Submit Answer</button>
      <ReactLoading type={"spin"} color="#52b788" className="submit-loading" hidden={!isLoading} />
    </div>
  )
}