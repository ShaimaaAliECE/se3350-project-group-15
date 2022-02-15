import { PropsWithChildren } from 'react';

const Content = (props: PropsWithChildren<any>) => {
  return (
    <div className="content-container">
      <div className="content-body">{props.children}</div>
    </div>
  );
};

export default Content;
