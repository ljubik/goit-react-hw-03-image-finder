import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import style from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  hendleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={style.overlay} onClick={this.hendleBackdropClick}>
        <div className={style.modal}>
          <img src={this.props.url} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default Modal;