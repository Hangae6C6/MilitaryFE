import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { getCookie } from "../shared/cookie";

import {
  myPageIcon,
  clickedPageIcon,
  searchIcon,
  clickedSearchIcon,
  homeIcon,
  clickedHomeIcon,
} from "../shared/icons/icons";

const Navigation = ({ userId }) => {
  let token = getCookie("token");
  const [homeChecked, setHomeChecked] = React.useState(false);
  const [searchChecked, setSearchChecked] = React.useState(false);
  const [mypageChecked, setmypageChecked] = React.useState(false);


  return (

      <Nav>
        <Wrap>
          <Home>
            <HomeIcn
              src={homeChecked ? clickedHomeIcon : homeIcon}
              onClick={() => {
                setHomeChecked(true);
                window.location.pathname = "/";
              }}
            />
            <P>홈</P>
          </Home>
          <Home>
            <SearchIcn
              src={searchChecked ? clickedSearchIcon : searchIcon}
              onClick={() => {
                setSearchChecked(true);
                window.location.pathname = "/search";
              }}
            />
            <P>챌린지검색</P>
          </Home>
          <Home>
            {token ? (
              <>
                <MypageIcn
                  primary
                  src={mypageChecked ? clickedPageIcon : myPageIcon}
                  onClick={() => {
                    setmypageChecked(true);
                    history.push(`/mypage/${userId}`);
                    window.location.reload();
                  }}
                />
                <P>마이페이지</P>
              </>
            ) : (
              <>
                <MypageIcn
                  src={myPageIcon}
                  onClick={() => {
                    history.push(`/login`);
                    window.location.reload();
                  }}
                />
                <P>로그인</P>
              </>
            )}
          </Home>
        </Wrap>
      </Nav>
      
  );
};

export default Navigation;

const Nav = styled.div`
  margin-top: 82px;

`;

const Wrap = styled.div`
  max-width: 375px;
  width: 100%;
  height: ${(props) => (props.primary ? "80px" : "83px")};
  position: fixed;
  background-color: whitesmoke;
  bottom: ${(props) => (props.primary ? "0.25em" : "0.25em")};
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
  font-family: Gmarket Sans;
  font-size: 12px;
  padding: 0;
  margin: 0;
  text-align: center;
`;
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
