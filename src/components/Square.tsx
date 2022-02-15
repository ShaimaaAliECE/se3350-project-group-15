import { PropsWithChildren } from 'react';

interface ISquareProps {
  opacity?: boolean;
}

const Square = (props: PropsWithChildren<ISquareProps>) => {
  return (
    <div
      className={
        props.opacity ? 'square-container-opacity' : 'square-container'
      }
    >
      {props.children}
    </div>
  );
};

export default Square;
