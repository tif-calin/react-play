import React from 'react';
import styled from 'styled-components';
import A from '../../components/A';
import PageTitle from '../../components/layout/PageTitle';
import Island from '../redistricting2020/Island';
import { Page } from '../redistricting2020/Redistricting2020Page';

const foundations = [
  {
    url: 'https://www.youtube.com/watch?v=Eex3lKDeLi0',
    title: 'paella',
    completed: false,
  },
  {
    url: 'https://cooking.nytimes.com/guides/48-how-to-make-chili',
    title: 'chili',
    completed: true,
  },
  // fried rice
  // goulash
];

const breadstuff = [
  {
    url: 'https://www.youtube.com/watch?v=C5yCXhbRHJI',
    title: 'cook bread in boiling water',
    length: 485,
    completed: false
  },
  {
    url: 'https://www.youtube.com/watch?v=rS5twjGJZhA',
    title: 'mix flour with tomatoes',
    length: 491,
    completed: false
  }
];

const nonwhiteIngredients = [
  // nopales
];

const goalSections = [
  {
    title: 'Foundations',
    items: foundations,
  },
  {
    title: 'Breadstuffs',
    items: breadstuff
  }
];

const CookGoalList = styled.ul`
  padding: 0;
  padding-left: 0.5rem;

  & > li {
    display: flex;
    gap: 0.5rem;
  }
`;

interface Props {};

const CookPage: React.FC<Props> = () => {
  return (
    <Page>
      <PageTitle>Cook Goals</PageTitle>
      {goalSections.map(({ title, items }, i) => (
        <Island key={`${title}-${i}`} title={title}>
          <CookGoalList>
            {items.map(({ url, title, completed }) => (
              <li key={url}>
                <input type="checkbox" checked={completed} />
                <A href={url}>{title}</A>
              </li>
            ))}
          </CookGoalList>
        </Island>
      ))}
    </Page>
  );
};

export default React.memo(CookPage);
