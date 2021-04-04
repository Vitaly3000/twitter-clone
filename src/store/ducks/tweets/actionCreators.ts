import {
  AddTweetActionType,
  FetchAddTweetActionType,
  FetchTweetsActionInterface,
  SetAddFormStateActionInterface,
  SetTweetsActionInterface,
  SetTweetsLoadingStateActionInterface,
  TweetsActionsType,
} from './contracts/actionsType';
import {
  AddFormState,
  LoadingState,
  Tweet,
  TweetsState,
} from './contracts/state';

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
export const setAddFormState = (
  payload: AddFormState,
): SetAddFormStateActionInterface => ({
  type: TweetsActionsType.SET_ADD_FORM_STATE,
  payload,
});
export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
});
