import React from 'react';
import { connect } from 'react-redux';

export default function requiredGuest(AuthComponent) {
	class GuestRoute extends React.Component {
		componentWillMount() {
			if (this.props.isAuth) {
				this.props.history.push('/profile');
				
			}
		}
		componentWillUpdate(nextProps) {
			if (nextProps.isAuth) {
				this.props.history.push('/profile');
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

	return connect( mapStateToProps,null )(GuestRoute);
}






