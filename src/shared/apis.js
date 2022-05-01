import axios from "axios";
import { getCookie } from "./cookie";


export const apis = axios.create({
  baseURL: "13.125.228.240", //운영 서버 주소
});


apis.interceptors.request.use(function (config) {
  const token = getCookie("token");
  config.headers["Content-Type"] = "application/json;charset=UTF-8; charset=UTF-8";
  config.headers.common["authorization"] = `Bearer ${token}`;
  return config;
});


export const userApis = {
  //로그인요청
  login: (email, password) => apis.post("/auth/signin", { email, password }),

  // 회원가입 요청
  signup: (signup) => apis.post("/auth/signup", signup),

  //이메일 인증 (아이디 중복체크)
  emailCheck: (email) =>
    apis.post("/auth/email-check", {
      email: email,
    }),

  //닉네임 중복체크
  nicknameCheck: (nickname) => apis.post("/auth/nickname-check", { nickname: nickname }),

  //로그인 유저 확인
  useInfo: () => apis.get("/auth/user-info"),

  //알림
  getNotice: () => apis.get("/notice"),

  //인증 메일 확인
  emailCheckToken: () => apis.get("/auth/check-email-token"),

  //인증 메일 재전송
  emailCheckResend: (email) => apis.post("/auth/resend-check-email", email),

  //임시 비밀번호 발급
  tempPasswordSend: (email) => apis.post("/auth/send-temp-password", email),

  // 소셜로그인(카카오)
  loginByKakao: (code) => apis.get(`/auth/kakao/callback?code=${code}`),
};