import React from 'react';
import styled from 'styled-components';
import Slider from '@mui/material/Slider';

const marks = [
  { value: -2, label: 'definitely not' },
  { value: -1, label: 'nope' },
  { value: 0, label: 'not really' },
  { value: 1, label: 'kinda' },
  { value: 2, label: 'perfect' }
];

const SliderContainer = styled.fieldset`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  box-shadow: var(--shadow-inset);
  & > * { font-family: 'Inconsolata', monospace; }

  & > *:first-child {
    font-weight: 700;
    min-width: 12rem;
    width: 33%;
  }

  & > *:last-child {
    margin: 0.5rem 1.5rem 1.5rem 2rem;
  }
`;

const sx = {
  color: 'var(--pink)',

  '& .MuiSlider-mark': {
    color: '#222',
    height: '1rem',
  },

  '& .MuiSlider-markLabel': {
    opacity: 0.5,
    transition: 'opacity 0.1s ease-in-out',
  },
  '&:hover .MuiSlider-markLabel': {
    opacity: 1,
  },

  '& .MuiSlider-thumb': {
    borderRadius: '0.15rem',
    border: '2px solid #222',
    transition: 'all 150ms',
    transform: 'translate(-50%, -50%) rotate(45deg)',

    '&:hover': {
      transform: 'translate(-50%, -50%)',
    },

    '&:hover, &.Mui-focusVisible': {
      boxShadow: '0 0 0.5rem hsl(var(--shadow-color))',
    },

    '&.Mui-active': {
      boxShadow: '0 0 2rem hsl(var(--shadow-color))',
    },
  }
};

interface Props {
  label: string;
  [key: string]: any;
};

const RateField:React.FC<Props> = ({ label, i, ...props }) => {

  return (
    <SliderContainer>
      <span>{label}</span>
      <Slider
        name={`${i}`}
        sx={sx}
        defaultValue={0} min={-2} max={2} step={0.1}
        marks={marks}
        valueLabelDisplay="auto"
        {...props}
      />
    </SliderContainer>
  );
};

export default RateField;
