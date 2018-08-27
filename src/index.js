import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import contacts from './DataContacts';
import service from './DataService';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App cnts = {contacts} srvc = {service} />, document.getElementById('root'));
registerServiceWorker();
