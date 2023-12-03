import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { StateSupport } from './utils/StateSupports';
import reducer, { initialState } from './utils/reducerItem';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>
//   },
//   {
//     path: "Home",
//     element: <HomePage/>
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateSupport initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </StateSupport>
  </React.StrictMode>
);

reportWebVitals();
