import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const JobsAbroad = () => (
      //<BrowserRouter basename="/JobsAbroad/">
      <App />
    //</BrowserRouter>
  )

ReactDOM.render(<JobsAbroad />, document.getElementById('root'));
registerServiceWorker();
 