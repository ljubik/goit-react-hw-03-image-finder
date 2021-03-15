import React from 'react';

import style from './Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <button type="button" className="Button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default Button;
