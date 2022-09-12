import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <main className='background-img'>
      <h1>welcome to abubble.</h1>
      <button className="btn btn-default" onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'sign up' : 'log in'}
      </button>
      { showLogin ?
          <LoginForm setUser={setUser} />
          :
          <SignUpForm setUser={setUser} />
      }
    </main>
  );
}