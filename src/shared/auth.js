const KAKAO_CLIENT_ID = "c1ba7eb9cd1e7e5b3b927bed7774ebfc";
const KAKAO_REDIRECT_URL = "http://13.125.228.240/api/kakao/login";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_url=${KAKAO_REDIRECT_URL}&response_type=code`;


const NAVER_CLIENT_ID = "x1FD5NzCzm56Wu2AfT69"
const NAVER_REDIRECT_URL = "http://13.125.228.240/api/naver/login";
export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&redirect_url=${NAVER_REDIRECT_URL}&response_type=code`

const GOOGLE_CLIENT_ID = "";
const GOOGLE_REDIRECT_URL = "http://13.125.228.240/api/google/login";
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_url=${GOOGLE_REDIRECT_URL}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;

