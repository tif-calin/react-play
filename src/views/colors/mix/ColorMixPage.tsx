import React from 'react';
import styled from 'styled-components';
import PageTitle from '../../../components/layout/PageTitle';
import { hex2hsl, hex2rgb, rgb2hex } from '../../votevote/utils/colorConversion';
import ColorInfo from './ColorInfo';
import { ArithmeticHSLAverage, ArithmeticRGBAverage, GeometricRGBAverage, hsl2hex } from './utils';

interface Props {};

const Page = styled.div`
  font-family: "Inconsolata", monospace;

  & > div {
    border: 1px solid black;
    border-radius: 0.25rem;
    margin: 0.5rem 0;
    padding: 1rem;
  }
`;

const WrapperV = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperH = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ColorMixPage: React.FC<Props> = () => {
  const [color1, setColor1] = React.useState('#000000');
  const [color2, setColor2] = React.useState('#000000');

  const arithmeticRGB = rgb2hex(ArithmeticRGBAverage([hex2rgb(color1), hex2rgb(color2)]));
  const geometricRGB = rgb2hex(GeometricRGBAverage([hex2rgb(color1), hex2rgb(color2)]));
  const arithmeticHSL = hsl2hex(ArithmeticHSLAverage([hex2hsl(color1, true), hex2hsl(color2, true)]));

  return (
    <Page>
      <PageTitle>Color Mix</PageTitle>
      <WrapperV>
        <span>Input two colors:</span>
        <WrapperH>
          <input onChange={e => setColor1(e.target.value)} type="color" />
          <ColorInfo hex={color1} />
        </WrapperH>
        <WrapperH>
          <input onChange={e => setColor2(e.target.value)} type="color" />
          <ColorInfo hex={color2} />
        </WrapperH>
      </WrapperV>
      <div>
        <span>Output:</span>
        <WrapperH>
          Arithmetic RGB average gives us:
          <input type="color" value={arithmeticRGB} disabled />
          <ColorInfo hex={arithmeticRGB} />
        </WrapperH>
        <WrapperH>
          Geometric RGB average gives us:
          <input type="color" value={geometricRGB} disabled />
          <ColorInfo hex={geometricRGB} />
        </WrapperH>
        <WrapperH>
          Arithmetic HSL average gives us:
          <input type="color" value={arithmeticHSL} disabled />
          <ColorInfo hex={arithmeticHSL} />
        </WrapperH>
      </div>
    </Page>
  );
};

export default ColorMixPage;
