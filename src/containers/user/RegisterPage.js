import React, { Component } from 'react';
import { connect } from 'react-redux';


import { RegisterUser } from '../../actions/AuthActions';


class RegisterPage extends Component {

  HandleRegisterSubmition(event){
    event.preventDefault();
    var userdata = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      password: this.refs.password.value
    };

    this.props.RegisterUser(userdata);
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <div className="container">
          <h3>User Register </h3>
          <form onSubmit={(event)=>this.HandleRegisterSubmition(event)}>
          	<div className="form-group">
          		<label forhtml="name">Name : </label>
          		<input type="text" className="form-control" id="name" placeholder="Ahmed Magdy" ref='name' required/>
          	</div>
          	<div className="form-group">
          		<label forhtml="email">Email : </label>
          		<input type="email" className="form-control" id="email" placeholder="ahmed@example.com" ref='email' required/>
          	</div>
          	<div className="form-group">
          		<label forhtml="password">Password : </label>
          		<input type="password" className="form-control" id="password" ref='password' placeholder="******" required/>
          	</div>
          	<button type="submit" className="btn btn-primary">Register Now !</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
      RegisterUser: (user) => {
        dispatch(RegisterUser(user))
      }
    }
}
export default  connect( null , mapDispatchToProps )(RegisterPage);
