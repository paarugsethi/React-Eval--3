import {applyMiddleware, combineReducers, createStore} from "redux";
import appReducer from "./app/appReducer";
import thunk from "redux-thunk"
import { authReducer } from "./auth/authReducer";

const rootReducer = combineReducers({auth: authReducer, app: appReducer})

export const store = createStore(rootReducer, applyMiddleware(thunk));