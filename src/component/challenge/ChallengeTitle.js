import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as searchActions } from "../../redux/modules/challenge";
import { Box, Select, Meter } from "grommet";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { history } from "../../redux/configureStore";

const ChallengeTitle = () => {
  const dispatch = useDispatch();

  const [challengeTitle, setChallengeTitle] = React.useState("");
  const [challType, setChallType] = React.useState("");
  const [challengeContent, setChallengeContent] = React.useState("");

  const challengeType = challType[0];

  const options = ["공부", "운동", "자격증", "취업"];
  const challengeHandler = () => {
    dispatch(
      searchActions.addChallengeDB(
        challengeTitle,
        challengeType,
        challengeContent
      )
    );
  };

  return (
    <Container>
      <div className="arrow"
          onClick={() => {
            window.location.pathname= "/";
          }}>
        <ArrowBackIcon fontSize="large" />
      </div>
      <div className="top"></div>
      <div className="progressBar">
        <Meter
          size="xsmall"
          height="67px"
          width="359px"
          type="bar"
          background="#FAFAFA"
          color="#6dbb91"
          value={50}
        />
      </div>
      <div className="title">
        <div className="title-text">챌린지 이름</div>
        <textarea
          className="sub-title"
          //  value={title}
          placeholder="챌린지 이름은 변경이 어렵지만 &#13;&#10;재미있는 이름이 시선을 확~ 끌지말입니다!"
          maxLength="20"
          type="text"
        ></textarea>
      </div>
      <div className="input-title">
        <textarea 
          className="input-area"
          //  value={title}
          placeholder="우리가 누굽니까악"
          maxLength="10"
          type="text"
        ></textarea>
      </div>

      <NextButton
        onClick={() => {
          window.location.pathname= "challengeadd/date";
        }}
      >
        다음
      </NextButton>

      {/* <Box2>
        <Inputs
          value={challengeTitle}
          placeholder="챌린지 주제"
          type="text"
          onChange={(e) => {
            setChallengeTitle(e.target.value);
          }}
        />

        <Box fill align="center" justify="start" pad="small">
          <Select
            placeholder="챌린지 타입"
            value={challType}
            options={options}
            onChange={({ value: nextValue }) => setChallType(nextValue)}
            clear
          />
        </Box>

        <Inputs
          value={challengeContent}
          placeholder="챌린지 내용"
          type="text"
          onChange={(e) => {
            setChallengeContent(e.target.value);
          }}
        />

        <Button onClick={challengeHandler}>확인</Button>
      </Box2> */}
    </Container>
  );
};

export default ChallengeTitle;

const Container = styled.div`
  max-height: 812px;
  max-width: 359px;
  height: 812px;
  width: 100%;
  box-sizing: border-box;
  margin-left: 8px;
  border-left: 2px solid #3f3f3f;
  border-right: 2px solid #3f3f3f;
  .arrow {
    position: absolute;
    margin: 60px 0px 0px 10px;
    cursor: pointer;
  }
  .top {
    height: 44px;
    width: 100%;
    border-bottom: 2px solid #3f3f3f;
  }
  .progressBar {
    height: 66px;
    width: 100%;
    border-bottom: 3px solid #3f3f3f;
  }
  .title {
    min-height: 120px;
    width: 100%;
    border-bottom: 2px solid #3f3f3f;

    .title-text {
      height: 35px;
      width: 130px;
      font-size: 24px;
      color: #3f3f3f;
      font-weight: 800;
      margin: 40px 0px 0px 30px;
    }
    .sub-title {
      height: 54px;
      width: 300px;
      outline: none;
      margin-left: 30px;
      border: 0px;
      max-height: 54px;
      max-width: 295px;
      resize: none;
      font-size: 15px;
    }
  }
  .input-title {
    height: 280px;
    width: 100%;
    background-color: #f5f5f5;
    border-bottom: 2px solid #3f3f3f;
    .input-area {
      margin: 120px 66px;
      font-weight: 800;
      height: 38px;
      width: 230px;
      outline: none;
      border: 0px;
      resize: none;
      position: center;
      font-size: 28px;
      color: #3f3f3f;
      background-color: #f5f5f5;
      ::placeholder {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #d9d9d9;
      }
    }
  }

`;
const NextButton = styled.button`
  position: fixed;
  bottom: 6.1em;
  width: 376px;
  height: 80px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  left:16.2em;
  background-color: #b2b2b2;
  border-top: 2px solid #3f3f3f;
  
  &:hover {
    cursor: pointer;
    background-color: #3f3f3f;
  }
`;