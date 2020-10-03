import { combineReducers } from 'redux';
import { call } from 'redux-saga/effects';

import { feedReducer, watchFeedsRequest } from './feed.module';

const rootStore = combineReducers({ 
  feedReducer
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export function* saga() {
  yield call(watchFeedsRequest);
}

export default rootStore;
