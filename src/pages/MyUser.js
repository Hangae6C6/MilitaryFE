import React from "react";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as userChallengeDataActions } from "../redux/modules/detail";
import { ActionCreators as userProfileActions } from "../redux/modules/mypage";

import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import { useParams } from "react-router-dom";
import Challenges from "../element/myuser/Challenges";
import Mine from "../element/myuser/Mine";

const MyUser = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userInfo = useSelector((state) => state.mypage.mypage);
  const myChallengeList = useSelector(
    (state) => state.challengeDetail.userChallengeDetail.answer
  );

  React.useEffect(() => {
    if (id) {
      dispatch(userProfileActions.getUserProfileDB(id));
    }
  }, [dispatch, id]);


  React.useEffect(() => {
    if (id) {
      dispatch(userChallengeDataActions.getUserChallengeDetailDB(id));
    }
  }, [dispatch, id]);

  return (
    <Wrap>
      <Mine userId={id} userInfo={userInfo} />
      <Overflow>
        <Challenges userId={id} myChallengeList={myChallengeList} />
        <Footer />
      </Overflow>
      <Navigation />
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 2px solid #151419;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 2px solid #151419;
  border-bottom: none;

  overflow: hidden;
`;

const Overflow = styled.div`
flex:1;
  overflow: scroll;
  height: 100%;
  /* padding: 0 0 79px 0; */
`;

export default MyUser;
