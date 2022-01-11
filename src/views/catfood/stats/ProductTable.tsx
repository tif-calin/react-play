import React from 'react';

const urlFood = (url: string): string =>
  decodeURIComponent(`${url.split('/').at(-2)} - ${url.split('/').at(-1)?.toLowerCase().replaceAll('+', ' ')}`);
;

interface Props {
  data: any[];
};

const ProductTable: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((p) => (
          <li key={p.labale}>
            <span>{urlFood(p.label)} ({p.stores})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductTable;
