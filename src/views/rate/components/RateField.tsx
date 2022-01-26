import React from 'react';
import styled from 'styled-components';
import Slider from '@mui/material/Slider';

const marks = [
  { value: -2, label: 'worst' },
  { value: -1, label: 'below average' },
  { value: 0, label: 'average' },
  { value: 1, label: 'above average' },
  { value: 2, label: 'best' }
];

const SliderContainer = styled.fieldset`

  display: flex;
  flex-direction: column;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.25rem;
  box-shadow: var(--shadow-inset);

  & > * {
    font-family: 'Inconsolata', monospace;
  }

  & > *:first-child {
    font-weight: 700;
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
};

const RateField:React.FC<Props> = ({ label }) => {
  return (
    <div className="RateField">
      <SliderContainer>
        <span>{label}</span>
        <Slider
          sx={sx}
          defaultValue={0} min={-2} max={2} step={0.01}
          track={false}
          marks={marks}
          valueLabelDisplay="auto"
        />
      </SliderContainer>
    </div>
  );
};

export default RateField;
