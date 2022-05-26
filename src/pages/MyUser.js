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
  let cookie = document.cookie;
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
  
  // useEffect(() => {
  //   if (!cookie) {
  //     toast.error("로그인 후 이용해주세요!", { position: "top-center" });
  //     window.location.pathname='/';

  //     return;
  //   }
  // }, []);

  return (
    <Wrap>
      <Mine userId={id} userInfo={userInfo} />
      <Challenges userId={id} myChallengeList={myChallengeList} />
      <Footer />
      <Navigation />
      {/* <ToastContainer /> */}
    </Wrap>
  );
};
const Wrap = styled.div`
  max-width: 375px;
  width: 100%;
  background-color: #fff;
  border: 2px solid #151419;
  display: block;
  max-height: 100%;
  height: 100%;
  /* width: 100%; */
  border: 2px solid #151419;
`;

export default MyUser;
