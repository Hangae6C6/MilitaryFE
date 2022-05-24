//YJ

//마이페이지 메인, 아이콘, 프로필, 아이디, 이미지 등등

import React, { useEffect } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { message } from "antd";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import { history } from "../redux/configureStore";

import Profile from "../component/user/Profile";

const MyUser = () => {
  let cookie = document.cookie;

  useEffect(() => {
    if (!cookie) {
      toast.error("로그인 후 이용해주세요!", { position: "top-center" });
      history.replace("/");
      window.location.reload();

      return;
    }
  }, []);

  return (
    <Wrap>
      <Profile />
      <Footer />
      <Navigation />
      {/* <ToastContainer /> */}

      {/* <Modal open={isOpen} onClose={() => setIsOpen(false)}>정말 나가시겠습니까?</Modal> */}
    </Wrap>
  );
};
const Wrap = styled.div`
  max-width: 375px;
  width: 100%;
  background-color: #fff;
  border: 2px solid #151419;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  height: 100%;
  /* width: 100%; */
  border: 2px solid #151419;
`;

export default MyUser;
