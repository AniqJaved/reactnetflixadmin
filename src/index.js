import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  {AuthContextProvider}  from './context/authContext/AuthContext';

//Rn the AuthContextProvider is working as it is giving output in the console but the App is not working as it is not going to the concerned function ass the console.log for the childern is giving no output.
console.log(AuthContextProvider)
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

//console.log(AuthContextProvider)
