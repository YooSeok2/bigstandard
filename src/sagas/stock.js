import axios from 'axios';
import { all, fork, put, takeLatest, call, throttle } from 'redux-saga/effects';
import {
    LOAD_STOCKS_REQUEST,
    LOAD_STOCKS_SUCCESS,
    LOAD_STOCKS_FAILURE,
    LOAD_RANKS_REQUEST,
    LOAD_RANKS_SUCCESS,
    LOAD_RANKS_FAILURE,
    LOAD_YEARS_REQUEST,
    LOAD_YEARS_SUCCESS,
    LOAD_YEARS_FAILURE,
    LOAD_QUARTERS_REQUEST,
    LOAD_QUARTERS_SUCCESS,
    LOAD_QUARTERS_FAILURE,
    LOAD_CAL_YEARS_REQUEST,
    LOAD_CAL_YEARS_SUCCESS,
    LOAD_CAL_YEARS_FAILURE,
    LOAD_CAL_QUARTERS_REQUEST,
    LOAD_CAL_QUARTERS_SUCCESS,
    LOAD_CAL_QUARTERS_FAILURE,
    LOAD_SKILLS_REQUEST,
    LOAD_SKILLS_SUCCESS,
    LOAD_SKILLS_FAILURE,
    LOAD_SUPPLYS_REQUEST,
    LOAD_SUPPLYS_SUCCESS,
    LOAD_SUPPLYS_FAILURE
} from 'reducers/stock';

function loadSupplysAPI (url) {
    return axios.get(url);
}

function* loadSupplys (action) {
    try {
        const result = yield call(loadSupplysAPI, action.url);
        yield put({
            type: LOAD_SUPPLYS_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_SUPPLYS_FAILURE,
            error: err.response.data
        });
    }
}

function* watchLoadSupplys () {
    yield takeLatest(LOAD_SUPPLYS_REQUEST, loadSupplys);
}

function loadSkillsAPI (url) {
    return axios.get(url);
}

function* loadSkills (action) {
    try {
        const result = yield call(loadSkillsAPI, action.url);
        yield put({
            type: LOAD_SKILLS_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_SKILLS_FAILURE,
            error: err.response.data
        });
    }
}

function* watchLoadSkills () {
    yield takeLatest(LOAD_SKILLS_REQUEST, loadSkills);
}

function loadCalYearsAPI (url) {
    return axios.get(url);
}

function* loadCalYears (action) {
    try {
        const result = yield call(loadCalYearsAPI, action.url);
        yield put({
            type: LOAD_CAL_YEARS_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_CAL_YEARS_FAILURE,
            error: err.response.data
        });
    }
}

function* watchLoadCalYears () {
    yield takeLatest(LOAD_CAL_YEARS_REQUEST, loadCalYears);
}


function loadCalQuartersAPI (url) {
    return axios.get(url);
}

function* loadCalQuarters (action) {
    try {
        const result = yield call(loadCalQuartersAPI, action.url);
        yield put({
            type: LOAD_CAL_QUARTERS_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_CAL_QUARTERS_FAILURE,
            error: err.response.data
        });
    }
}

function* watchLoadCalQuarters () {
    yield takeLatest(LOAD_CAL_QUARTERS_REQUEST, loadCalQuarters);
}

function loadQuartersAPI (url) {
    return axios.get(url);
}

function* loadQuarters (action) {
    try {
        const result = yield call(loadQuartersAPI, action.url);
        yield put({
            type: LOAD_QUARTERS_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_QUARTERS_FAILURE,
            error: err.response.data
        });
    }
}

function* watchLoadQuarters () {
    yield takeLatest(LOAD_QUARTERS_REQUEST, loadQuarters);
}

function loadYearsAPI (url) {
    return axios.get(url);
}

function* loadYears (action) {
    try {
        const result = yield call(loadYearsAPI, action.url);
        yield put({
            type: LOAD_YEARS_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_YEARS_FAILURE,
            error: err.response.data
        });
    }
}

function* watchLoadYears () {
    yield takeLatest(LOAD_YEARS_REQUEST, loadYears);
}


function loadStocksAPI () {
    return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/stocks`);
}

function* loadStocks (action) {
    try {
        const result = yield call(loadStocksAPI, action.data);
        yield put({
            type: LOAD_STOCKS_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_STOCKS_FAILURE,
            error: err.response.data
        });
    }
}

function* watchLoadStocks () {
    yield takeLatest(LOAD_STOCKS_REQUEST, loadStocks);
}

function loadRanksAPI (data) {
    return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/ranks?offset=${data.offset}&limit=20`);
}

function* loadRanks (action) {
    const result = yield call(loadRanksAPI, action.data);
    try {
        yield put({
            type: LOAD_RANKS_SUCCESS,
            data: result.data.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_RANKS_FAILURE,
            error: err.response.data
        });
    }
}

function* watchLoadRanks () {
    yield throttle(2000, LOAD_RANKS_REQUEST, loadRanks);
}

export default function* stockSage () {
    yield all([
        fork(watchLoadStocks),
        fork(watchLoadRanks),
        fork(watchLoadYears),
        fork(watchLoadQuarters),
        fork(watchLoadCalYears),
        fork(watchLoadCalQuarters),
        fork(watchLoadSkills),
        fork(watchLoadSupplys)
    ]);
}