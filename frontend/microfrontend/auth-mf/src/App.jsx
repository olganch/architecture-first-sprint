import React from "react";
import { Auth } from './Auth';

import "./index.css";

function App() {
  const mockLogin = (data) => console.log('Login:', data);
  const mockRegister = (data) => console.log('Register:', data);

  return (
    <div className="auth-app">
      <Auth onLogin={mockLogin} onRegister={mockRegister} />
    </div>
  );
}

export default App;