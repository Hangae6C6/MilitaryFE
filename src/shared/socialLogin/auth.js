
const KAKAO_CLIENT_ID = "c1ba7eb9cd1e7e5b3b927bed7774ebfc";
const KAKAO_REDIRECT_URL = "https://soldierchallengers.com/api/auth/kakao/callback";
// const KAKAO_REDIRECT_URL = "http://localhost:3000/api/auth/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;
