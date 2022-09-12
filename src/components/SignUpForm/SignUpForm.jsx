import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import './SignUpForm.css';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = {...this.state};
      delete formData.confirm;
      delete formData.error;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred, like a dup email address
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <p>Is your brain abubble with the happenings of a busy life?</p>
        <p>Do you ever forget:</p>
        <ul>
          <li>What's for dinner this week?</li>
          <li>Are there any upcoming appointments to remember?</li>
          <li>Who's turn is it to take out the garbage?</li>
        </ul>
        <p>Sign up to organize your thoughts all in one spot with abubble!</p>
        <div className="w-50">
          <form autoComplete="off" onSubmit={this.handleSubmit} >
            <h3>sign up!</h3>
            <div className='form-group'>
              <label>name</label>
              <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} required />
            </div>
            <div className='form-group'>
              <label>email</label>
              <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} required />
            </div>
            <div className='form-group'>
              <label>password</label>
              <input type="password"className="form-control" name="password" value={this.state.password} onChange={this.handleChange} required />
            </div>
            <div className='form-group'>
              <label>confirm</label>
              <input type="password" className="form-control" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary" disabled={disable}>sign up</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
  
}