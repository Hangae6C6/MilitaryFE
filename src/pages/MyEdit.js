import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Wrap from "../element/test/Wrap";
import styled from "styled-components";
import { ReactComponent as Back } from "../image/back.svg";
import Navigation from "../component/Navigation";
import { history } from "../redux/configureStore";
import { ActionCreators as mypageAction } from "../redux/modules/mypage";
import { useDispatch } from "react-redux";

const MyEdit = ({ match }) => {
  const dispatch = useDispatch();
  const [userNick, setUserNick] = useState(
    useSelector((state) => state.user.user.userNick)
  );
  const [userRank, setUserRank] = useState(
    useSelector((state) => state.mypage.rank)
  );
  useEffect(() => {
    if (!userNick) {
      window.alert("로그인 후 이용해주세요");
      // history.replace('/');
      // window.location.reload();

      return;
    }
    dispatch(mypageAction.EditNickDB(userNick));
  }, [userNick]);

  return (
    <Wrap>
      <MyPage>
        <MyP>
          <BackDiv>
            <Back />
          </BackDiv>
          마이페이지
        </MyP>
      </MyPage>
      <PersonalEdit>&nbsp;&nbsp;&nbsp;개인정보 수정</PersonalEdit>
      <Nick>&nbsp;&nbsp;&nbsp;&nbsp;닉네임</Nick>
      <NickInput
        value={userNick}
        onChange={(e) => {
          setUserNick(e.target.value);
        }}
      ></NickInput>
      <Nick>&nbsp;&nbsp;&nbsp;&nbsp;계급</Nick>
      <NickInput
        value={userRank}
        onChange={(e) => {
          setUserRank(e.target.value);
        }}
      ></NickInput>
      <EditBtn>저장하기</EditBtn>
      <Navigation />
    </Wrap>
  );
};

const MyPage = styled.div`
  text-align: center;
  align-content: center;
  border-bottom: 2px solid #151419;
  display: grid;
  justify-content: space-between;
`;

const BackDiv = styled.div`
  display: inline-block;
`;

const MyP = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  align-items: center;
  margin: 0;
  padding: 5px 0;
`;

const PersonalEdit = styled.div`
  height: 75px;
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  margin: 20px 0;
  border-bottom: 2px solid #151419;
`;

const Nick = styled.div`
  height: 60px;
  line-height: 40px;
  font-weight: 700;
  text-align: left;
`;

const NickInput = styled.input`
  border-bottom: 2px solid #151419;
  border-top: 2px solid #151419;
  border-right: none;
  border-left: none;
  width: 100%;
  height: 75px;
  box-sizing: border-box;
`;

const EditBtn = styled.div`
  width: 375px;
  color: #fff;
  font-weight: 700;
  background-color: #212121;
  text-align: center;
  height: 70px;
  bottom: 71px;
  position: fixed;
  line-height: 70px;
`;

export default MyEdit;
