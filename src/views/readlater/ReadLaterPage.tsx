import React from 'react';
import styled from 'styled-components';
import PageTitle from '../../components/layout/PageTitle';
import useLocalStorage from '../../hooks/useLocalStorage';

const Page = styled.div`
  --black: #233;
  --white: #fcfcfc;

  font-family: "Inconsolata", monospace;

  & > form {
    border: 2px solid var(--black);
    border-radius: 0.25rem;
    padding: 1rem;
    gap: 0.75rem;
    background-color: var(--white);

    display: flex;
    flex-direction: column;

    & > fieldset {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      background-color: #fff;

      border: 2px solid #455;
      border-radius: 0.15rem;
      padding: 0;

      & > legend {
        z-index: 1;
        pointer-events: none;
        position: absolute;
        top: calc(50% - 0.75rem);
        left: 0.5rem;
        transition: all 0.15s ease-in-out;
        border-radius: 0.15rem;
      }

      & > input {
        z-index: 1;
        border: none;
        outline: none;
        flex-grow: 1;
        padding: 0.25rem 0.5rem;
        background: none;

        &:focus + legend, &:not(:placeholder-shown) + legend {
          z-index: 0;
          top: -0.625rem;
          left: 0.25rem;
          background: #fff;
          padding: 0 0.25rem;
        }

        &:valid:not(:placeholder-shown) + legend { color: #99a; }
      }

      & > select {
        border: none;
        outline: none;
        border-left: 1px solid #455;
        padding-left: 0.25rem;
        background-color: var(--white);
      }
    }

    & > button:last-child {
      margin-top: 1rem;
      background-color: var(--black);
      color: var(--white);
      border: none;
      border-radius: 0.25rem;
      padding: 0.5rem;
      transition: all 0.15s ease-in-out;

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

const colors = [
  'red',
  'cyan',
  'pink',
  'teal',
  'grape',
  'green',
  'violet',
  'lime',
  'indigo',
  'yellow',
  'blue',
  'orange'
];

const PropertyPool = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

const PoolItem = styled.button`
  --o: 0.15;

  border-radius: 0.25rem;
  border: none;
  border: 1px solid var(--black);
  padding: 0 0.2rem;
  background-color: rgba(var(--${(props: any) => (
    colors[props['data-i'] % colors.length]
  )}-rgb), var(--o));
  transition: all 0.15s ease-in-out;

  & span {
    font-weight: 700;
    filter: invert(0.75);
  }

  &:hover {
    --o: 0.95;
    color: var(--white);
  }
`;

interface Props {};

const otherFields = [
  {
    name: 'Authors',
    alternatives: ['Author']
  },
  {
    name: 'DOI',
    alternatives: ['ISBN'],
  },
  {
    name: 'Journal',
    requires: 'DOI'
  },
  {
    name: 'Year'
  }
];

const requiredFields = [
  'url',
  'title',
  'length',
  'length-unit'
];

const ReadLaterPage: React.FC<Props> = () => {
  const [item, setItem] = useLocalStorage<any>('readLater_current', {});
  const form = React.useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const newItem: { [key: string]: any } = {};
      const data = new FormData(form.current);
      for (const key of requiredFields) newItem[key] = data.get(key);
      setItem(newItem);

      console.log(newItem);
    }
  };

  return (
    <Page>
      <PageTitle>Read Later</PageTitle>
      <form ref={form} onSubmit={handleSubmit} onChange={handleSubmit}>
        <fieldset>
          <input 
            type="url" placeholder="&nbsp;" 
            name="url" defaultValue={item.url}
          />
          <legend>URL</legend>
        </fieldset>
        <fieldset>
          <input 
            type="text" placeholder="&nbsp;" 
            name="title" defaultValue={item.title}
          />
          <legend>Title</legend>
        </fieldset>
        <fieldset>
          <input 
            type="number" placeholder="&nbsp;" 
            name="length" defaultValue={item.length}
          />
          <legend>Length</legend>
          <select name="length-unit" defaultValue={item['length-unit']}>
            <option>pages</option>
            <option>words</option>
            <option>minutes</option>
          </select>
        </fieldset>

        <PropertyPool>
          {otherFields.map((field, i) => {
            const fields = [field.name, ...(field.alternatives || [])].map(f => f.toLowerCase());
            const dontRender = fields.some(f => item[f]);
            
            return dontRender ? null : fields.map(f => <PoolItem data-i={i} key={f}>
              {f} <span>+</span>
            </PoolItem>);
          })}
        </PropertyPool>

        <button type="submit">Add to collection</button>
      </form>
    </Page>
  );
};

export default ReadLaterPage;
