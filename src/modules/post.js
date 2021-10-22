// 리덕스 모듈
import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {createRequestActionTypes,} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import {takeLatest} from 'redux-saga/effects';

// READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE 배열안에 
// 각각 createRequestActionTypes 함수를 넣어준다
const [
    READ_POST,
    READ_POST_SUCCESS,
    READ_POST_FAILURE,
] = createRequestActionTypes('post/READ_POST');
// 포스트 페이지 벗어날시 데이터 비우기
const UNLOAD_POST = 'post/UNLOAD_POST';  

export const readPost = createAction(READ_POST, id=>id);
export const unloadPost = createAction(UNLOAD_POST, id=>id);

const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost);
// Generator function : 사용자의 요구에 따라 다른 시간 간격으로 여러 값을 반환할 수 있으며, 
// 내부 상태를 관리할 수 있는 함수
// 단 한 번의 실행으로 함수의 끝까지 실행이 완료되는 일반 함수와는 달리,
// 제너레이터 함수는 사용자의 요구에 따라 (yield와 next를 통해) 
// 일시적으로 정지될 수도 있고, 다시 시작될 수도 있다.
// Iterator의 next() 메서드를 호출하면 Generator 함수가 실행되어 yield 문을 만날 때까지 진행
// yield* 표현식을 마주칠 경우, 다른 Generator 함수가 위임(delegate)되어 진행됩니다.
export function* postSaga(){
    yield takeLatest(READ_POST, readPostSaga);
}

const initialState = {
    post: null,
    error: null,
};

const post = handleActions(
    {
        [READ_POST_SUCCESS] : (state, {payload: post}) => ({
            ...state,
            post,
        }),
        [READ_POST_FAILURE] : (state, {payload: error}) => ({
            ...state,
            error,
        }),
        [UNLOAD_POST] : () => initialState,
    },
    initialState,
);

export default post;