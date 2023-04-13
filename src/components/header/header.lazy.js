import React, { lazy, Suspense } from 'react';

const LazyComponentsHeader = lazy(() => import('./ComponentsHeader'));

const ComponentsHeader = props => (
  <Suspense fallback={null}>
    <LazyComponentsHeader {...props} />
  </Suspense>
);

export default ComponentsHeader;
