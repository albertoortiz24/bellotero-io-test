import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
//import thunk from 'redux-thunk';

import { name, version } from '../../package.json';
import { rootEpic, rootReducer } from './rootReducer';

//const initialState = {count: 0};

const epicMiddleware = createEpicMiddleware();

let enhancer = compose(
  applyMiddleware(
    epicMiddleware,
  ),
);

enhancer = composeWithDevTools({ name: `${name} v${version}` })(enhancer);

const store = createStore(
  rootReducer,
  enhancer,
);

epicMiddleware.run(rootEpic);

export default store;
