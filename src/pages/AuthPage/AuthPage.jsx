import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <main>
      <h1>welcome to abubble.</h1>
      { showLogin ?
          <LoginForm setUser={setUser} />
          :
          <SignUpForm setUser={setUser} />
      }
      <button className="btn btn-default" onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'sign up' : 'log in'}
      </button>
    </main>
  );
}