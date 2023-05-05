import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from '../shared/header';
import theme from '../../theme';

const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ marginBottom: theme.spacing(5) }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
