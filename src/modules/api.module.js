import { createAction, handleActions } from 'redux-actions';
import { put, takeLatest } from 'redux-saga/effects';

const initialState = {
  feeds: [],
  err: null,
};

const FEEDS_REQUEST = 'FEEDS_REQUEST';
const FEEDS_SUCCESS = 'FEEDS_SUCCESS';
const FEEDS_FAILURE = 'FEEDS_FAILURE';

export const requestFeeds = createAction(FEEDS_REQUEST, (id) => id);

function* requestFeedsSaga({ payload: id }) {
  try {
    yield put({ type: FEEDS_SUCCESS, payload: ['a', 'b'] });
  } catch (e) {
    yield put({ type: FEEDS_FAILURE, payload: { e } });
  }
}

export function* apiSaga() {
  yield takeLatest(FEEDS_REQUEST, requestFeedsSaga);
}

const apiReducer = handleActions(
  {
    [FEEDS_SUCCESS]: (state, { payload: feeds }) => ({
      ...state,
      feeds,
    }),
    [FEEDS_FAILURE]: (state, { payload: err }) => ({
      ...state,
      err,
    }),
  },
  initialState,
);

export default apiReducer;
