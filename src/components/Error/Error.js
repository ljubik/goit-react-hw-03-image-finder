import React from 'react';
import PropTypes from 'prop-types';

import style from './Error.module.css';

const Error = ({ message }) => {
  return <p className={style.error}>{message}</p>;
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;