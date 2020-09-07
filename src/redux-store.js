import thunkMiddleware from "redux-thunk";

const {
  combineReducers,
  compose,
  createStore,
  applyMiddleware,
} = require("redux");

let reducers = combineReducers({});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(compose(applyMiddleware(thunkMiddleware)))
);

window.store = store;

export default store;
