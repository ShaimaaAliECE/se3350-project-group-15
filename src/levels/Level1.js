import React from 'react';
import Helper from '../Helper/Helper';
import SquareBtnStyle from '../components/SquareBtnStyle';
import LevelControl from '../components/LevelControl';
import InstructionPanel from '../components/InstructionPanel';
import KickOutTimer from '../components/KickOutTimer';

const helper = new Helper();

export default function Level1() {
    const currentLevel = 1;
    const [currentQuestion, setCurrentQuestion] = React.useState([]);
    const [summaryArray, setSummaryArray] = React.useState([]);
    const [hasStarted, setHasStarted] = React.useState(false);
    const [currentStep, setCurrentStep] = React.useState(0);
    const displayArray = summaryArray.slice(0, (currentStep) - 1);

    const levelStart = () => {
        let generate = helper.generateNumberArray(10, 20)
        setCurrentQuestion(generate);
        setSummaryArray(helper.generateMap(generate));
        setCurrentStep(1);
        setHasStarted(true);
    };

    const levelRestart = () => {
        let generate = helper.generateNumberArray(10, 20)
        setCurrentQuestion(generate);
        setSummaryArray(helper.generateMap(generate));
        setCurrentStep(1);
        setHasStarted(true);
    };

    const previousStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const nextStep = () => {
        if (currentStep < summaryArray.length + 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const getScore = () => {
        return '';
    };

    return (
        <div className="Level1">
            <KickOutTimer />
            <h1>Level 1</h1>
            <LevelControl
                start={levelStart}
                restart={levelRestart}
                hasStarted={hasStarted}
                currentLevel={currentLevel}
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
                                            <SquareBtnStyle key={index}>
                                                {item}
                                            </SquareBtnStyle>
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
                                                <SquareBtnStyle
                                                    key={k}>
                                                    {num}
                                                </SquareBtnStyle>
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
                    currentStep < summaryArray.length + 1
                }
                onPrevStep={previousStep}
                onNextStep={nextStep}
            />
        </div>
    )
}