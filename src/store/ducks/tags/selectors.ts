import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingState, TagsState } from './contracts/state';

export const selectTags = (state: RootState): TagsState => state.tags;
export const selectTagsItems = createSelector(
  selectTags,
  (tags) => tags.items,
);

export const selectTagsLoadingState = (state: RootState): LoadingState =>
  selectTags(state).loadingState;
export const selectIsTagsLoaded = (state: RootState): boolean =>
  selectTagsLoadingState(state) === LoadingState.LOADED;
export const selectIsTagsLoading = (state: RootState): boolean =>
  selectTagsLoadingState(state) === LoadingState.LOADING;
