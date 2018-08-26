import React from 'react';
import ReactDOM from 'react-dom';
import './styles/document.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
