import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ActionCreators as navBarActions } from "../redux/modules/main";
import { ActionCreators as userProfileActions } from "../redux/modules/mypage";

import {
  myPageIcon,
  clickedPageIcon,
  searchIcon,
  clickedSearchIcon,
  homeIcon,
  clickedHomeIcon,
} from "../shared/icons/icons";

const Navigation = () => {
  const dispatch = useDispatch();
  const router = useSelector((state) => state.router.location.pathname);
  const userId = useSelector((state) => state.user.user.userId);
  const navBar = useSelector((state) => state.card.navBar);
  const userInfo = useSelector((state) => state.mypage.mypage);

  React.useEffect(() => {
    dispatch(navBarActions.getNavCheckedDB());
  }, [dispatch, router]);

  React.useEffect(() => {
    if (userId) {
      dispatch(userProfileActions.getUserProfileDB(userId));
    }
  }, [dispatch, userId]);

  // const navBarCheckedHandler = (num) => {
  //   dispatch(navBarActions.addNavCheckedDB(num, userId));
  // };

  return (
    <Nav>
      <Wrap>
        <Home>
          <HomeIcn
            src={navBar.home === 1 ? clickedHomeIcon : homeIcon}
            onClick={() => {
              window.location.pathname='/';
            }}
          />
          <P>홈</P>
        </Home>
        <Home>
          <SearchIcn
            src={navBar.search === 1 ? clickedSearchIcon : searchIcon}
            onClick={() => {
              window.location.pathname='/search';
            }}
          />
          <P>챌린지검색</P>
        </Home>
        <Home>
          <MypageIcn
            primary
            src={navBar.mypage === 1 ? clickedPageIcon : myPageIcon}
            onClick={() => {
              if(!userId){
                window.location.pathname='/login';
              }
              else if(userId && !userInfo){
                window.location.pathname=`signupdata/${userId}`;
              }else if(userId && userInfo){
                window.location.pathname=`mypage/${userId}`;
              }
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
  
`;

const Wrap = styled.div`
  margin-left: -2px;
  max-width: 371px;
  width: 100%;
  height: 83px;
  position: fixed;
  background-color: whitesmoke;
  bottom: 0.25em;
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
