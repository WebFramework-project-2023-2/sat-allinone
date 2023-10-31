import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import React, { useState } from 'react';
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm';

function App() {
  const [accounts, setAccounts] = useState({
    'admin': {
      'password': 'admin',
      'name': '어드민',
    },
  });
  
  const handleRegistration = (newAccount) => {
    console.log(newAccount)
    setAccounts(prevAccounts => {
      return { ...prevAccounts, ...newAccount };
    });
    console.log(accounts)
  };

  return (
    <Routes>
        <Route path="/login" element={<LoginForm accounts={accounts} />} />
        <Route path="/register" element={<RegisterForm onRegister={handleRegistration} />}/>
    </Routes>
  );
}

export default App;
