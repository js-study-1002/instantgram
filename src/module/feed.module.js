import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';
import dotenv from 'dotenv';

dotenv.config();

const { REACT_APP_ACCESS_TOKEN } = process.env;

const MY_MEDIA_URL =
  'https://graph.instagram.com/me/media?fields=id,media_url,permalink&access_token=';

const FEEDS_REQUEST = 'FEEDS_REQUEST';
const FEEDS_SUCCESS = 'FEEDS_SUCCESS';
const FEEDS_FAILURE = 'FEEDS_FAILURE';

export const feedsRequest = () => ({
  type: FEEDS_REQUEST,
});
const feedsSuccess = (data) => ({
  type: FEEDS_SUCCESS,
  data,
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
      return { ...state };
    case FEEDS_SUCCESS:
      return { ...state, feeds: action.data };
    case FEEDS_FAILURE:
      return { ...state };
    default:
      return { ...state };
  }
};

function feedsRequestAPI() {
  return axios.get(`${MY_MEDIA_URL}${REACT_APP_ACCESS_TOKEN}`);
}

function* feedsRequestSaga() {
  try {
    const {
      data: { data },
    } = yield feedsRequestAPI();
    yield put(feedsSuccess(data));
  } catch (error) {
    console.error(error);
    yield put(feedsFailure());
  }
}

export function* watchFeedsRequest() {
  yield takeLatest(FEEDS_REQUEST, feedsRequestSaga);
}
