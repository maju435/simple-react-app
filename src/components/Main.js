import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Main.scss'

class Main extends Component {
  render() {
    return (
      <main>
        <div className="main-cont">
          <div className="main-cont__header">
            <h2>Your recipes:</h2>
          </div>
        </div>
      </main>
    );
  }
}

Main.propTypes = {

};

export default Main;