import { PropsWithChildren } from 'react';

interface ISquareProps {
  opacity?: boolean;
  color?: string;
  back?: string;
}

const Square = (props: PropsWithChildren<ISquareProps>) => {
  return (
    <div
      className={
        props.opacity ? 'square-container-opacity' : 'square-container'
      }
      style={{backgroundColor: props.back , color: props.color}}
    >
      {props.children}
    </div>
  );
};

export default Square;
