import React from 'react';
import styled from 'styled-components';

interface Props {
  d: number | string;
  r: number | string;
};

const Container = styled.span`
  & > span {
    color: var(--oc-red-5);
    font-weight: 600;
  }

  & > span:first-child {
    color: var(--oc-blue-5);
  }
`;

const DvR: React.FC<Props> = ({ d, r }) => {
  return (
    <Container>
      <span>{d}D</span>-<span>{r}R</span>
    </Container>
  );
};

export default DvR;
