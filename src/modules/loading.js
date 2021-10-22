/* 
loading 리덕스 모듈 코드(리듀서 역할)
해당 리듀서를 프로젝트 루트 리듀서에 등록.
redux-saga를 통해 보다 쉽게 api 요청하기 위함.
*/
import { createAction, handleActions } from "redux-actions";

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

// 요청을 위한 액션 타입을 payload로 설정. ex) sample/GET_POST
// payload가 뭐지???

export const startLoading = createAction(
    START_LOADING,
    requestType => requestType,
)

export const finishLoding = createAction(
    FINISH_LOADING,
    requestType => requestType,
)

const initialState = {};

const loading = handleActions(
    {
        [START_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),
        [FINISH_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: false,
        }),
    },
    initialState,
);

export default loading;