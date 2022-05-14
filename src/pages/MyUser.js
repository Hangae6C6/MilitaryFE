//YJ

//마이페이지 메인, 아이콘, 프로필, 아이디, 이미지 등등

import React from "react";
import styled from "styled-components";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";

import Profile from "../component/user/Profile";

const MyUser = () => {
    return (
        <Wrap>
        <Box />
        <Profile />
        <Footer />
        <Navigation />
        </Wrap>
    )
}
const Wrap = styled.div`
  max-height: 812px;
  max-width: 375px;
  height: 812px;
  width: 100%;
  border: 2px solid #151419;
`;

const Box = styled.div`
width: 100px;
height:44px;
`
export default MyUser;