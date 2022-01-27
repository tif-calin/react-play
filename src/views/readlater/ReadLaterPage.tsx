import React from 'react';
import styled from 'styled-components';
import A from '../../components/A';
import PageTitle from '../../components/layout/PageTitle';
import useLocalStorage from '../../hooks/useLocalStorage';

const Page = styled.div`
  --black: #273f3f;
  --offwhite: #fcfcfc;

  font-family: "Inconsolata", monospace;

  & > form {
    position: relative;
    border: 2px solid var(--black);
    border-radius: 0.25rem;
    padding: 1rem;
    gap: 0.75rem;
    background-color: var(--offwhite);

    display: flex;
    flex-direction: column;

    &::after {
      z-index: -1;
      content: "";
      position: absolute;
      inset: 0;
      // border: 4px solid var(--pink);
      transform: rotate(-4deg);
      border-radius: 0.25rem;
      background: var(--black);
      transition: all 0.25s ease-in-out;
    }

    &:hover::after {
      transform: rotate(0deg);
      inset: -3px;
    }

    & > button:last-child {
      margin-top: 1rem;
      background-color: var(--black);
      color: var(--offwhite);
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

const FieldItem = styled.fieldset`
  position: relative;
  display: flex;
  flex-grow: 1;
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
    width: 4rem;
    z-index: 1;
    border: none;
    outline: none;
    flex-grow: 1;
    padding: 0.25rem 0.5rem;
    background: none;

    &:focus + legend, &:not(:placeholder-shown) + legend {
      z-index: 0;
      top: -0.75rem;
      left: 0.25rem;
      background: #fff;
      padding: 0 0.25rem;
    }

    &:valid:not(:placeholder-shown) + legend { color: #99a; }
  }

  & > select {
    flex-grow: 0;
    border: none;
    outline: none;
    border-left: 1px solid #455;
    padding-left: 0.25rem;
    background-color: var(--offwhite);
  }  
`;

const OptionalFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  & > button:last-child {
    display: flex;
    place-items: center;
    place-content: center;
    height: calc(2rem + 2px);
    width: calc(2rem + 2px);
    font-weight: 700;
    border: 2px solid var(--black);
    border-radius: 50%;
    background-color: var(--offwhite);
    color: var(--black);
    transition: border-width 0.15s ease-in-out;

    &:hover {
      // background-color: var(--red);
      border-width: 4px;
      font-weight: 1000;
    }
  }
`;

const Collection = styled.ul`
  margin-top: 3rem;
  padding: 0;

  & li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & > *:nth-child(2) {
      font-weight: 200;
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

const FieldPool = styled.div`
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
    color: var(--offwhite);
  }
`;

interface Props {};

type Field = {
  label: string,
  input: {
    type: string,
    min?: number,
    max?: number,
    defaultValue?: number | string,
  },
  required?: boolean,
  automatic?: boolean,
  alternatives?: string[],
  requires?: string[],
  options?: string[]
};

const allFields: { [field: string]: Field } = {
  /* required fields */
  'url': {
    label: 'URL',
    input: { type: 'url' },
    required: true
  },
  'title': {
    label: 'Title',
    input: { type: 'text' },
    required: true
  },
  'length': {
    label: 'Length',
    input: { type: 'number', min: 0 },
    required: true,
    options: [ 'pages', 'words', 'hours', 'minutes', 'seconds' ]
  },
  /* automatic fields */
  'createdAt': {
    label: 'Added on',
    input: { type: 'date' },
    automatic: true
  },
  /* additional fields */
  'authors': {
    label: 'Author(s)',
    input: { type: 'text' },
    required: false
  },
  'doi': {
    label: 'DOI',
    input: { type: 'text' },
    alternatives: ['isbn'],
  },
  'isbn': {
    label: 'ISBN',
    input: { type: 'text' },
    alternatives: ['doi'],
  },
  'year': {
    label: 'Year',
    input: { type: 'number', defaultValue: new Date().getFullYear() },
  },
  'journal': {
    label: 'Journal',
    input: { type: 'text' },
    requires: ['doi']
  }
};

const requiredFields = Object.keys(allFields).filter(f => 
  allFields[f].required || allFields[f].automatic
);

const reducer = (state: { [key: string]: any }[], action: { type: string, payload?: any }) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'edit':
      return state.map((item, i) => {
        if (i === action.payload.index) {
          return { ...item, ...action.payload.data };
        }
        return item;
      });
    case 'remove':
      return state.filter((_, i) => i !== action.payload.index);
    default:
      return state;
  }
};

const url2domain = (url: string) => url.split('/')[2];

const ReadLaterPage: React.FC<Props> = () => {
  const [collection, collectionDispatch] = React.useReducer(reducer, []);
  const [item, setItem] = useLocalStorage<any>('readLater_current', {});
  const [additionalFields, setAdditionalFields] = React.useState<string[]>(
    Object.keys(item).filter(item => !requiredFields.includes(item) && !item.endsWith('-type'))
  );
  const form = React.useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const newItem: { [key: string]: any } = { createdAt: Date.now() };
      const data = new FormData(form.current);
      for (const key of Object.keys(allFields)) {
        if (data.get(key)) newItem[key] = data.get(key);
        
        if (allFields[key].options) {
          const valueType = `${key}-type`;
          newItem[valueType] = data.get(valueType);
        }
      }
      setItem(newItem);

      collectionDispatch({ type: 'add', payload: newItem });
    }
  };

  const addField = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const field = e.currentTarget.getAttribute('name');
    if (field) {
      setAdditionalFields(fields => [...fields, field]);
    }
  };

  return (
    <Page>
      <PageTitle>Read Later</PageTitle>
      <form ref={form} onSubmit={handleSubmit}>
        <FieldItem>
          <input 
            type="url" placeholder="&nbsp;" 
            name="url" defaultValue={item.url}
          />
          <legend>URL</legend>
        </FieldItem>
        <FieldItem>
          <input 
            type="text" placeholder="&nbsp;" 
            name="title" defaultValue={item.title}
          />
          <legend>Title</legend>
        </FieldItem>
        <FieldItem>
          <input 
            type="number" placeholder="&nbsp;" 
            name="length" defaultValue={item.length}
          />
          <legend>Length</legend>
          <select name="length-type" defaultValue={item['length-type']}>
            <option>pages</option>
            <option>words</option>
            <option>minutes</option>
          </select>
        </FieldItem>

        {additionalFields.map((field) => {
          return (<OptionalFieldWrapper key={field}>
            <FieldItem key={field}>
              <input { ...allFields[field].input } />
              <legend>{allFields[field].label}</legend>
            </FieldItem>
            <button>&minus;</button>
          </OptionalFieldWrapper>);
        })}

        <FieldPool>
          {Object.keys(allFields).map((field, i) => {
            const fieldData = allFields[field];

            const dontRenderIf = (
              requiredFields.includes(field) ||
              additionalFields.includes(field) ||
              fieldData?.requires?.some(f => !additionalFields.includes(f)) || 
              fieldData?.alternatives?.some(f => additionalFields.includes(f))
            );
            
            return dontRenderIf ? null : <PoolItem 
              key={field}
              data-i={i}
              name={field}
              onClick={addField}
            >
              {field} <span>+</span>
            </PoolItem>;
          })}
        </FieldPool>

        <button type="submit">Add to collection</button>
      </form>

      <Collection>
        {collection.map((item, i) => (
          <li key={i}>
            <A href={item.url}>{item.title}</A>
            <span>({url2domain(item.url)})</span>
          </li> 
        ))}
      </Collection>
    </Page>
  );
};

export default ReadLaterPage;
