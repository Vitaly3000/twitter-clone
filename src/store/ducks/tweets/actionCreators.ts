import {
  AddTweetActionType,
  FetchAddTweetActionType,
  FetchTweetsActionInterface,
  SetTweetsActionInterface,
  SetTweetsLoadingStateActionInterface,
  TweetsActionsType,
} from './contracts/actionsType';
import { LoadingState, Tweet, TweetsState } from './contracts/state';

export const setTweets = (
  payload: TweetsState['items'],
): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});
export const setTweetsLoadingState = (
  payload: LoadingState,
): SetTweetsLoadingStateActionInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});
export const fetchAddTweet = (payload: string): FetchAddTweetActionType => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload,
});
export const addTweet = (payload: Tweet): AddTweetActionType => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
});
export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
});
