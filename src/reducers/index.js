import { combineReducers } from "redux";
import bikes from "./bikes";
import login from "./login"
import message from "./message";


export default combineReducers({ bikes, login, message });
