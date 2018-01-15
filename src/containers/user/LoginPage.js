import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Login } from '../../actions/AuthActions';



class LoginPage extends Component {

	HandleLoginSubmition(event){
		event.preventDefault();
		var user = {
			email : this.refs.email.value,
			password : this.refs.password.value
		}
		this.props.LoginUser(user,this.props.history);
		
	}

  	render() {
	    return (
		    <div>
		        <div className="container">
		          <h3>User Login </h3>
		          <form onSubmit={(event)=>this.HandleLoginSubmition(event)}>
		          	<div className="form-group">
		          		<label forhtml="email">Email : </label>
		          		<input type="email" ref='email' className="form-control" id="email" placeholder="ahmed@example.com" required/>
		          	</div>
		          	<div className="form-group">
		          		<label forhtml="password">Password : </label>
		          		<input type="password"  ref='password' className="form-control" id="password" placeholder="******" required/>
		          	</div>
		          	<button type="submit" className="btn btn-primary">Login !</button>
		          </form>
		        </div>
		    </div>
	    );
  	}


}


const mapDispatchToProps = dispatch => {
    return {
      LoginUser: (user,history) => {
        dispatch(Login(user,history))
      },
    }
}


export default  connect( null , mapDispatchToProps )(LoginPage);
