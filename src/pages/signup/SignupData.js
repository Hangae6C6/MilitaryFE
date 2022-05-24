import React from "react";
import styled, { withTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ActionCreators as searchActions } from "../../redux/modules/modal";
import { Select, DateInput } from "grommet";
import gobackIcon from "../../shared/icons/arrowWhite.png";
import logo from "../../shared/icons/handlogo11.png";

const UserData = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
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

  const signupDataHandler = () => {
    window.location.pathname = "/signupDone";
    setTimeout(() => {}, 0);
  };

  return (
    <Container>
     <div className="nav">
        <img id="logo" src={logo} alt="img" height="53" />
      </div>
      <div className="top">
        <div
          className="arrow"
          onClick={() => {
            window.location.pathname = "/";
          }}
        >
          <img src={gobackIcon} alt="goback" width="20" height="18" />
        </div>
      </div>
      <div id="title-box">
        <p id="p">솔저챌린저스</p>
      </div>
      <Box2>
        <div id="p">입대일</div>
        <Wrap>
          <DateInput
            id="input"
            format="mm-dd-yyyy"
            value={startDate}
            onChange={onStartDateChange}
            defaultValue="string"
          />
        </Wrap>
        <div id="p">전역일</div>
        <Wrap>
          <DateInput
            id="input"
            format="mm-dd-yyyy"
            value={endDate}
            onChange={onEndDateChange}
            defaultValue="string"
          />
        </Wrap>
        <Wrap>
          <Select
            id="inputs"
            placeholder="소속부대를 선택해주세요"
            value={milCategory}
            options={options}
            onChange={({ value: nextValue }) => onMilCategoryChange(nextValue)}
            size={"large"}
          />
        </Wrap>

        <Wrap>
          <Select
            id="inputs"
            placeholder="계급을 선택해주세요"
            value={rank}
            options={ranks}
            onChange={({ value: nextValue }) => onRankChange(nextValue)}
            size={"large"}
          />
        </Wrap>
        <Empty/>
      </Box2>
      <NextButton onClick={() => signupDataHandler()}>회원가입</NextButton>
    </Container>
  );
};

export default UserData;
const Container = styled.div`
  display: block;
  max-width: 375px;
  height: 100vh;
  width: 100%;
  border: 2px solid #151419;
  .nav {
    width: 375px;
    height: 44px;
    background-color: #151419;
    #logo {
      margin: 13px 0 0 20px;
      width: 140px;
    }
  }
  .top {
    height: 69px;
    width: 375px;
    border-top: 4px solid #ffffff;
    background-color: #151419;
  }
  .arrow {
    position: absolute;
    margin: 17px 0px 0px 20px;
    cursor: pointer;
  }
  #title-box {
    width: 375px;
    height: 159px;
    display: flex;
    border-top: 2px solid #151419;
    background-color: #151419;

    #p {
      font-size: 34px;
      font-family: Gmarket SansBold;
      margin: 35px auto;
      color: #ffffff;
    }
  }
`;

const Wrap = styled.div`
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
  }
`;

const NextButton = styled.button`
  position: fixed;
  bottom: 0.2em;
  width: 375px;
  height: 84px;
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

