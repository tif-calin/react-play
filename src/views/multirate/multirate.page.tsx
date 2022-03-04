import { Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import PageTitle from '../../components/layout/PageTitle';
import SliderField from './SliderField';

interface Props {};

const Container = styled.div`
  & > h1 {
    width: 100%;
    text-align: center;
  }
`;

const Page = styled.div`
  --shadow-color: 0deg 0% 80%;
  --shadow:
    0 0 2px hsl(var(--shadow-color) / 0.25),
    0.3px 0.5px 0.5px hsl(var(--shadow-color) / 0.24),
    0.7px 1.1px 1.2px -0.5px hsl(var(--shadow-color) / 0.22),
    1.3px 1.9px 2.2px -1.1px hsl(var(--shadow-color) / 0.2),
    2.3px 3.4px 3.8px -1.6px hsl(var(--shadow-color) / 0.18),
    4px 5.9px 6.7px -2.1px hsl(var(--shadow-color) / 0.16),
    6.7px 9.9px 11.2px -2.7px hsl(var(--shadow-color) / 0.14),
    10.7px 15.7px 17.8px -3.2px hsl(var(--shadow-color) / 0.12),
    16.3px 23.9px 27.1px -3.7px hsl(var(--shadow-color) / 0.1)
  ;
  --shadow-border: var(--shadow), 0 0 3px hsl(var(--shadow-color));

  --shadow-inset:
    inset 0 0 2px hsl(var(--shadow-color) / 0.25),
    inset 0.3px 0.5px 0.5px hsl(var(--shadow-color) / 0.24),
    inset 0.7px 1.1px 1.2px -0.5px hsl(var(--shadow-color) / 0.22),
    inset 1.3px 1.9px 2.2px -1.1px hsl(var(--shadow-color) / 0.2),
    inset 2.3px 3.4px 3.8px -1.6px hsl(var(--shadow-color) / 0.18),
    inset 4px 5.9px 6.7px -2.1px hsl(var(--shadow-color) / 0.16),
    inset 6.7px 9.9px 11.2px -2.7px hsl(var(--shadow-color) / 0.14),
    inset 10.7px 15.7px 17.8px -3.2px hsl(var(--shadow-color) / 0.12),
    inset 0 0 3px hsl(var(--shadow-color))
  ;
  
  box-shadow: var(--shadow-border);
  padding: 2.5rem;
  padding-top: 1rem;
  border-bottom: 3rem;
  accent-color: var(--oc-pink-3);
  border-radius: 0.15rem;

  & > form {
    display: flex;
    flex-direction: column;
  }

  & h2 {
    line-height: 1.2;
    font-weight: 600;
    width: 100%;
    margin: 0;

    & + .subheading {
      line-height: 1.2;
      margin: 0;
      margin-bottom: 1rem;
      font-weight: 200;
      opacity: 0.8;
    }
  }
`;

// woah look at this shit: https://css-tricks.com/lets-make-a-multi-thumb-slider-that-calculates-the-width-between-thumbs/

const MultiRatePage: React.FC<Props> = () => {
  return (
    <Container>
      <PageTitle>Multirate</PageTitle>
      <Page>
        <Formik
          initialValues={{
            mushrooms: 0.5,
            pepperoni: 0.25,
            onions: 0.1,
            pineapple: 0.1,
            olives: 0.05,
            anchovies: 0,
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            console.log(values);
          }}
        >
          <Form>
            <h2>How much surface area of a pizza should a topping take?</h2>
            <span className="subheading">Drag the sliders to give a proportional rating.</span>
            {['mushrooms', 'pepperoni', 'onions', 'pineapple', 'olives', 'anchovies'].map((name, i) => (
              <SliderField
                inputName={name}
                key={i}
              />
            ))}
          </Form>
        </Formik>
      </Page>
    </Container>
  );
};

export default React.memo(MultiRatePage);
