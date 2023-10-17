import reportWebVitals from './reportWebVitals';
import React from 'react'
import ReactDOM  from 'react-dom'
import SignUpPage from './Components/signUpPage';
import MainPage from './Components/mainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <LoginPage />
    <SignUpPage /> */}
    <MainPage />
  </React.StrictMode>
);

reportWebVitals();
