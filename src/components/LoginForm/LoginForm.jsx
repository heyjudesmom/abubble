import './LoginForm.css';
import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className='w-50'>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h3>log in!</h3>
          <div className='form-group'>
            <label>email</label>
            <input type="text" className="form-control" name="email" value={credentials.email} onChange={handleChange} required />
          </div>
          <div className='form-group'>
            <label>password</label>
            <input className="form-control" type="password" name="password" value={credentials.password} onChange={handleChange} required />
          </div>
          <button className="btn btn-primary" type="submit">log in</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
