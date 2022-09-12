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
        <div className="w-50">
          <form autoComplete="off" onSubmit={this.handleSubmit} >
            <h3>sign up!</h3>
            <div>
              <label>name</label>
              <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} required />
            </div>
            <div>
              <label>email</label>
              <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} required />
            </div>
            <div>
              <label>password</label>
              <input type="password"className="form-control" name="password" value={this.state.password} onChange={this.handleChange} required />
            </div>
            <div>
              <label>confirm</label>
              <input type="password" className="form-control" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            </div>
            <button type="submit" className="btn btn-success" disabled={disable}>sign up</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
  
}