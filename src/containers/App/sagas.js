import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import { apiFetch } from 'utils/fetch-utils';
import {removeCookie} from 'utils/session-utils'
export function* logout() {
  // const logoutStatus = yield apiFetch('/auth/logout', {
  //   method: 'GET',
  // }).then(response => response);
  // console.log(logoutStatus)
  // if(logoutStatus.status&&logoutStatus.ok){
    removeCookie();
    yield put({
      type: ActionTypes.SUCCESS_LOGOUT,
    });
  // }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.USER_LOGOUT, logout)]);
}
