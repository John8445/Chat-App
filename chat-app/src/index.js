import reportWebVitals from './reportWebVitals';
import SignupPage from './Components/signUpPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginPage />
    <SignUpPage />
  </React.StrictMode>
);

reportWebVitals();
