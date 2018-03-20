import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import AuthExample from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <BrowserRouter>
        <AuthExample />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
