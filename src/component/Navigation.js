import React from "react";
import styled from "styled-components";
import homeIcn from "../shared/icons/Home.svg";
import searchIcn from "../shared/icons/Search.svg";
import mypageIcn from "../shared/icons/Mypage.svg";
import { history } from "../redux/configureStore";

const Navigation = ({ userId }) => {
  let cookie = document.cookie;
  return (
    <Nav>
      <Wrap>
        <Home>
          <HomeIcn
            src={homeIcn}
            onClick={() => {
              window.location.pathname = "/";
            }}
          />
          <P>홈</P>
        </Home>
        <Home>
          <SearchIcn
            src={searchIcn}
            onClick={() => {
              window.location.pathname = "/search/기타";
            }}
          />
          <P>검색</P>
        </Home>
        <Home>
          {cookie?
          <>
          <MypageIcn
            src={mypageIcn}
            onClick={() => {
              history.push(`/mypage/${userId}`);
              window.location.reload();
            }}
          />
          <P>마이페이지</P>
        </> : <><MypageIcn
        src={mypageIcn}
        onClick={() => {
          history.push(`/login`);
          window.location.reload();
        }}
      />
      <P>로그인</P></>
     }
     </Home>
          
      </Wrap>
    </Nav>
  );
};
const Nav = styled.div`
  margin-top:82px

`;

const Wrap = styled.div`
  max-width: 375px;
  width: 100%;
  height: 84px;
  position: fixed;
  background-color: whitesmoke;
  bottom: 0;
  z-index: 999;
  display: grid;
  border-top: 2px solid #151419;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Home = styled.div`
  margin: auto;
  text-align: center;
`;

const P = styled.p`
font-size: 10px;
padding: 0;
margin: 0;
text-align: center;
`
const HomeIcn = styled.img`
  width: 50%;
  cursor: pointer;
`;
const SearchIcn = styled.img`
  width: 50%;
  cursor: pointer;
`;
const MypageIcn = styled.img`
  width: 50%;
  cursor: pointer;
`;
export default Navigation;
