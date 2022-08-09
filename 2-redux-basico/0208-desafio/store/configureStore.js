import aluno from "./aluno.js";
import aulas from "./aulas.js";

const reducer = Redux.combineReducers({ aulas, aluno });

const store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
