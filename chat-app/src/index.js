import reportWebVitals from './reportWebVitals';
import React from 'react'
import ReactDOM  from 'react-dom'
import LoginPage from './Components/loginPage'
import SignUpPage from './Components/signUpPagePage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginPage />
    <SignUpPage />
  </React.StrictMode>
);

reportWebVitals();
