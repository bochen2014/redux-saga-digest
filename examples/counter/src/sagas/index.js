/* eslint-disable no-constant-condition */

import { put, call, fork, all,  takeEvery, delay } from 'redux-saga/effects'
import { debug } from 'util';


export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', function* () {
    yield all([
      takeEvery('SECOND', function* () {
        yield put({ type: 'THIRD' });
        console.log('******************THIRD action dispatched...')
      }),
      put({ type: 'SECOND' })
    ])
  })
}