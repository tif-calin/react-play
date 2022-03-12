import React from 'react';
import styled from 'styled-components';
import Island from '../Island';

interface Props {
  aVal: number;
  setAVal: (aVal: number) => void;
  bVal: number;
  setBVal: (bVal: number) => void;
};

const OddsExample = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  & > *:nth-child(2) {
    flex: 1;
    border: 1px solid #273f3f7f;
  }

  .party {
    color: var(--oc-blue-5);
  }

  .message {
    font-weight: 200;
    font-size: 0.8rem;
  }

  .odds {
    font-weight: 400;
  }
`;

const OddsDisplay = styled.div`
  padding: 0.5rem;
  border-radius: 0.25rem;
  box-shadow: var(--shadow-inset-border);
`;

const ControlsDisplay = styled.form`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;

  & > * {
    display: flex;
    gap: 0.5rem;
    border: none;
    align-items: center;
    padding: 0;
    margin: 0;
  }
`;

const inputs = [
  0.505, 0.51, 0.515, 0.52, 0.525, 0.55, 0.6
];

const activation = (x: number, A = 16, B = 400) => {
  const C = A + A*B*Math.pow(0.5-x, 2);

  return 1 / (1 + Math.exp(-C * (x-0.5)));
};

const ActivatorFunctionSection: React.FC<Props> = ({
  aVal = 16, setAVal,
  bVal = 400, setBVal
}) => {

  return (
    <Island
      title="Activation function"
      defaultOpen={false}
    >
      <p>
        In order to convert something like a district being +3R to an actual chance that Republicans/Democrats would win an election there, we need an "activation function". One such function commonly used in aritificial neural networks is the Sigmoid function.
      </p>
      <p>Here I'm using a variation of the Sigmoid I pulled out my ass. More details to come in a later update.</p>
      <ControlsDisplay>
        <fieldset>
          <label>A:</label>
          <input
            type="number"
            value={aVal}
            onChange={(e) => setAVal(Number(e.target.value))}
          />
        </fieldset>
        <fieldset>
          <label>B:</label>
          <input
            type="number"
            name="b"
            value={bVal}
            onChange={(e) => setBVal(Number(e.target.value))}
          />
        </fieldset>
      </ControlsDisplay>
      <OddsDisplay>
        {inputs.map((input, index) => {
          const lean = Math.round((2 * input - 1) * 100);
          const odds = Math.round(activation(input, aVal, bVal) * 100);

          return (
            <OddsExample key={index}>
              <span>+{lean}<span className="party">D</span></span>
              <div/>
              <span className="message"><span className="party">Democrats</span> have a <span className="odds">{odds}%</span> chance of winning</span>
            </OddsExample>
          );
        })}
      </OddsDisplay>
    </Island>
  );
};

export default ActivatorFunctionSection;
