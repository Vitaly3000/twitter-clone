import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingState, TweetsState } from './contracts/state';

export const selectTweets = (state: RootState): TweetsState => state.tweets;
export const selectTweetsItems = createSelector(
  selectTweets,
  (tweets) => tweets.items,
);

export const selectTweetsLoadingState = (state: RootState): LoadingState =>
  selectTweets(state).loadingState;
export const selectIsTweetsLoaded = (state: RootState): boolean =>
  selectTweetsLoadingState(state) === LoadingState.LOADED;
export const selectIsTweetsLoading = (state: RootState): boolean =>
  selectTweetsLoadingState(state) === LoadingState.LOADING;
