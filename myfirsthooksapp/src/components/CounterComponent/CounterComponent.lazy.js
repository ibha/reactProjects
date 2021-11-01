import React, { lazy, Suspense } from 'react';

const LazyCounterComponent = lazy(() => import('./CounterComponent'));

const CounterComponent = props => (
  <Suspense fallback={null}>
    <LazyCounterComponent {...props} />
  </Suspense>
);

export default CounterComponent;
