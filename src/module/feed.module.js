import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

const FEEDS_REQUEST = 'FEEDS_REQUEST';
const FEEDS_SUCCESS = 'FEEDS_SUCCESS';
const FEEDS_FAILURE = 'FEEDS_FAILURE';

export const feedsRequest = (fields, access_token) => ({
  type: FEEDS_REQUEST,
  fields,
  access_token,
});

export const feedRequest = () => ({
  
});

const feedsSuccess = result => ({
  type: FEEDS_SUCCESS,
  payload: {
    feeds: result.data,
  }
});
const feedsFailure = () => ({
  type: FEEDS_FAILURE,
});

const initialState = {
  feeds: [],
  paging: {
    before: '',
    after: '',
  }
};

export const feedReducer = (state = initialState, action) => {
  const { type, payload} = action;
  switch (type) {
    case FEEDS_REQUEST:
      return state;
    case FEEDS_SUCCESS:
      return state = {
        ...state,
        feeds: payload.feeds,
      };
    case FEEDS_FAILURE:
      return state;
    default:
      return { ...state };
  }
};

function feedsRequestAPI() {
  return axios('https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&access_token=IGQVJWSFJkTDl3RXptRk5XMEhCOUkwQndMTDBJS3hwbWVpYWhlVEI5ck1XT0dULWE1NEZAreUJnQ3dIdGlWZAFNXMkRUYmhPNXhKYXA5c2JjeVp3aFljYVhncXhhc1lQOU5ud093cmpqZAmp4SlF5czNCbQZDZD');
}

function* feedsRequestSaga(action) {
  const accessToken = action.payload;
  try {
    const result = yield call(feedsRequestAPI, accessToken);
    yield put(feedsSuccess(result.data));
  } catch (error) {
    console.error(error);
    yield put(feedsFailure());
  }
}

export function* watchFeedsRequest() {
  yield takeLatest(FEEDS_REQUEST, feedsRequestSaga);
}
