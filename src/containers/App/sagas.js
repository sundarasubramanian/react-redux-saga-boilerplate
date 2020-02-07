import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './constants';
import { apiFetch } from 'utils/fetch-utils';

export function* employees() {
  const employeesDtails = yield apiFetch('/api/v1/employees', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
  yield put({
    type: ActionTypes.EMPLOYEES_DETAILS,
    payload: { employeesDtails },
  });
}

export default function* root() {
  yield all([takeLatest(ActionTypes.GET_EMPLOYEES_DETAILS, employees)]);
}
