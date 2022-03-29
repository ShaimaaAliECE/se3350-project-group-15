import React from "react";
import Helper from "../Helper/Helper";
import { Button, Col } from "react-bootstrap";
import { useAlert } from "react-alert";
import ReactScoreIndicator from "react-score-indicator";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Authentication/firebase";
import SquareBtnStyle from "../components/SquareBtnStyle";
import InstructionPanel from "../components/InstructionPanel";
import SquareBtnStyleWithInput from "../components/SquareBtnStyleWithInput";
import { Summarize } from "@mui/icons-material";

const helper = new Helper();

export default function CustomLevel() {
  const currentLevel = 4;
  const alert = useAlert();
  const [currentPoint, setCurrentPoint] = React.useState(0);
  const [currentQuestion, setCurrentQuestion] = React.useState([]);
  const [summaryArray, setSummaryArray] = React.useState([]);
  const [hasStarted, setHasStarted] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [curentArraySize, setCurrentArraySize] = React.useState(5);
  const [currentArrayValues, setCurrentArrayValues] = React.useState([]);
  const [currentArrayValuesStr, setCurrentArrayValuesStr] = React.useState("");
  const [runDisabled, setRunDisabled] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [submitEnabled, setSubmitEnabled] = React.useState(false);
  const [time, setTime] = React.useState(0); //time from Timer component
  const displayArray = summaryArray.slice(0, currentStep - 1);

  const levelStart = () => {
    let generate = [];
    if (
      currentArrayValues.length > 0 &&
      currentArrayValues.length === curentArraySize
    ) {
      generate = currentArrayValues;
    } else {
      generate = helper.generateNumberArray(curentArraySize, 999);
    }
    setCurrentQuestion(generate);
    setSummaryArray(helper.generateMap(generate));
    setCurrentStep(1);
    setHasStarted(true);
    setCurrentPoint(curentArraySize);
  };

  const levelReset = () => {
    setCurrentArrayValues([]);
    setCurrentArrayValuesStr("");
    setCurrentStep(0);
    setHasStarted(true);
    setCurrentQuestion([]);
    setSummaryArray(helper.generateMap([]));
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCurrentPoint(curentArraySize);
    }
  };

  const nextStep = () => {
    if (currentStep < summaryArray.length + 1) {
      setCurrentStep(currentStep + 1);
      setCurrentPoint(0);
    }
  };

  const selectArraySize = (val) => {
    const tempSize = Number(val.target.value);
    setCurrentArraySize(tempSize);
  };

  const blurArrayValues = (val) => {
    const tempArrVals = val.target.value;
    const reg =
      /[(\[)(\])(\【)(\】)(\，)(\。)(\ )(\~)(\!)(\@)(\#) (\$)(\%)(\^)(\&)(\*)(\-)(\_)(\+)(\=)(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/) (\)(\?)(\)]+/;
    const tempArr = tempArrVals
      .split(reg)
      .filter((ele) => !!ele && !isNaN(Number(ele)))
      .map((item) => Number(item));
    const exceedFlag = tempArr.some((element) => element > 999);
    if (
      tempArr.length !== 0 &&
      (exceedFlag || tempArr.length < 5 || tempArr.length > 8)
    ) {
      alert.error("Please enter 5 to 8 positive integers between 0 and 999", {
        timeout: 3000,
      });
      setRunDisabled(true);
      return;
    }
    if (tempArr.length !== curentArraySize) {
      setCurrentArraySize(tempArr.length);
    }
    setRunDisabled(false);
    setCurrentArrayValues(tempArr);
  };

  const changeArrayValues = (val) => {
    setCurrentArrayValuesStr(val.target.value);
  };

  //maybe be when user finishes the task, the system will automatically save player's game record (time + mistakes)
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
        level: "Custom Level",
      });
      alert.show("Submitted record successfully", { timeout: 1500 });
    } else {
      alert.error("please sign in first!", { timeout: 1500 });
    }
  }

  return (
    <div className="CustomLevel">
      <h1>Custom Level</h1>
      <div className="d-flex align-items-center justify-content-center">
        <div className="custom-level-inputs-box">
          <div className="input-title">INPUTS</div>
          <div className="custom-level-inputs-form">
            <form className="w-100">
              <label
                className="w-100 d-flex align-items-center justify-content-center"
                style={{ marginBottom: "16px" }}
              >
                <Col sm={3} className="text-align-left">
                  Array size:
                </Col>
                <Col sm={8} className="text-align-left">
                  <select
                    className="w-50"
                    style={{
                      border: "1px solid #e5e7e8",
                      height: "38px",
                      borderRadius: "3px",
                    }}
                    value={curentArraySize}
                    onChange={selectArraySize}
                  >
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </Col>
              </label>
              <label className="w-100 d-flex align-items-center justify-content-center">
                <Col sm={3} className="text-align-left">
                  Array Values (optional):
                </Col>
                <Col sm={8}>
                  <input
                    type="text"
                    value={currentArrayValuesStr}
                    onChange={changeArrayValues}
                    onBlur={blurArrayValues}
                    className="w-100"
                    style={{
                      border: "1px solid #e5e7e8",
                      height: "38px",
                      borderRadius: "3px",
                    }}
                  />
                </Col>
              </label>
            </form>
            <div
              className="form-group custom-level-form"
              style={{ marginTop: "16px" }}
            >
              <label class="col-sm-3"></label>
              <div class="col-sm-8 text-align-left">
                <Button
                  style={{ marginRight: "8px" }}
                  onClick={levelStart}
                  disabled={runDisabled}
                >
                  Run
                </Button>
                <Button
                  onClick={levelReset}
                  class="btn btn-default"
                  style={{ color: "#0d6efd", backgroundColor: "#FFFFFF" }}
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                        setScore={setScore} //testing
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
                          setScore={setScore} //testing
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

      {/* store user score/time in firebase function testing */}
      <button
        className="submitBtn"
        onClick={handleSubmit}
        hidden={submitEnabled}
      >
        Submit Answer
      </button>
      {/* show player score */}
      {/* <ReactScoreIndicator
        value={34}
        maxValue={100}
      /> */}
    </div>
  );
}
