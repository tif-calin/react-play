import { Field, FormikProps, useFormikContext } from 'formik';
import React from 'react';
import styled from 'styled-components';

interface Props {
  inputName: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > * {
    flex: 1;

    &:last-child {
      text-align: right;
    }
  }
`;

const SliderField: React.FC<Props> = ({
  inputName, ...props 
}) => {
  const { 
    values, 
    setFieldValue
  }: { 
    values: { [key: string]: number },
    [key: string]: any
  } = useFormikContext();

  const handleChange = React.useCallback((oldVal, newVal) => {
    // let sum1 = 1 - oldVal || 0;
    let sum1 = Object.values(values).reduce((acc, val) => acc + val, 0) - oldVal;
    let sum2 = 1 - newVal || 0;
    
    Object.keys(values).filter(k => k !== inputName).forEach(k => {
      const propVal = (values[k] / sum1) * sum2 || 0;
      setFieldValue(k, propVal);
    });
  }, [values]);

  return (
    <Field
      type="range"
      name={inputName}
      {...props}
    >
      {(props: FormikProps<any>) => {
        // console.log(field);
        // console.log(form);
        const { field, form } = props as any;
        return (
          <Container>
            <label>{field.name}</label>
            <input 
              {...field} 
              type="range" 
              min="0" max="1" step="0.01" 
              onChange={(e) => {
                const oldVal = field.value;
                form.handleChange(e);
                handleChange(oldVal, Number(e.target.value));
              }} 
            />
            <span>{`${Math.round(field.value * 100)}%`}</span>
          </Container>
        );
      }}
    </Field>
  );
};

export default React.memo(SliderField);
