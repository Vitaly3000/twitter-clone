import { RootState } from '../../store';
import { Tweet } from '../tweets/contracts/state';
import { LoadingState, TweetState } from './contracts/state';

export const selectTweet = (state: RootState): TweetState => state.tweet;

export const selectTweetData = (state: RootState): Tweet | undefined =>
  selectTweet(state).data;

export const selectTweetLoadingState = (state: RootState): LoadingState =>
  selectTweet(state).loadingState;

export const selectIsTweetLoaded = (state: RootState): boolean =>
  selectTweetLoadingState(state) === LoadingState.LOADED;

export const selectIsTweetLoading = (state: RootState): boolean =>
  selectTweetLoadingState(state) === LoadingState.LOADING;
