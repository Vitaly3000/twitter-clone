import { LoadingStatus } from '../../../types';

export enum AddFormState {
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  LOADING = 'LOADING',
}
export interface Tweet {
  _id: string;
  createdAt: string;
  text: string;
  user: { fullname: string; username: string; avatarUrl: string };
}

export interface TweetsState {
  items: Tweet[];
  LoadingStatus: LoadingStatus;
  addFormState: AddFormState;
}
