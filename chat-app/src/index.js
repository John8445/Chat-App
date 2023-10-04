import reportWebVitals from './reportWebVitals';
import React from 'react'
import ReactDOM  from 'react-dom'
import LoginPage from './Components/loginPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);

reportWebVitals();
