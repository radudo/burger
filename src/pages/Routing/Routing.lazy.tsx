import React, { lazy, Suspense } from 'react';

const LazyRouting = lazy(() => import('./Routing'));

const Routing = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyRouting {...props} />
  </Suspense>
);

export default Routing;
