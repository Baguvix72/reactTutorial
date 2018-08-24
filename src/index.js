import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import contacts from './Data';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App cnts = {contacts} />, document.getElementById('root'));
registerServiceWorker();
