import { combineReducers } from "redux";

import counter from "./counter";
import isLogged from "./isLogged";

// export combined reducers
export default combineReducers({ counter, isLogged });
