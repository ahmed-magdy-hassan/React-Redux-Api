import { createStore , combineReducers , applyMiddleware} from "redux";
import thunck from "redux-thunk";
import logger from "redux-logger";

//import reduceres
import AuthReducer from "../src/reduceres/AuthReducer";
import ItemReducer from "../src/reduceres/ItemReducer";


const store = createStore(
    combineReducers({AuthReducer,ItemReducer}),
    {},
    applyMiddleware(logger,thunck)
);

export default store;