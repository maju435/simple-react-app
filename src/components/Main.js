import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Main.scss'

import Recipe from './Recipe.js';

class Main extends Component {
  render() {
    return (
      <main>
        <div className="main-cont">
          <div className="main-cont__header">
            <h2>Your recipes:</h2>
          </div>
          <div className="main-cont__body">
            <Recipe />
            <Recipe />
          </div>
        </div>
      </main>
    );
  }
}

Main.propTypes = {

};

export default Main;