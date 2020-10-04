import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';

import {
  reducer,
  watchFeedsRequest,
  watchFeedsMoreRequest,
} from './feed.module';
import {
  reducer as uiReducer,
} from './ui.module';

const rootStore = combineReducers({ reducer, uiReducer });

export function* saga() {
  yield all([call(watchFeedsRequest), call(watchFeedsMoreRequest)]);
}

export default rootStore;
