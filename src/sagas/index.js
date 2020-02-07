import { all, fork } from 'redux-saga/effects';
import user from 'containers/App/sagas';

export default function* root() {
  yield all([fork(user)]);
}
