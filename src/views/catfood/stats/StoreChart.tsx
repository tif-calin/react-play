import React from 'react';
import styled from 'styled-components';
import { Chart } from 'react-charts';

const Container = styled.div`
  width: 100%;
  height: 500px;
`;

interface Props {
  storeData: any;
};

const StoreChart: React.FC<Props> = ({ storeData }) => {
  // const primaryAxis = React.useMemo(() => {
  //   return {
  //     getValue: (data: any) => data.brands,
  //   }
  // }, []);

  const primaryAxis = {
    getValue: (data: any) => data.label,
  };

  const secondaryAxes = [{
    getValue: (data: any) => data.brandCount,
  }];

  const getDatumStyle = () => {
    return {
      rectangle: {
        strokeWidth: 12,
      }
    };
  };

  return (
    <Container>
      <Chart 
        options={{
          data: storeData,
          primaryAxis,
          secondaryAxes,
          getDatumStyle
        }}
      />
    </Container>
  );
};

export default StoreChart;
