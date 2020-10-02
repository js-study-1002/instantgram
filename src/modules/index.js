import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import apiReducer, { apiSaga } from './api.module';

const rootReducer = combineReducers({ apiReducer });

export function* rootSaga() {
  yield all([apiSaga()]);
}

export default rootReducer;
