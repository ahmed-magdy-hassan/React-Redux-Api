import isEmpty from 'lodash/isEmpty';
const Auth = {
    is_loggedin : false,
    user_data   : {}
};
const AuthReducer = (state = Auth, action) =>{
    switch (action.type) {
        case "SET_CURRENT_USER":
              state = {
                is_loggedin: !isEmpty(action.payload),
                user_data: action.payload
            };
            break;
        default:
            return state;
    }
    return state;
};

export default AuthReducer;
