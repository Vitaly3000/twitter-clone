import { call, put, takeLatest } from 'redux-saga/effects';
import {
  addTweet,
  setAddFormState,
  setTweets,
  setTweetsLoadingState,
} from './actionCreators';

import { TweetsApi } from '../../../services/api/tweetsApi';
import { AddFormState, LoadingState, Tweet } from './contracts/state';
import {
  FetchAddTweetActionType,
  TweetsActionsType,
} from './contracts/actionsType';
export function* fetchTweetsRequest() {
  try {
    const items: Tweet[] = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}
export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionType) {
  const data = {
    _id: Math.random().toString(36).substring(2),
    text: payload,
    user: {
      fullname: 'vitaly Web',
      username: 'Vitaly228',
      avatarUrl: 'https://source.unsplash.com/random',
    },
  };
  try {
    const item: Tweet = yield call(TweetsApi.addTweet, data);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setAddFormState(AddFormState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
