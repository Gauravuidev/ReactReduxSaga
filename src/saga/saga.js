
import { put, takeEvery, call, takeLatest, all } from 'redux-saga/effects';
//const delay = (ms) => new Promise(res => setTimeout(res, ms))

// ...

// Our worker Saga: will perform the async increment task
export function* incrementAsync(data) {
//   yield delay(1000)
  yield put({ type: 'Increment_async', payload: data.payload })
}

export function* decrementAsync() {
      //yield delay(1000);
      let data = yield call(function() {
        let data = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        
        let adata = data.then(json => {
           return json;
        });
        return adata;
      });
      console.log(data, 'dldljd');
      yield put({ type: 'Decrement_async', payload: data[0].name})
    }

export function* loggedStatusAsync(data) {
  yield put({ type: 'loggedStatus_async', payload: data.payload})
} 
// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watch() {
  yield takeEvery('Increment', incrementAsync);
  yield takeLatest('Decrement', decrementAsync);
}

export function* noWatch() {
  yield takeEvery('loggedStatus', loggedStatusAsync)
}

export function* rootSaga() {
  yield all([
    watch(),
    noWatch()
  ])
}