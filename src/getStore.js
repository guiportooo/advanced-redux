import { createStore, applyMiddleware } from 'redux';

import { users } from './../server/db';

import { getDefaultState } from './../server/getDefaultState';

import { initializeDB } from './../server/db/initializeDB';

import { createLogger } from 'redux-logger';

initializeDB();

import { reducer } from './reducers';

const currentUser = users[0];
const defaultState = getDefaultState(currentUser);
const store = createStore(
  reducer,
  defaultState,
  applyMiddleware(
    createLogger({
      stateTransformer: state => state.toJS(),
    })
  )
);

export const getStore = () => store;
