import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

 import {Logout} from '../actions/AuthActions';


class Navigation extends Component {
	handleLogout(event){
		event.preventDefault();
		this.props.Logout();
	}
	render(){
		const { is_loggedin  } = this.props.auth;

		if (is_loggedin) {
			let user =JSON.parse(localStorage.UserObject);
			var username = user.name;
		}


		const GuestLinks = (
				<ul className="nav navbar-nav navbar-right">
						<li><Link to="/login">Login</Link></li>
						<li><Link to="/register">Register</Link></li>
				</ul>
			);

		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<Link to="/" className="navbar-brand" >Welcome Page</Link>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						{ is_loggedin ?
							(
								<ul className="nav navbar-nav navbar-right">
										<li>
											<Link to="/items" >
												<span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>	Items
											</Link>
										</li>
										<li>
											<Link to="/profile">
												<span className="glyphicon glyphicon-user" aria-hidden="true"></span> {username}
											</Link>
										</li>
										<li>
											<a onClick={(event)=>this.handleLogout(event)} > 
												<span className="glyphicon glyphicon-log-out" aria-hidden="true"></span> Logout
											</a>
										</li>
								</ul>
							)  : 

							GuestLinks }
					</div>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
  return {
    auth: state.AuthReducer
  }
}

export default connect(mapStateToProps,{Logout})(Navigation);