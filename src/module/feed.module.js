import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';
import dotenv from 'dotenv';

dotenv.config();

const { REACT_APP_ACCESS_TOKEN } = process.env;

const MY_MEDIA_URL =
  'https://graph.instagram.com/me/media?fields=id,media_url,permalink,username,thumbnail_url,caption,media_type&access_token=';

const FEEDS_REQUEST = 'FEEDS_REQUEST';
const FEEDS_SUCCESS = 'FEEDS_SUCCESS';
const FEEDS_FAILURE = 'FEEDS_FAILURE';

const FEEDS_MORE_REQUEST = 'FEEDS_MORE_REQUEST';
const FEEDS_MORE_SUCCESS = 'FEEDS_MORE_SUCCESS';
const FEEDS_MORE_FAILURE = 'FEEDS_MORE_FAILURE';

export const feedsRequest = (token) => ({
  type: FEEDS_REQUEST,
  token,
});
const feedsSuccess = (data, next) => ({
  type: FEEDS_SUCCESS,
  data,
  next,
});
const feedsFailure = () => ({
  type: FEEDS_FAILURE,
});

export const feedsMoreRequest = (next) => ({
  type: FEEDS_MORE_REQUEST,
  next,
});
const feedsMoreSuccess = (data, next) => ({
  type: FEEDS_MORE_SUCCESS,
  data,
  next,
});
const feedsMoreFailure = () => ({
  type: FEEDS_MORE_FAILURE,
});

const initialState = {
  feeds: [],
  feedsLoading: false,
  next: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FEEDS_REQUEST:
      return { ...state, feedsLoading: true, token: action.token };
    case FEEDS_SUCCESS:
      return { feeds: action.data, next: action.next, feedsLoading: false };
    case FEEDS_FAILURE:
      return { ...state, feedsLoading: false };
    case FEEDS_MORE_REQUEST:
      return { ...state, feedsLoading: true };
    case FEEDS_MORE_SUCCESS:
      return {
        feeds: [...state.feeds, ...action.data],
        next: action.next,
        feedsLoading: false,
      };
    case FEEDS_MORE_FAILURE:
      return { ...state, feedsLoading: false };
    default:
      return state;
  }
};

function feedsRequestAPI(token = REACT_APP_ACCESS_TOKEN) {
  return axios.get(`${MY_MEDIA_URL}${token}`);
}

function* feedsRequestSaga({ token }) {
  try {
    const {
      data: { data, paging },
    } = yield feedsRequestAPI(token);
    yield put(feedsSuccess(data, paging.next));
  } catch (error) {
    console.error(error);
    yield put(feedsFailure());
  }
}

export function* watchFeedsRequest() {
  yield takeLatest(FEEDS_REQUEST, feedsRequestSaga);
}

function feedsMoreRequestAPI(nextUrl) {
  return axios.get(nextUrl);
}

function* feedsMoreRequestSaga(action) {
  try {
    const {
      data: { data, paging },
    } = yield feedsMoreRequestAPI(action.next);
    yield put(feedsMoreSuccess(data, paging.next));
  } catch (error) {
    console.error(error);
    yield put(feedsMoreFailure());
  }
}

export function* watchFeedsMoreRequest() {
  yield takeLatest(FEEDS_MORE_REQUEST, feedsMoreRequestSaga);
}
