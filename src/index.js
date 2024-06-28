import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import store from './stores/index.js';
=======
import store from './Store';
>>>>>>> origin/my-feature-branch
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
<<<<<<< HEAD
      <App />
  </Provider>
=======
    <App />
  </Provider>
  
>>>>>>> origin/my-feature-branch
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
