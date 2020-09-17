import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  // key "form" is required
  form: formReducer
});
