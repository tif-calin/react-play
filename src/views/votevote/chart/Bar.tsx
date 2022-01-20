import React from 'react';
import { useSpring, animated } from 'react-spring';

interface Props {
  [key: string]: any;
};

const Bar: React.FC<Props> = (props) => {
  console.log(props);

  const style = useSpring({
    config: { duration: 500 },
    ...props
  });

  return (<>
    <animated.rect {...style}/>
  </>);
};

export default Bar;