import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
//import ShareData from './components/ShareData';
import * as serviceWorker from './serviceWorker';
//import TopNav from './TopNav';






  ReactDOM.render(
    <>
    <App/>,
    </>,
    
    document.getElementById('root')
  );

serviceWorker.unregister();
