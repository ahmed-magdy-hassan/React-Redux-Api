import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import SetAuthToken from '../src/containers/jwt/setAuthToken';

import {Set_Current_User} from '../src/actions/AuthActions';

import './css/index.css';
import MainApp from './MainApp';

if(localStorage.jwtToken){
	SetAuthToken(localStorage.jwtToken);
	store.dispatch(Set_Current_User(localStorage.UserObject));
}

ReactDOM.render(
	<Provider store={store}>
		<MainApp/>
	</Provider>
	, document.getElementById('root')
);
