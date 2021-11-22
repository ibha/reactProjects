import React, { lazy, Suspense } from 'react';

const LazyBinarySearchTree = lazy(() => import('./BinarySearchTree'));

const BinarySearchTree = props => (
  <Suspense fallback={null}>
    <LazyBinarySearchTree {...props} />
  </Suspense>
);

export default BinarySearchTree;
