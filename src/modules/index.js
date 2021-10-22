import { all } from '@redux-saga/core/effects';
import {combineReducers} from 'redux'
import auth, {authSaga} from './auth'
import loading from './loading';

// 프로젝트 루트 리듀서
const rootReducer = combineReducers({
    auth,
    loading, // 프로젝트 루트 리듀서에 modules/loading.js 코드(loading 리덕스 모듈 리듀서)를 등록한다.
});

// 프로젝트 루트 사가
export function* rootSaga() {
    yield all([authSaga()]);
}

export default rootReducer;