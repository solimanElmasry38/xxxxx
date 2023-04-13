import React, { lazy, Suspense } from 'react';

const LazyUpdateUser = lazy(() => import('./UpdateUser'));

const UpdateUser = props => (
  <Suspense fallback={null}>
    <LazyUpdateUser {...props} />
  </Suspense>
);

export default UpdateUser;
