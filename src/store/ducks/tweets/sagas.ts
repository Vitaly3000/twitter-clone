import { call, put, takeLatest } from 'redux-saga/effects';
import { setTweets, setTweetsLoadingState } from './actionCreators';

import { TweetsApi } from '../../../services/api/tweetsApi';
import { LoadingState, Tweet } from './contracts/state';
import { TweetsActionsType } from './contracts/actionsType';
export function* fetchTweetsRequest() {
  try {
    const items: Tweet[] = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}
