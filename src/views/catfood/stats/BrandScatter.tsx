import React from 'react';
import { ResponsiveContainer, ScatterChart, CartesianGrid, Scatter, XAxis, YAxis, Tooltip, Customized } from 'recharts';
import styled from 'styled-components';

const Container = styled.div`
  height: 400px;
  width: 100%;
`;

const StyledTooltip = styled.div`
  background-color: #fffe;
  padding: 0.25rem;
  border: 1px solid #000;
  border-radius: 0.25rem;
  font-size: 0.8rem;
`;

const CustomTooltip = ({ active, payload }: any) => {
  const label = payload[0]?.payload?.name;

  return active ? <StyledTooltip>
    {label} ({payload[0]?.payload?.storeCount} stores, {payload[0]?.payload?.foodCount} foods)
  </StyledTooltip> : <></>;
};

interface Props {
  data: {
    name: string;
    storeCount: number;
    foodCount: number;
  }[]
};

const BrandScatter: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <ResponsiveContainer width="100%" height="90%">
        <ScatterChart height={400} width={400}>
          <CartesianGrid />
          <XAxis 
            type="number" dataKey="foodCount" name="products"
            label={{ value: 'Number of products', position: 'insideBottom', offset: -4 }}
          />
          <YAxis 
            type="number" dataKey="storeCount" name="stores" 
            label={{ value: 'Number of stores', angle:-90, position: 'insideLeft', offset: 16 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Scatter name="Brands" data={data} fill="#0087bd88" />
        </ScatterChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default BrandScatter;
