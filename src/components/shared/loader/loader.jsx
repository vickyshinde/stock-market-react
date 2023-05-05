import PropTypes from 'prop-types';
import { Box, CircularProgress } from '@mui/material';

const Loader = ({ pageLoader }) => {
  return (
    <Box
      sx={{
        position: pageLoader ? 'fixed' : 'static',
        minHeight: pageLoader ? '' : '300px',
        background: pageLoader ? 'rgba(0, 0, 0, 0.2)' : '',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <CircularProgress color="primary" />
    </Box>
  );
};

export default Loader;

Loader.propTypes = {
  pageLoader: PropTypes.bool
};

Loader.defaultProps = {
  pageLoader: false
};
