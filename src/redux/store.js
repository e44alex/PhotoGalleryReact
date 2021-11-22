import { reducer } from './reducers/reducer'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import { helloSaga } from './sagas/saga'
import { applyMiddleware, createStore } from 'redux'

const sagaMiddleware = createSagaMiddleware()

export const history = createBrowserHistory() // export history to manage router history

export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(helloSaga)

// const action = type => store.dispatch({type});
