import client from "./client";

/*
회원 인증 관련 api
각 기능 별로 함수화
*/

// 로그인
export const login = ({username, password}) => client.post('/api/auth/login', {username, password});

// 회원가입
export const register = ({username, password}) => client.post('api/auth/register', {username, password});

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');