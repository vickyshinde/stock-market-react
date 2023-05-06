import { Alert } from '@mui/material';
import PropTypes from 'prop-types';

const ErrorMessage = ({ statusCode, message }) => {
  return (
    <Alert severity="error">
      <b>{statusCode}</b> {message}
    </Alert>
  );
};

export default ErrorMessage;

ErrorMessage.defaultProps = {
  statusCode: '',
  message: ''
};

ErrorMessage.propTypes = {
  statusCode: PropTypes.number,
  message: PropTypes.string
};
