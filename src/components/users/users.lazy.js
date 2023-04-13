import React, { lazy, Suspense } from 'react';

const LazyUsers = lazy(() => import('./Users'));

const Users = props => (
  <Suspense fallback={null}>
    <LazyUsers {...props} />
  </Suspense>
);

export default Users;
