import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const renderRouter = Component => {

  ReactDOM.hydrate(
    <BrowserRouter>
      <div>index.jsx</div>
      <Component />
    </BrowserRouter>, document.getElementById('root')
  );
  
};

renderRouter(App);