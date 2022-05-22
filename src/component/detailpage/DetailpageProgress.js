import React from "react";
import styled from "styled-components";
import { Meter } from "grommet";
import { useParams } from "react-router-dom";
import { getCookie } from "../../shared/cookie";
import rightArrow from "../../shared/icons/rightarrowwhite.png";
import icon from "../../shared/images/detailpageprogressicon.png";
import greenIcon from "../../shared/images/nologinDetailpage.png";

const DetailpageProgress = ({
  userId,
  thisChallenge,
  myChallengeDetail,
  myChallengeStep,
  userNickName,
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
        <Container primary>
          <div id="firstBox">
            <img src={greenIcon} alt="greenIcon" width="126px" height="150px" />
          </div>

          <div id="secBox">
            <div
              id="p"
              onClick={() => {
                window.location.pathname = "/login";
              }}
            >
              내 실력보여주기{" "}
            </div>
            <img
              id="i"
              src={rightArrow}
              alt="rightArrow"
              withe="20px"
              height="20px"
            />
          </div>
        </Container>
      ) : (
        <Container
          onClick={() => {
            alert("coming soon");
            // window.location.pathname = `/detailpage/rank/${challengeId}`;
          }}
        >
          <div id="firstBox">
            <div id="titleBox">
              <div id="title">{userNickName}님!</div>
              <div id="subTitle">전진! 앞으로!</div>
            </div>

            <div id="stepNum">
              <p style={{ color: "#1FB57E" }}>{checkedStep}</p>
              <p>/{totalStepNum}</p>
            </div>
          </div>
          <ProgressBarWrap width={progressScore + "%"}>
            <div id="progressBar" />

            <div id="icon">
              <img src={icon} alt="icon" height="90" width="86" />
            </div>
          </ProgressBarWrap>

          <div id="secBox">
            <div id="p">랭킹보러가기 </div>
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
  height: 245px;
  background-color: #151419;
  #firstBox {
    width: 300px;
    margin-left: 37px;
    display: flex;
    justify-content: space-between;
    height: 142px;
    padding-left: ${(props) => (props.primary ? "80px" : "0px")};
    padding-top: ${(props) => (props.primary ? "20px" : "0px")};

    #titleBox {
      #title {
        color: #ffffff;
        padding-top: 20px;
        font-size: 26px;
        font-family: Gmarket SansBold;
      }
      #subTitle {
        color: #ffffff;
        padding-top: 5px;
        font-size: 22px;
        font-family: Gmarket SansMedium;
      }
    }

    #stepNum {
      display: flex;
      padding-top: 60px;
      font-size: 32px;
      font-family: Gmarket SansBold;
      color: #c4c4c4;
    }
  }
  #secBox {
    width: 300px;
    height: 50px;
    margin: 10px 0 0 37px;
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    font-family: Gmarket SansBold;
    #p {
      cursor: pointer;
      width: 200px;
      font-size: ${(props) => (props.primary ? "26px" : "24px")};
      padding: ${(props) =>
        props.primary ? "10px 0 0 10px" : "13px 0 0 55px"};
      margin-left: ${(props) => (props.primary ? "30px" : "75px")};
    }
    #i {
      cursor: pointer;
      width: ${(props) => (props.primary ? "30px" : "20px")};
      height: ${(props) => (props.primary ? "30px" : "20px")};
      margin-top: ${(props) => (props.primary ? "10px" : "17px")};
      margin-left: ${(props) => (props.primary ? "0px" : "5px")};
      margin-right: ${(props) => (props.primary ? "40px" : "0")};
    }
  }

`;

const ProgressBarWrap = styled.div`
  display: flex;
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin-left: 40px;

  #icon {
    margin: -54px 0px 0px -70px;
    width: 0;
    height: 30px;
  }
  #progressBar {
    margin-bottom: -3px;
    width: ${(props) => props.width};
    height: 35px;
    background-color: #1fb57e;
  }
`;
