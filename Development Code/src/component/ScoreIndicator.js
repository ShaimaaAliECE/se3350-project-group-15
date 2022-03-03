//for level2 & level3
import React, { Component, useState, useEffect } from "react";
import ReactStoreIndicator from "react-score-indicator";
import { calculateScore, countMistakes } from "../js/WholeAnswerCheck";
import { makeStyles } from "@material-ui/core";
import BottomFeedback from "./BottomFeedback";

//a fancy way to style your component
const useStyles = makeStyles((theme) => ({
  // contacts: {
  //   paddingLeft: 10,
  //   paddingRight: 10,
  //   "&:hover": {
  //     width: 100,
  //     height: 100,
  //   },
  // },
}));

function ScoreIndicator(props) {
  const [sortedArray, setSortedArray] = useState([]); //sorted array after merge sort
  const [answerArray, setAnswerArray] = useState([]); //player's answer
  const [timeLeft, setTimeLeft] = useState(0);
  const [score, setScore] = useState(0);
  const [hideStoreIndicator, setHideStoreIndicator] = useState(true); //toggle StoreIndicator
  const [feedbackText, setFeedbackText] = useState("bottom feedback text"); //bottom feedback text
  const [hideFeedbackText, setHideFeedbackText] = useState(true); //toggle bottom feedback text
  const [goodFeedback, setGoodFeedback] = useState(true); //feedback text styling based on the score
  const [getScoreCalled, setGetScoreCalled] = useState(false); //check if getScore() is called yet
  const classes = useStyles(); //here useStyles classes is defined

  useEffect(() => {
    //pass these values from level2
    setSortedArray(props.sortedArray);
    setAnswerArray(props.answerArray);
    setTimeLeft(props.timeLeft);

    //change bottom feedback text only fater getScore() is called!
    if (getScoreCalled) {
      setHideFeedbackText(false);
      //if there is a wrong answer -> bottom feedback text should say 'Oops! There is an error in your answer. Please check again.'
      if (score != answerArray.length) {
        setFeedbackText(
          "Oops! There is an error in your answer. Please check again."
        );
        setGoodFeedback(false);
      } else {
        setFeedbackText("Congratulations! Your score is perfect!");
      }
    }
  });

  function getScore() {
    let calculatedScore = calculateScore(sortedArray, answerArray, timeLeft);
    setScore(calculatedScore);
    //toggle hideStoreIndicator
    setHideStoreIndicator(!hideStoreIndicator);
    setGetScoreCalled(true);
  }

  return (
    <div>
      {/*score indicator & show score indicator button */}
      <div className={classes.scoreIndicator}>
        <div hidden={hideStoreIndicator}>
          <ReactStoreIndicator
            value={score}
            maxValue={sortedArray.length + timeLeft}
          />
        </div>
        <button onClick={getScore} type="button" class="btn btn-success">
          {hideStoreIndicator ? "Show Score" : "Hide Score"}
        </button>
      </div>
      {/*bottom feedback text */}
      <div hidden={hideFeedbackText}>
        <div class="fixed-bottom d-flex justify-content-center">
          <BottomFeedback
            feedbackText={feedbackText}
            goodFeedback={goodFeedback}
          />
        </div>
      </div>
    </div>
  );
}

export default ScoreIndicator;
