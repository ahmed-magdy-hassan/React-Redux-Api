import React,{Component} from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

//get navigation bar
import Navigation from '../src/containers/navigation';
//get routes
import {Routes} from '../src/components/routes';

class MainApp extends Component{
	render(){
		return (
			<Router>
				<div>
					<Navigation/>
					<Routes  />
				</div>
			</Router>
		);
	}
}

export default MainApp;