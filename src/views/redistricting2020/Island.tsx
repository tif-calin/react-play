import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  defaultOpen?: boolean;
};

const Container: any = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: ${({ isOpen }: any) => isOpen ? '2.5rem' : '1rem 2.5rem'};
  border-radius: 0.15rem;
  box-shadow: var(--shadow-border);

  ${({ isOpen }: any) => !isOpen && `
    & > *:not(:first-child) { display: none; }
  `}

  transition: padding 0.1s ease-in-out;
`;

const HeadingContainer = styled.div`
  cursor: pointer;

  & h2 {
    line-height: 1.2;
    font-weight: 600;
    width: 100%;
    margin: 0;

    & + .subheading {
      line-height: 1.2;
      margin: 0;
      font-weight: 200;
      opacity: 0.8;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Island: React.FC<Props> = ({
  title,
  children,
  defaultOpen = true
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(!!defaultOpen);

  const toggle = React.useCallback((e) => {
    if (e.type === 'keypress' && e.key !== 'Enter') return;
    setIsOpen(isOpen => !isOpen);
  }, []);

  return (
    <Container
      isOpen={isOpen}
    >
      <HeadingContainer
        onClick={toggle}
        onKeyPress={toggle}
        tabIndex={0}
      >
        <h2>{title}</h2>
      </HeadingContainer>
      {isOpen && <ContentContainer>
        {children}
      </ContentContainer>}
    </Container>
  );
};

export default Island;
