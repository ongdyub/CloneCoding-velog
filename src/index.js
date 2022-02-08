import React from 'react';
import axios from "axios";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {SessionProvider} from "./Context/SessionContext";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/' : 'https://waflog.kro.kr/';


ReactDOM.render(
  <React.StrictMode>
      <ToastContainer/>
      <SessionProvider>
          <App />
      </SessionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();