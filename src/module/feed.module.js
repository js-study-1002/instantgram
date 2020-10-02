// import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

const FEEDS_REQUEST = 'FEEDS_REQUEST';
const FEEDS_SUCCESS = 'FEEDS_SUCCESS';
const FEEDS_FAILURE = 'FEEDS_FAILURE';

export const feedsRequest = () => ({
  type: FEEDS_REQUEST,
});
const feedsSuccess = () => ({
  type: FEEDS_SUCCESS,
});
const feedsFailure = () => ({
  type: FEEDS_FAILURE,
});

const initialState = {
  feeds: [],
};

export const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case FEEDS_REQUEST:
      return state;
    case FEEDS_SUCCESS:
      return state;
    case FEEDS_FAILURE:
      return state;
    default:
      return { ...state };
  }
};

function feedsRequestAPI() {
  //   return axios('');
}

function* feedsRequestSaga() {
  try {
    // const result = yield feedsRequestAPI();
    yield put(feedsSuccess());
  } catch (error) {
    console.error(error);
    yield put(feedsFailure());
  }
}

export function* watchFeedsRequest() {
  yield takeLatest(FEEDS_REQUEST, feedsRequestSaga);
}
