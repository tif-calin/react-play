import React from 'react';
import * as d3 from 'd3';
import type { Selection } from 'd3';

const useD3 = (renderChart: (svg: Selection<SVGSVGElement, unknown, null, undefined>) => any, dependencies: any[]) => {
  const ref = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    if (ref.current) renderChart(d3.select(ref.current));
  }, dependencies);

  return ref;
};

export default useD3;
