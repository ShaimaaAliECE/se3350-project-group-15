import React, { Component, useState, useEffect } from "react";
import ReactStoreIndicator from "react-score-indicator";
import { calculateScore, countMistakes } from "../js/Utility";
import { makeStyles } from "@material-ui/core";

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
  const [sortedArray, setSortedArray] = useState([]);
  const [answerArray, setAnswerArray] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [score, setScore] = useState(0);
  const [hideStoreIndicator, setHideStoreIndicator] = useState(true);
  const classes = useStyles(); //here classes is defined

  useEffect(() => {
    //pass these values from level2
    setSortedArray(props.sortedArray);
    setAnswerArray(props.answerArray);
    setTimeLeft(props.timeLeft);
  });

  function getScore() {
    let calculatedScore = calculateScore(sortedArray, answerArray, timeLeft);
    setScore(calculatedScore);
    //toggle hideStoreIndicator
    setHideStoreIndicator(!hideStoreIndicator);
  }

  return (
    <div className={classes.scoreIndicator}>
      <div hidden={hideStoreIndicator}>
        <ReactStoreIndicator value={score} maxValue={sortedArray.length} />
      </div>
      <button onClick={getScore} type="button" class="btn btn-success">
        {hideStoreIndicator ? "Show Score" : "Hide Score"}
      </button>
    </div>
  );
}

export default ScoreIndicator;
