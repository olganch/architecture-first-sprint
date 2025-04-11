import React from 'react';
import { Login } from './Login';
import { Register } from './Register';

export const Auth = ({ onLogin, onRegister }) => {
  return (
    <>
      <Route path="/signin">
        <Login onLogin={onLogin} />
      </Route>
      <Route path="/signup">
        <Register onRegister={onRegister} />
      </Route>
    </>
  );
};