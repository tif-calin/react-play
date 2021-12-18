import React from 'react';
import Slider from '@mui/material/Slider';
// import styles from './RateField.module.css';

// console.log(styles);

const marks = [
  { value: -2, label: 'worst' },
  { value: -1, label: 'below average' },
  { value: 0, label: 'average' },
  { value: 1, label: 'above average' },
  { value: 2, label: 'best' }
];

const RateField = () => {
  return (
    <div className="RateField">
      <span>funny</span>
      <Slider 
        defaultValue={0} min={-2} max={2} step={0.01}
        track={false}
        marks={marks}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default RateField;
