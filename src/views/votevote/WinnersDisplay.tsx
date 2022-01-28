import React from 'react';
import styled from 'styled-components';
import colors from '../../data/colors';
import type { ColorName } from '.';

const ResultsDisplay = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  gap: 0.5rem;
  
  box-shadow: var(--shadow-inset), inset 0 0 3px hsl(var(--shadow-color));
  padding: 0.5rem;
  border-radius: 0.25rem;

  & > li {
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.25rem;
    row-gap: 0.15rem;
    line-height: 1;
  }
`;

const ResultItem = styled.div`
  --color: ${props => {
    return colors[props.color as ColorName]
  }};
  display: flex;
  place-items: center;
  place-content: center;

  &:hover {
    border-radius: 0.15rem;
    padding: 0 0.15rem;
    background: var(--color);

    & > span { color: black; }
  }

  & > span {
    font-size: 0.8rem;
    font-weight: 900;
    padding: 0;
    color: var(--color);

    // color: transparent;
    // background-color: var(--color);
    // background-clip: text;
    // -webkit-background-clip: text;
  }
`;

interface Props {
  results: { [method: string]: string[] };
};

const WinnersDisplay: React.FC<Props> = ({ results }) => {
  return (
    <ResultsDisplay>
      {Object.entries(results).map(([name, winners]) => (
          <li key={name}>
            {name}: {winners?.map((w, i) => (
              <ResultItem key={w} color={w}>
                <span key={i}>{w}</span>
              </ResultItem>
            ))}
          </li>
        ))}
    </ResultsDisplay>
  );
};

const MemoizedWinnersDisplay = React.memo(WinnersDisplay);

export default WinnersDisplay;
export { MemoizedWinnersDisplay };
