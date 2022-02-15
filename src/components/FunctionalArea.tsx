import { ReactEventHandler, useState } from 'react';
import { Rfdd, RfddOption } from 'react-free-dropdown';

import Button from '@/components/Button';

const levelOptions = [
  {
    label: 'Custom',
    value: '0',
  },
  {
    label: 'Level 1',
    value: '1',
  },
  {
    label: 'Level 2',
    value: '2',
  },
  {
    label: 'Level 3',
    value: '3',
  },
];

interface IFunctionalAreaProps {
  hasStarted: boolean;
  onStart: ReactEventHandler<HTMLDivElement>;
  onRestart: ReactEventHandler<HTMLDivElement>;
}

const FunctionalArea = (props: IFunctionalAreaProps) => {
  const defaultLevel = levelOptions[1];
  const [value, setValue] = useState(defaultLevel.value);
  const [mistakes, setMistakes] = useState(0);

  return (
    <div className="functional-area">
      <div className="level-area">
        <span>Level: </span>
        <Rfdd onChange={setValue} value={defaultLevel.label}>
          {levelOptions.map((option) => (
            <RfddOption key={option.value} value={option.value}>
              {option.label}
            </RfddOption>
          ))}
        </Rfdd>
        <img src={require('@/assets/svg/info.svg')} alt="tip" />
      </div>
      <div className="action-area">
        <Button onClick={props.onStart}>Run</Button>
        <Button onClick={props.onRestart} disabled={!props.hasStarted}>
          Restart
        </Button>
      </div>
      <div className="statistics-area">
        <span>Mistakes:</span>
        <span className="mistakes-counter">{mistakes}</span>
      </div>
    </div>
  );
};

export default FunctionalArea;
