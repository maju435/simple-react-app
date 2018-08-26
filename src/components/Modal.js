import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.scss'

class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal__cont">
          <div className="modal__cont__header">
            <h2>{this.props.title}</h2>
          </div>
          <div className="modal__cont__body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  isActive: PropTypes.func,
};

export default Modal;