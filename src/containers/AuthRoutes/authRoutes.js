import React from 'react';
import { connect } from 'react-redux';

export default function requiredAuth(AuthComponent) {
	class AuthRoutes extends React.Component {
		componentWillMount() {
			if (!this.props.isAuth) {
				this.props.history.push('/login');
				console.log('you should be auth ');
			}
		}
		componentWillUpdate(nextProps) {
			if (!nextProps.isAuth) {
				this.props.history.push('/login');
			}
		}
		render() {
		    return (
		      <AuthComponent {...this.props}/>
		    );
		}
	}


	function mapStateToProps(state) {
	  return {
	  	isAuth: state.AuthReducer.is_loggedin
	  };
	}

	return connect( mapStateToProps,null )(AuthRoutes);
}






