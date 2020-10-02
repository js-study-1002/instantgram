import { combineReducers } from 'redux';
import { call } from 'redux-saga/effects';

import { reducer, watchFeedsRequest } from './feed.module';

const rootStore = combineReducers({ reducer });

export function* saga() {
  yield call(watchFeedsRequest);
}

export default rootStore;
