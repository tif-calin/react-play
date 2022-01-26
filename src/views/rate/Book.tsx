import React from 'react';
import styled from 'styled-components';
import RateFieldv2 from './components/RateFieldv2';

const Container = styled.div`
  & > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    & > *:last-child {
      width: 100%;
    }
  }
`;

interface Props {
  book: { title: string, subtitle: string, authors: string[], year: number };
};

const dewey = [
  'Generalities',
  'Philosophy',
  'Religion',
  'Social Sciences',
  'Language',
  'Science and Math',
  'Technology',
  'Arts',
  'Literature',
  'Geography, History, and Biography',
];

const toPercent = (v: number, tot: number) => 
  100 * (Math.max(0, v) / tot) || 0
;

const Book: React.FC<Props> = () => {
  const [values, setValues] = React.useState<number[]>(new Array(dewey.length).fill(0));
  const total = values.reduce((a, b) => Math.max(0, b) + a);

  const handleChange = ({ target }: Event) => {
    const { value, name } = target as HTMLInputElement;
    setValues(vals => vals.map((v, i) => i === Number(name) ? +value : v));
  };

  return (
    <Container>
      {dewey.map((d, i) => (<div key={i}>
        <span>{toPercent(values[i], total).toFixed(1)}%</span>
        <input type="range" value={toPercent(values[i], total)} min={0} max={100} readOnly />
        <RateFieldv2 onChange={handleChange} i={i} label={d} />
      </div>))}
    </Container>
  );
};

export default Book;
