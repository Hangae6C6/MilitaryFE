import React from "react";
import styled from "styled-components";
import { Meter } from "grommet";
import { useParams } from "react-router-dom";
import { getCookie } from "../../shared/cookie";
import rightArrow from "../../shared/icons/right_arrow.png";

const DetailpageProgress = ({
  userId,
  thisChallenge,
  myChallengeDetail,
  myChallengeStep,
  allUserDetail,
}) => {
  const token = getCookie("token");
  const { challengeId } = useParams();
  let totalStepNum = thisChallenge.steps.length;

  let myStep = "";
    for (let i = 0; i < myChallengeStep.length; i++) {
      if (myChallengeStep[i].challengeNum == challengeId) {
        myStep = myChallengeStep[i].steps;
      }
    }

  let checkedStep = 0;
  for (let i = 0; i < myStep.length; i++) {
    if (myStep[i].isChecked === true) {
      checkedStep += 1;
    }
  }

  let progressScore = (checkedStep / totalStepNum) * 100;

  return (
    <>
      {!token ? (
        <>
          <MySkill
            onClick={() => {
              window.location.pathname = "/login";
            }}
          >
            내 실력보여주기
          </MySkill>
          <Container primary>
            <div id="firstBox">
              <div id="stepNum">
                <p style={{ color: "#1FB57E" }}>07</p>
                <p>/08</p>
              </div>
              <div id="myRank">1st</div>
            </div>
            <div id="proBar">
              <Meter
                size="xsmall"
                height="20px"
                width="300px"
                type="bar"
                background="#FAFAFA"
                color="#1FB57E"
                value={50}
              />
            </div>
            <div id="secBox">
              <p>순위</p>
              <p>
                랭킹보러가기
                <img src={rightArrow} alt="rightArrow" />{" "}
              </p>
            </div>
          </Container>
        </>
      ) : (
        <Container
          onClick={() => {
            window.location.pathname = `/detailpage/rank/${challengeId}`;
          }}
        >
          <div id="firstBox">
            <div id="stepNum">
              <p style={{ color: "#1FB57E" }}>{checkedStep}</p>
              <p>/{totalStepNum}</p>
            </div>
            <div id="myRank">1st</div>
          </div>
          <div id="proBar">
            <Meter
              size="xsmall"
              height="20px"
              width="300px"
              type="bar"
              background="#FAFAFA"
              color="#1FB57E"
              value={progressScore}
            />
          </div>
          <div id="secBox">
            <p id="p">랭킹보러가기 </p>
            <img
              id="i"
              src={rightArrow}
              alt="rightArrow"
              withe="20px"
              height="20px"
            />
          </div>
        </Container>
      )}
    </>
  );
};

export default DetailpageProgress;

const Container = styled.div`
  width: 375px;
  height: 219px;
  filter: blur(${(props) => (props.primary ? "8px" : 0)});

  #firstBox {
    width: 300px;
    margin-left: 37px;
    display: flex;
    justify-content: space-between;
    height: 142px;
    #myRank {
      padding-top: 27px;
      font-size: 80px;
      font-family: Gmarket SansBold;
    }
    #stepNum {
      display: flex;
      padding-top: 60px;
      font-size: 32px;
      font-family: Gmarket SansBold;
      color: #c4c4c4;
    }
  }
  #proBar {
    width: 300px;
    height: 20px;
    border: 2px solid #151419;
    margin-left: 37px;
  }
  #secBox {
    width: 300px;
    margin-left: 37px;
    display: flex;
    justify-content: space-between;
    color: #151419;
    font-family: Gmarket SansMedium;
    #p {
      margin-left: 175px;
    }
    #i {
      width: 20px;
      height: 20px;
      margin-top: 15px;
    }
  }
  &:hover {
    cursor: ${(props) => (props.primary ? 0 : "pointer")};
    background-color: ${(props) => (props.primary ? 0 : "black")};
    #myRank {
      color: ${(props) => (props.primary ? 0 : "#ffffff")};
    }
    #proBar {
      border: ${(props) =>
        props.primary ? "2px solid black" : "2px solid white"};
    }
    #secBox {
      color: ${(props) => (props.primary ? 0 : "white")};
    }
    #i{
     color: ${(props) => (props.primary ? 0 : "white")};
    }
  }
`;
const MySkill = styled.div`
  width: 187px;
  height: 60px;
  color: #ffffff;
  font-size: 18px;
  font-family: Gmarket SansMedium;
  text-align: center;
  line-height: 58px;
  background-color: #151419;
  margin: 80px 0 0 100px;
  position: absolute;
  cursor: pointer;
  z-index: 1;
`;
