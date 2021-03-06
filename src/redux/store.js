import {logger} from "redux-logger/src";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./root.reducer";
import {persistStore} from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};
