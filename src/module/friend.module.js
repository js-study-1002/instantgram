import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

const FRIENDS_REQUEST = 'FRIENDS_REQUEST';
const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
const FRIENDS_FAILURE = 'FRIENDS_FAILURE';

// const FRIENDS_REQUEST = 'FRIENDS_REQUEST';
// const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
// const FRIENDS_FAILURE = 'FRIENDS_FAILURE';

const MY_FRIEND_URL = `/userList.json`;

const friendsRequestAPI = () => axios.get(MY_FRIEND_URL);

export const friendsRequest = () => ({
  type: FRIENDS_REQUEST,
});

const friendsSuccess = (data) => ({
  type: FRIENDS_SUCCESS,
  data,
});

const friendsFailure = () => ({
  type: FRIENDS_FAILURE,
});

const initialState = {
  friends: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FRIENDS_REQUEST:
      return state;
    case FRIENDS_SUCCESS:
      return { ...state, friends: action.data };
    case FRIENDS_FAILURE:
      return state;
    default:
      return state;
  }
};

function* friendsRequestSaga() {
  try {
    const {
      data: { data },
    } = yield friendsRequestAPI();
    yield put(friendsSuccess(data));
  } catch (error) {
    console.error(error);
    yield put(friendsFailure());
  }
}

export function* watchFriendsRequest() {
  yield takeLatest(FRIENDS_REQUEST, friendsRequestSaga);
}
