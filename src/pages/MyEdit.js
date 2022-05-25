import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Select, DateInput } from "grommet";
import { ReactComponent as Back } from "../image/back.svg";
import { history } from "../redux/configureStore";
import { ActionCreators as userProfileActions } from "../redux/modules/mypage";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

const MyEdit = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  let cookie = document.cookie;
  const userInfo = useSelector((state) => state.mypage.mypage);
  
  React.useEffect(() => {
    if (userId) {
      dispatch(userProfileActions.getUserProfileDB(userId));
    }
  }, [dispatch, userId]);
  
  useEffect(() => {
    if (!cookie) {
      toast.error("로그인 후 이용해주세요!", { position: "top-center" });
      history.replace("/");
      window.location.reload();
      return;
    }
  }, []);
  
  const [nickName, setNickName] = React.useState("");
  console.log(nickName);
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [milCategory, setMilCategory] = React.useState("");
  const [rank, setRank] = React.useState("");
  const options = ["육군", "해군", "공군", "해병대", "특수부대"];
  const ranks = [
    "이병",
    "일병",
    "상병",
    "병장",
  ];

  const onStartDateChange = (e) => {
    const nextValue = e.value;
    setStartDate(nextValue);
  };
  const onEndDateChange = (e) => {
    const nextValue = e.value;
    setEndDate(nextValue);
  };

  const onMilCategoryChange = (e) => {
    setMilCategory(e);
  };

  const onRankChange = (e) => {
    setRank(e);
  };

  const editUserDataHandler = () => {
    dispatch(userProfileActions.editUserDataDB(userId, nickName, startDate[0], endDate[0], milCategory, rank));
  };




  return (
    <Wrap>
      <MyPage>
        <MyP>
          <BackDiv>
            <Back onClick={history.back} />
          </BackDiv>
        </MyP>
      </MyPage>
      <PersonalEdit>&nbsp;&nbsp;&nbsp;개인정보 수정</PersonalEdit>
      <Nick>&nbsp;&nbsp;&nbsp;&nbsp;닉네임</Nick>
      <InputTitle>
        <textarea
          className="input-area"
          value={nickName}
          placeholder={userInfo.User.userNick}
          maxLength="8"
          type="text"
          onChange={(e) => setNickName(e.target.value)}
        ></textarea>
      </InputTitle>
      <Box2>
        <div id="p">입대일</div>
        <Box1>
          <DateInput
            id="input"
            placeholder={userInfo.startDate}
            format="mm-dd-yyyy"
            value={startDate}
            onChange={onStartDateChange}
            defaultValue="string"
            
          />
        </Box1>
        <div id="p">전역일</div>
        <Box1>
          <DateInput
            id="input"
            placeholder={userInfo.endDate}
            format="mm-dd-yyyy"
            value={endDate}
            onChange={onEndDateChange}
            defaultValue="string"
          />
        </Box1>
        <Box1>
          <Select
            id="inputs"
            placeholder={userInfo.armyCategory}
            value={milCategory}
            options={options}
            onChange={({ value: nextValue }) => onMilCategoryChange(nextValue)}
            size={"large"}
          />
        </Box1>

        <Box1>
          <Select
            id="inputs"
            placeholder={userInfo.rank}
            value={rank}
            options={ranks}
            onChange={({ value: nextValue }) => onRankChange(nextValue)}
            size={"large"}
          />
        </Box1>
        <Empty/>
      </Box2>
      <NextButton onClick={editUserDataHandler}>저장하기</NextButton>
    </Wrap>
  );
};

const Wrap = styled.div`
 display: block;
  max-width: 375px;
  height: 100%;
  width: 100%;
  border: 2px solid #151419;
`;
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
  height: 93px;
  line-height: 80px;
  font-size: 24px;
  font-weight: 700;
  font-family: Gmarket SansBold;
  border-bottom: 2px solid #151419;
`;

const Nick = styled.div`
  height: 60px;
  line-height: 80px;
  font-size: 20px;
  font-weight: 700;
  font-family: Gmarket SansBold;
`;

const Box1 = styled.div`
  height: 65px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  #input {
    margin-top: 8px;
    border: none;
    outline: none;
  }
  #inputs {
    margin-top: 8px;
    border: none;
    outline: none;
  }
`;
const Empty = styled.div`
  width: 100%;
  border-top: 1px solid #151419;
`;

const Box2 = styled.div`
  display: grid;
  font-size: 18px;
  font-family: Gmarket SansMedium;
  #p {
    box-sizing: border-box;
    padding: 20px 0 0 20px;
    height: 65px;
    width: 100%;
    border-top: 1px solid #151419;
    border-bottom: 1px solid #151419;
    color: #151419;
    font-family: Gmarket SansBold;
    font-size: 20px;
  }
`;

const InputTitle = styled.div`

    height: 60px;
    width: 100%;
    border-bottom: 1px solid #151419;
    border-top: 2px solid #151419;

    .input-area {
      padding: 18px 20px 1px;
      font-family: Gmarket SansMedium;
      height: 30px;
      width: 280px;
      outline: none;
      border: 0px;
      resize: none;
      font-size: 18px;
      color: #151419;
      ::placeholder {
        font-family: Gmarket Sans;
        color: #aaaaaa;
      }
    }
  
`;
const NextButton = styled.button`

  position: fixed;
  bottom: 0.2em;
  width: 379px;
  margin-left: -2px;
  height: 85px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #151419;
  border-top: 2px solid #151419;
  cursor: pointer;
`;

export default MyEdit;
