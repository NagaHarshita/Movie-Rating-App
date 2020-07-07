import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';
import Navigation from './Data/Navigation';

ReactDOM.render(<Navigation />, document.getElementById('root'));
serviceWorker.unregister();


