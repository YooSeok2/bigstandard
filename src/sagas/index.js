import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import stockSaga from './stock';

axios.defaults.withCredentials = false;

export default function* rootSaga () {
    yield all([
        fork(stockSaga)
    ]);
}
