import React from "react";
import styled from "styled-components";
import homeIcn from "../shared/icons/Home.svg";
import searchIcn from "../shared/icons/Search.svg";
import mypageIcn from "../shared/icons/Mypage.svg";

import { history } from "../redux/configureStore";

const Navigation = ({userId}) => {
  return (
    <Nav>
      <Wrap>
        <Home>
          <HomeIcn
            src={homeIcn}
            onClick={() => {
              history.push("/");
            }}
          />
        </Home>
        <Search>
          <SearchIcn src={searchIcn} />
        </Search>
        <Mypage>
          <MypageIcn
            src={mypageIcn}
            onClick={(id) => {
              history.push(`/mypage/${userId}`);
              window.location.reload();
            }}
          />
        </Mypage>
      </Wrap>
    </Nav>
  );
};
const Nav = styled.div`
  margin: auto;
  display: grid;
`;

const Wrap = styled.div`
  max-width: 375px;
  width: 100%;
  height: 84px;
  top: 82%;
  position: absolute;
  background-color: whitesmoke;
  z-index: 999;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Home = styled.div`
  margin: auto;
`;
const Search = styled.div`
  margin: auto;
`;
const Mypage = styled.div`
  margin: auto;
`;
const HomeIcn = styled.img`
  margin: auto;
  &:hover {
    fill: red;
  }
`;
const SearchIcn = styled.img`
  margin: auto;
`;
const MypageIcn = styled.img`
  margin: auto;
`;
export default Navigation;
