import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from '../components/shared/loader';

const Layout = lazy(() => import('../components/layout'));
const ErrorPage = lazy(() => import('../components/errorPage'));
const HomePage = lazy(() => import('../components/home'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader pageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
