import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';

import {
  reducer,
  watchFeedsRequest,
  watchFeedsMoreRequest,
} from './feed.module';

const rootStore = combineReducers({ reducer });

export function* saga() {
  yield all([call(watchFeedsRequest), call(watchFeedsMoreRequest)]);
}

export default rootStore;
