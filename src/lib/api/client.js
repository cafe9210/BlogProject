import axios from "axios";

// axios 인스턴스 생성
const client = axios.create();


/* 
// api 주소 설정
client.defaults.baseURL="https://external-api-server.com/";

// 헤더 설정
client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

// 인터셉터 설정
axios.intercepter.response.use(
    response => {
        // 요청 성공 처리
        return response;
    },
    error=>{
        // 요청 실패 처리
        return Promise.reject(error);
    }
)
*/
export default client; 