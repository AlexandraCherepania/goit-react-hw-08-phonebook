import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBarHeader } from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBarHeader />

      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
