import axios from "axios";

//set header 
export default function SetAuthToken (token){
	if (token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	}else{
		delete axios.defaults.headers.common['Authorization'];
	}
}