

const KAKAO_CLIENT_ID = "c1ba7eb9cd1e7e5b3b927bed7774ebfc";
const KAKAO_REDIRECT_URL = "http://localhost:3000/api/auth/kakao/callback";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;

const NAVER_CLIENT_ID = "x1FD5NzCzm56Wu2AfT69"
const state = Math.random().toString(36).substring(2, 11);
const NAVER_CALLBACK_URL = "http://localhost:3000/api/auth/naver/callback";
export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_CALLBACK_URL}&state=${state}`


//  "https://nid.naver.com/oauth2.0/authorize?response_type=code&redirect_uri=https%3A%2F%2F2k1.shop%2Fapi%2Fauth_naver%2Foauth&client_id=pDmnerWgsXOSSsgzvfim";

const GOOGLE_CLIENT_ID = "";
const GOOGLE_REDIRECT_URI = "http://13.125.228.240/api/google/login";
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_ur=${GOOGLE_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;

