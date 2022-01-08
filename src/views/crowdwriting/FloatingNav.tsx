import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  left: 1rem;
  top: 1rem;
  position: fixed;
  background: hsla(200, 80%, 60%, 0.75);
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow-medium);
  color: var(--black); 

  & > a {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    filter: grayscale(100%) brightness(3);
    transition: all 0.1s ease-in-out;

    & > span:nth-child(2) {
      transition: opacity 0.1s;
      opacity: 0.5;
      display: none;
    }

    &:hover { filter: grayscale(0%) brightness(1); }
    &:hover > span:nth-child(2) { opacity: 1; }
  }

  &:hover {
    & > a > span:nth-child(2) {
      display: inline;
    }
  }

  @media (max-width: 768px) {
    right: 1rem;
    flex-direction: row;
    justify-content: space-around;
    backdrop-filter: blur(0.5rem);
    max-width: calc(100px + 60vw);
    margin: 0 auto;
    padding: 1rem;

    & > a {
      flex-direction: column;

      & > span:nth-child(2) {
        margin: 1rem 0;
        display: block;
        transform: rotate(-45deg);
      }
    }
  }
`;

const hearts = [
  '💙',
  '💚',
  '💜',
  '🧡',
  '🤎',
  '💛',
  '🖤',
  '🤍'
];

interface Props {
  path: string;
  anchors: string[];
};

const FloatingNav: React.FC<Props> = ({ path, anchors }) => {
  return (
    <Nav>
      {anchors.map((anchor, i) => {
        return (
          <a href={`${path}#${anchor}`} key={anchor}>
            <span>{hearts[i % hearts.length]}</span>
            <span>{anchor}</span>
          </a>
        );
      })}
    </Nav>
  );
};

export default FloatingNav;
