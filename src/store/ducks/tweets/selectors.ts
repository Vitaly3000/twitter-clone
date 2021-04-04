import { RootState } from '../../store';

import { AddFormState, LoadingState, TweetsState } from './contracts/state';

export const selectTweets = (state: RootState): TweetsState => state.tweets;
export const selectTweetsItems = (state: RootState): TweetsState['items'] =>
  selectTweets(state).items;




export const selectTweetsLoadingState = (state: RootState): LoadingState =>
  selectTweets(state).loadingState;
export const selectIsTweetsLoaded = (state: RootState): boolean =>
  selectTweetsLoadingState(state) === LoadingState.LOADED;
export const selectIsTweetsLoading = (state: RootState): boolean =>
  selectTweetsLoadingState(state) === LoadingState.LOADING;

export const selectAddTweetState = (state: RootState): AddFormState =>
  selectTweets(state).addFormState;
