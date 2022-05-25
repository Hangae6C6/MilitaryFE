import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCookie } from "../shared/cookie";
import { ActionCreators as navBarActions } from "../redux/modules/main";

import {
  myPageIcon,
  clickedPageIcon,
  searchIcon,
  clickedSearchIcon,
  homeIcon,
  clickedHomeIcon,
} from "../shared/icons/icons";

const Navigation = () => {
  let token = getCookie("token");
  const dispatch = useDispatch();
  const router = useSelector((state) => state.router.location.pathname);
  const userId = useSelector((state) => state.user.user.userId);
  const navBar = useSelector((state) => state.card.navBar);

  React.useEffect(() => {
    dispatch(navBarActions.getNavCheckedDB());
  }, [dispatch, router]);

  const navBarCheckedHandler = (num) => {
    dispatch(navBarActions.addNavCheckedDB(num, userId));
  };

  return (
    <Nav>
      <Wrap>
        <Home>
          <HomeIcn
            src={navBar.home === 1 ? clickedHomeIcon : homeIcon}
            onClick={() => {
              navBarCheckedHandler(1);
            }}
          />
          <P>홈</P>
        </Home>
        <Home>
          <SearchIcn
            src={navBar.search === 1 ? clickedSearchIcon : searchIcon}
            onClick={() => {
              navBarCheckedHandler(2);
            }}
          />
          <P>챌린지검색</P>
        </Home>
        <Home>
          <MypageIcn
            primary
            src={navBar.mypage === 1 ? clickedPageIcon : myPageIcon}
            onClick={() => {
              navBarCheckedHandler(3);
            }}
          />
          <P>마이페이지</P>
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
  margin-left: -2px;
  max-width: 375px;
  width: 100%;
  height: ${(props) => (props.primary ? "80px" : "83px")};
  position: fixed;
  background-color: whitesmoke;
  bottom: ${(props) => (props.primary ? "0.25em" : "0.25em")};
  z-index: 9;
  display: grid;
  border: 2px solid #151419;
  border-bottom: none;
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
