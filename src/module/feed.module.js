// import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';
import { requestFeeds } from '../lib/api/api.instantgram';

const FEEDS_REQUEST = 'FEEDS_REQUEST';
const FEEDS_SUCCESS = 'FEEDS_SUCCESS';
const FEEDS_FAILURE = 'FEEDS_FAILURE';

export const feedsRequest = (fields) => ({
  type: FEEDS_REQUEST,
  payload: fields,
});
const feedsSuccess = ({ data: feeds }) => ({
  type: FEEDS_SUCCESS,
  feeds,
});
const feedsFailure = () => ({
  type: FEEDS_FAILURE,
});

const initialState = {
  feeds: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FEEDS_REQUEST:
      return state;
    case FEEDS_SUCCESS:
      return { ...state, feeds: action.feeds };
    case FEEDS_FAILURE:
      return state;
    default:
      return { ...state };
  }
};

function* feedsRequestSaga(fields) {
  try {
    const { data } = yield call(requestFeeds, fields);
    yield put(feedsSuccess(data));
  } catch (error) {
    console.error(error);
    yield put(feedsFailure());
  }
}

export function* watchFeedsRequest() {
  yield takeLatest(FEEDS_REQUEST, feedsRequestSaga);
}
