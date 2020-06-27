import { combineReducers } from "redux";

import languageReducer from "./language";
import themeReducer from "./theme";
import authReducer from "./auth";
import requestReducer from "./request";
import appReducer from "./app";

const rootReducer = combineReducers({
  language: languageReducer,
  theme: themeReducer,
  auth: authReducer,
  request: requestReducer,
  app: appReducer,
});

export default rootReducer;
