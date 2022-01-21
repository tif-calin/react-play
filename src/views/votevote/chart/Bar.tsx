import React from 'react';
import { useSpring, animated } from 'react-spring';

interface Props {
  [key: string]: any;
};

const Bar: React.FC<Props> = (props) => {
  const style = useSpring({
    config: { duration: 400 },
    ...props
  });

  return (<>
    <animated.rect {...style}/>
  </>);
};

export default Bar;
