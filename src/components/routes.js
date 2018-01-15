import { Route} from 'react-router-dom';
import React  from 'react';

import WelcomePage from '../containers/WelcomePage';

//item pages
import Itemcontainer from '../containers/item/item_container';
//user pages
import LoginPage from '../containers/user/LoginPage';
import RegisterPage from '../containers/user/RegisterPage';
import Profile from '../containers/user/profile';

//should be auth
import requiredAuth  from '../containers/AuthRoutes/authRoutes';
//should be guest
import requiredGuest from '../containers/AuthRoutes/guestRoutes';



export const Routes = (props) => {
	return(
		<div>
			<Route exact path="/" component={requiredAuth(WelcomePage)} />
			<Route exact path="/login" component={requiredGuest(LoginPage)} />
			<Route exact path="/register" component={requiredGuest(RegisterPage)} />
			<Route exact path="/profile" component={requiredAuth(Profile)} />
			<Route exact path="/items" component={requiredAuth(Itemcontainer)} />
		</div>
	);
}
