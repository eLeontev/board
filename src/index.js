import React from 'react';
import ReactDOM from 'react-dom';

import 'sanitize.css/sanitize.css';
import './index.css';

import Board from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Board />, document.getElementById('root'));
registerServiceWorker();
