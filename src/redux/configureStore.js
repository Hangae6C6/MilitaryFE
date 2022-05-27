import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import mypage from "./modules/mypage";
import user from "./modules/user";
import challenge from "./modules/challenge";
import search from "./modules/search";
import main from "./modules/main";
import detail from "./modules/detail";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: user,
  search: search,
  challenge: challenge,
  card: main,
  mypage:mypage,
  challengeDetail:detail,

  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })]; 

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger"); 
  middlewares.push(logger);
}

//redux davTools 설정
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
