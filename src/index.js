import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Its from './Its'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Its />, document.getElementById('root'));
registerServiceWorker();
