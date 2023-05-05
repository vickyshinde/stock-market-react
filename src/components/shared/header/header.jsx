import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import theme from '../../../theme';
import NavBar from '../navbar';

const Header = () => {
  const { t } = useTranslation();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">

          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ...theme.logo
            }}>
            {t('app_title')}
          </Typography>
          <NavBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
