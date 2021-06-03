import { LoginFormProps } from '../../../pages/SignIn/components/LoginModal';
import { RegisterFormProps } from '../../../pages/SignIn/components/RegisterModal';
import {
  FetchSignInActionInterface,
  FetchSignUpActionInterface,
  SetUserDataActionInterface,
  SetUserLoadingStateActionInterface,
  UserActionsType,
} from './contracts/actionsType';
import { UserState } from './contracts/state';

export const setUserData = (
  payload: UserState['data'],
): SetUserDataActionInterface => ({
  type: UserActionsType.SET_USER_DATA,
  payload,
});
export const fetchSignIn = (
  payload: LoginFormProps,
): FetchSignInActionInterface => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload,
});
export const fetchSignUp = (
  payload: RegisterFormProps,
): FetchSignUpActionInterface => ({
  type: UserActionsType.FETCH_SIGN_UP,
  payload,
});
export const setUserLoadingStatus = (
  payload: UserState['status'],
): SetUserLoadingStateActionInterface => ({
  type: UserActionsType.SET_LOADING_STATE,
  payload,
});
