import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as searchActions } from "../redux/modules/modal";
import { Select, DateInput } from "grommet";
import gobackIcon from "../shared/icons/icnBackNormalBlack35.svg";


const UserData = () => {
  const dispatch = useDispatch();
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
    "하사",
    "중사",
    "상사",
    "소위",
    "중위",
    "대위",
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

 // dispatch(searchActions.addUserDataDB(startDate[0], endDate[0], armCategory, rank));




  return (
    <Container>
    <div className="nav"></div>
      <div className="top">
        <div
          className="arrow"
          onClick={() => {
            window.location.pathname = "/login";
          }}
        >
          <img src={gobackIcon} alt="goback" />
        </div>
      </div>
      <div id="title-box">
        <p id="p">필승 챌린지</p>
      </div>




      <Box2>
      <div id="p">입대일</div>
      <DateInput
        format="mm-dd-yyyy"
        value={startDate}
        onChange={onStartDateChange}
        defaultValue="string"
      
      />
      <div id="p">전역일</div>
      <DateInput
        format="mm-dd-yyyy"
        value={endDate}
        onChange={onEndDateChange}
        defaultValue="string"
        
      />

      <Select
        placeholder="소속부대를 선택해주세요"
        value={milCategory}
        options={options}
        onChange={({ value: nextValue }) => onMilCategoryChange(nextValue)}
        size={"medium"}
      
      />

      <Select
        placeholder="계급을 선택해주세요"
        value={rank}
        options={ranks}
        onChange={({ value: nextValue }) => onRankChange(nextValue)}
        size={"medium"}
      />
    </Box2>
    <NextButton>등록하기</NextButton>
    </Container>
    
  );
};

export default UserData;
const Container = styled.div`
  display: block;
  max-height: 812px;
  max-width: 375px;
  height: 100%;
  width: 100%;
  border: 2px solid #151419;
  .nav {
    width: 375px;
    height: 44px;
  }
  .top {
    height: 69px;
    width: 375px;
    border-top: 2px solid #151419;
  }
  .arrow {
    position: absolute;
    margin: 17px 0px 0px 20px;
    cursor: pointer;
  }
  #title-box {
    width: 375px;
    height: 89px;
    display: flex;
    border-top: 2px solid #151419;
    background-color: #b62323;

    #p {
      font-size: 32px;
      font-family: Gmarket SansBold;
      margin: 30px auto;
      color: #ffffff;
    }
  }
`;

const Box2 = styled.div`
  display: grid;
  font-family: Gmarket SansMedium;
  #p {
    box-sizing: border-box;
    padding: 14px 0 0 10px;
    background-color: #1fb57e;
    height: 50px;
    width: 100%;
    border-top: 2px solid #151419;
    border-bottom: 2px solid #151419;
  }
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 21.2mm;
  width: 375px;
  height: 80px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #b2b2b2;
  border-top: 2px solid #151419;
  &:hover {
    cursor: pointer;
    background-color: #151419;
  }
`;