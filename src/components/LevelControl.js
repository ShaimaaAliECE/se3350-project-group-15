import React from 'react';
import Button from './Button';

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

    return (
        <div className="LevelControl">
            <Button onClick={props.start} disabled={props.hasStarted}>Run</Button>
            <Button onClick={props.restart} disabled={!props.hasStarted}>
                Restart
            </Button>
        </div>
    )
}