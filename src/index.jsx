import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { StateProvider } from './utils/StateSupports';
import reducer, { initialState } from './utils/reducerItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>
);

reportWebVitals();
