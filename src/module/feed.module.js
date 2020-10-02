// import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';
import * as API from '../api';

const FEEDS_REQUEST = 'FEEDS_REQUEST';
const FEEDS_SUCCESS = 'FEEDS_SUCCESS';
const FEEDS_FAILURE = 'FEEDS_FAILURE';

export const feedsRequest = () => ({
  type: FEEDS_REQUEST,
});
const feedsSuccess = (feeds) => ({
  type: FEEDS_SUCCESS,
  payload: feeds,
});
const feedsFailure = () => ({
  type: FEEDS_FAILURE,
});

const initialState = {
  feeds: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FEEDS_REQUEST:
      return state;
    case FEEDS_SUCCESS:
      return { ...state, feeds: payload };
    case FEEDS_FAILURE:
      return state;
    default:
      return { ...state };
  }
};

function* feedsRequestSaga() {
  try {
    const { data } = yield API.getList();
    yield put(feedsSuccess(data.data));
  } catch (error) {
    console.error(error);
    yield put(feedsFailure());
  }
}

export function* watchFeedsRequest() {
  yield takeLatest(FEEDS_REQUEST, feedsRequestSaga);
}
