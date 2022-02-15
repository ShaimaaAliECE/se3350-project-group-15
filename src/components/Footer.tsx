import { MouseEventHandler } from 'react';

interface IFooterProps {
  canPrev: boolean;
  canNext: boolean;
  onPrevStep?: MouseEventHandler<HTMLDivElement>;
  onNextStep?: MouseEventHandler<HTMLDivElement>;
}

const Footer = (props: IFooterProps) => {
  return (
    <div className="footer-container">
      <div className="footer-body">
        <div className="footer-navigator">
          <div
            className={`footer-navigator-button ${
              props.canPrev ? '' : 'disabled'
            }`}
            onClick={props.canPrev ? props?.onPrevStep : () => {}}
          >
            <img
              src={require('@/assets/svg/left-arrow.svg')}
              alt="left-arrow"
            />
          </div>
          <div
            className={`footer-navigator-button ${
              props.canNext ? '' : 'disabled'
            }`}
            onClick={props.canNext ? props?.onNextStep : () => {}}
          >
            <img
              src={require('@/assets/svg/right-arrow.svg')}
              alt="right-arrow"
            />
          </div>
        </div>
        <div className="footer-tips">
          <p className="footer-tips-title">Steps:</p>
          <div className="footer-tips-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
