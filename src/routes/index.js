import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from '../components/shared/loader';

const Layout = lazy(() => import('../components/layout'));
const ErrorPage = lazy(() => import('../components/errorPage'));
const HomePage = lazy(() => import('../components/home'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader pageLoader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loader pageLoader />}>
                <ErrorPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
