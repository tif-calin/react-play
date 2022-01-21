import React from 'react';
import { useSpring, animated } from 'react-spring';

interface Props {
  [key: string]: any;
};

const Bar: React.FC<Props> = ({ y, height, ...props }) => {
  const style = useSpring({
    config: { duration: 400 },
    y,
    height
  });

  return (<>
    <animated.rect 
      {...style} 
      {...props}
      stroke="black"
      strokeWidth={1}
    />
  </>);
};

export default Bar;
