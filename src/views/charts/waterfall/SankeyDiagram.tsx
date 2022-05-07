import React from 'react';
import styled from 'styled-components';
import useChartDimensions from '../../../hooks/useChartDimensions';

interface Props {};

const Container = styled.div`
  box-shadow: var(--shadow-inset-border);
  background-color: #f8f9fa;

  & > svg {
    min-height: 100px;
  }
`;

const SankeyDiagram = (_: Props): React.ReactElement => {
  const [ref, { width, height }] = useChartDimensions();

  return (
    <Container
      ref={ref}
    >
      <svg width={width} height={height}>
        where's sankey
      </svg>
    </Container>
  );
};

export default SankeyDiagram;
