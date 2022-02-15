import { MouseEventHandler, PropsWithChildren } from 'react';

interface IButtonProps {
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Button = (props: PropsWithChildren<IButtonProps>) => {
  return (
    <div
      className={`rc-button ${props.disabled ? 'disabled' : ''}`}
      onClick={props.disabled ? () => {} : props.onClick}
    >
      <span>{props.children}</span>
    </div>
  );
};

export default Button;
