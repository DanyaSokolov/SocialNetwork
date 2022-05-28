import React from 'react';
import reportWebVitals from './reportWebVitals';
import Store from "./State/state_redux";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import MainApp from "./App"

// let renderApp = (State) => {
  ReactDOM.render(
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>,
    document.getElementById('root')
  );
// }

// export default renderApp;

// renderApp(Store.getState());

// Store.subscribe(() => {
//   let State = Store.getState();
//   renderApp(State);
// });

reportWebVitals();


