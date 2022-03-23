import React from 'react';
import Button from './Button';
import QuarBtnError from "./SquarBtnError";
export default function LevelControl(props) {
    const [hasStarted, setHasStarted] = React.useState(props.hasStarted);

    const levelStart = () => {
        let generate = props.helper.generateNumberArray(10, 20)
        props.setCurrentQuestion(generate);
        props.setSummaryArray(props.helper.generateMap(generate));
        props.setCurrentStep(1);
        setHasStarted(true);
    }

    const levelRestart = () => {
        let generate = props.helper.generateNumberArray(10, 20)
        props.setCurrentQuestion(generate);
        props.setSummaryArray(props.helper.generateMap(generate));
        props.setCurrentStep(1);
        setHasStarted(true);
    }

    const pointIndicator = (currentLevel, currentPoint) => {
        if (currentLevel === 1) {
            return
        } else {
            return (
                <div className="statistics-area">
                    <span>Points:</span>
                    <span className="mistakes-counter">{currentPoint}</span>
                </div>
            )
        }
    }

    

   

    return (
        <div className="LevelControl">
            <Button onClick={props.start} disabled={props.hasStarted}>Start</Button>
            <Button onClick={props.restart} disabled={!props.hasStarted}>
                Restart
            </Button>
            {pointIndicator(props.currentLevel, props.currentPoint)}
        <QuarBtnError error={1} />
        </div>
    )
}