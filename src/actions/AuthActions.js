import axios from "axios";
import SetAuthToken from '../containers/jwt/setAuthToken';
export function RegisterUser(user){
	return (dispatch)=>{
		return axios.post('http://127.0.0.1:8000/api/user/register', {
			   		name: user.name,
					email: user.email,
					password: user.password,
			  },
			  {
			  	 headers: {'Accept': 'application/json'}
			  }
			  )
			  .catch(function (error) {
			    console.log(error.response);
			  });
	};
}

export function Login(user,history) {
	return (dispatch)=>{
			return axios.post('http://127.0.0.1:8000/api/user/login', {
					email: user.email,
					password: user.password
			  },
			  {
			  	 headers: {'Accept': 'application/json'}
			  }
			  )
			  .then(function (response) {
			  	var user = response.data.user;
			    var token = response.data.token;
			    localStorage.setItem('jwtToken',token);
			    SetAuthToken(token);
			    localStorage.setItem('UserObject', JSON.stringify(user));
			    dispatch(Set_Current_User(user));
			 	history.push('/profile');
			    
			  })
			  .catch(function (error) {
			    console.log(error.response);
			});

	};
}

export function Set_Current_User(user) {
	return {
		type: 'SET_CURRENT_USER',
		payload: user
	}
}

export function Logout() {
	return dispatch =>{
		localStorage.removeItem('jwtToken');
		localStorage.removeItem('UserObject');
		localStorage.removeItem('items');
		SetAuthToken(false);
		dispatch(Set_Current_User({}));
	}
}
