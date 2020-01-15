import React from 'react';
import ReactDOM from 'react-dom';
import 'uikit/dist/css/uikit.min.css'
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'

// import jQuery from 'jquery';
import Icons from 'uikit/dist/js/uikit-icons';
import UIkit from 'uikit';

UIkit.use(Icons);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);