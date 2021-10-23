import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import user, { userSaga } from "./user";
import write, { writeSaga } from "./write";

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
});

// all([authSaga(), userSaga()]) 을 반환, 함수 재호출 시 다음 auth 에 대한 처리를 진행한다.
export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga()]);
}

export default rootReducer;
