import React from 'react';
import { hydrate } from "react-dom"
import 'promise-polyfill/src/polyfill';
import App from './App';

hydrate((
  <App />
), document.getElementById('root'));
