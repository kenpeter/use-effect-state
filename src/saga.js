import {all, call, put, takeEvery} from 'redux-saga/effects';

function* getItems() {
  //const endpoint = 'https://jsonplaceholder.typicode.com/todos/1';
  const endpoint = 'http://sdfds';
  const response = yield call(fetch, endpoint);
  const items = yield response.json();
  yield put({type: 'ITEMS_GET_SUCCESS', items: items});
}

export function* getItemsSaga() {
  yield takeEvery('ITEMS_GET', getItems);
}

export default function* rootSaga() {
  yield all([getItemsSaga()]);
}
