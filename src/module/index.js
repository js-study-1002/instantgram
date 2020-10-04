import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';

import {
  reducer as feedReducer,
  watchFeedsRequest,
  watchFeedsMoreRequest,
} from './feed.module';
import { reducer as uiReducer } from './ui.module';

import { reducer as friendReducer, watchFriendsRequest } from './friend.module';

const rootStore = combineReducers({
  feed: feedReducer,
  friend: friendReducer,
  ui: uiReducer,
});

export function* saga() {
  yield all([
    call(watchFeedsRequest),
    call(watchFeedsMoreRequest),
    call(watchFriendsRequest),
  ]);
}

export default rootStore;
