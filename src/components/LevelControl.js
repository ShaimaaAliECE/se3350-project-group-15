import React from "react";
import Button from "./Button";
import QuarBtnError from "./SquarBtnError";
export default function LevelControl(props) {
  const [hasStarted, setHasStarted] = React.useState(props.hasStarted);
  const [score, setScore] = React.useState(0);
  const [error, setError] = React.useState(0);

  React.useEffect(() => {
    setScore(props.getScore()); //get score from level component
    setError(props.getError()); //get error from level component
  });

  const levelStart = () => {
    let generate = props.helper.generateNumberArray(10, 20);
    props.setCurrentQuestion(generate);
    props.setSummaryArray(props.helper.generateMap(generate));
    props.setCurrentStep(1);
    setHasStarted(true);
  };

  const levelRestart = () => {
    let generate = props.helper.generateNumberArray(10, 20);
    props.setCurrentQuestion(generate);
    props.setSummaryArray(props.helper.generateMap(generate));
    props.setCurrentStep(1);
    setHasStarted(true);

  };

  const pointIndicator = (currentLevel, currentPoint, currentError) => {
    if (currentLevel === 1) {
      return;
    } else {
        // //test the error Chen Wang
        // console.log(error);
        // console.log(score);
      return (
        <div className="statistics-area">
          <span>Points:</span>
          <span className="mistakes-counter">{score}</span>
          {/* the error here will be alway 0 because it will run only
          if there is a correct answer */}
          <span>Error:</span>
          <span className="mistakes-counter">{error}</span>
        </div>
      );
    }
  };

  return (
    <div className="LevelControl">
      <Button onClick={props.start} disabled={props.hasStarted}>
        Start
      </Button>
      <Button onClick={props.restart} disabled={!props.hasStarted}>
        Restart
      </Button>
      {pointIndicator(
        props.currentLevel,
        props.currentPoint,
        props.currentError,
      )}
      {/* <QuarBtnError error={1} /> */}
      
    </div>
  );
}
