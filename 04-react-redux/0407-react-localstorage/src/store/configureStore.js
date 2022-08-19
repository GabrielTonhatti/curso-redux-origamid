import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import contador from "./contador";
import login from "./login";
import localStorage from "./middleware/localStorage";
import modal from "./modal";
// import logger from "./middleware/logger";

const middleware = [...getDefaultMiddleware(), localStorage];
const reducer = combineReducers({ contador, modal, login });
const store = configureStore({ reducer, middleware });

export default store;
