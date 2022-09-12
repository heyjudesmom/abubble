import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import "./AuthPage.css";
export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-1'>
          <h1>welcome to abubble.</h1>
          <div className='about'>
            <p>Life can be chaotic, but keeping track of it doesn't have to be.</p>
            <p>Track your</p>
            <ul style={{textAlign: "left"}}>
              <li>dinner plans</li>
              <li>appointments</li>
              <li>chores</li>
              <li>to do list </li>
            </ul>
            <p>Sign up to organize your busy life in one spot with abubble!</p>
          </div>
        </div>
        <div className='col-2'>
          { showLogin ?
              <LoginForm setUser={setUser} />
              :
              <SignUpForm setUser={setUser} />
            }
          <button className="btn btn-default" onClick={() => setShowLogin(!showLogin)}>
            {showLogin ? 'sign up' : 'log in'}
          </button>
        </div>
        </div>
    </div>
  );
}