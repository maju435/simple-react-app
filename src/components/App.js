import React, { Component } from 'react';
import '../styles/App.scss';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
