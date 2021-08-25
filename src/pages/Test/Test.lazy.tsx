import React, { lazy, Suspense } from 'react';

const LazyTest = lazy(() => import('./Test'));

const Test = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTest {...props} />
  </Suspense>
);

export default Test;
