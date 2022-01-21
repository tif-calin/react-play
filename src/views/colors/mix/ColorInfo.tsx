import React from 'react';
import { hex2hsl, hex2rgb } from '../../votevote/utils/colorConversion';

interface Props {
  hex: string;
};

const ColorInfo: React.FC<Props> = ({ hex }) => {
  const rgb = hex2rgb(hex);
  const hsl = hex2hsl(hex).map((n, i) => i ? Math.round(n * 100) / 100 : Math.round(n));

  return <>
    <span>{hex}</span>
    <span>rgb({rgb.join(', ')})</span>
    <span>hsl({hsl.join(', ')})</span>
  </>;
};

export default ColorInfo;
