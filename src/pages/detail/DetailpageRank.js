import React from "react";
import styled from "styled-components";
import { history } from "../../redux/configureStore";
import gobackIcon from "../../shared/icons/icnBackNormalBlack35.svg";
import shareIcon from "../../shared/icons/icnShareBlack35.png";
import { useParams } from "react-router-dom";
const DetailpageRank = () => {
  const { challengeId } = useParams();
  return (
    <Container>
      <div className="nav"></div>
      <div className="top">
        <div
          className="arrow"
          onClick={() => {
            window.location.pathname = `/detailpage/${challengeId}`;
          }}
        >
          <img src={gobackIcon} alt="goback" />
        </div>
        <div id="share-icon">
          <img src={shareIcon} alt="shareIcon" />
        </div>
      </div>

      <ChallengeName>
        <div id="top">
          <div id="title">챌린지 달성 순위</div>
        </div>
        <Astep>
          <div id="stepTitle">이범규</div>
          <div id="checkBox"></div>
        </Astep>
        <Astep>
          <div id="stepTitle">신용재</div>
          <div id="checkBox"></div>
        </Astep>
        <Astep>
          <div id="stepTitle">이국주</div>
          <div id="checkBox"></div>
        </Astep>
      </ChallengeName>

      <NextButton
        onClick={() => {
          window.location.pathname = `/detail/chat/${challengeId}`;
        }}
      >
        지금 시작하기
      </NextButton>
    </Container>
  );
};

export default DetailpageRank;

const Container = styled.div`
  display: block;
  max-height: 100vh;
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
    border-bottom: 2px solid #151419;
    .arrow {
      position: absolute;
      margin: 17px 0px 0px 20px;
      cursor: pointer;
    }
    #share-icon {
      position: absolute;
      margin: 17px 0px 0px 310px;
      cursor: pointer;
    }
  }
`;

const ChallengeName = styled.div`
  #top {
    width: 375px;
    height: 80px;
    border-bottom: 2px solid #151419;
    #title {
      color: #151419;
      font-size: 24px;
      font-family: Gmarket SansBold;
      padding: 35px 0 0 36px;
    }
  }
`;

const Astep = styled.div`
  width: 375px;
  height: 62px;
  border-bottom: 2px solid #151419;
  display: flex;
  #stepTitle {
    font-family: NanumSquareMedium;
    color: #151419;
    font-size: 16px;
    width: 280px;
    height: 22px;
    margin: 20px 0 0 26px;
  }
  #checkBox {
    width: 22px;
    height: 22px;
    margin: 20px 20px 0 10px;
    border: 1px solid #151419;
    &:hover {
      cursor: pointer;
      background-color: #151419;
    }
  }
`;

const NextButton = styled.button`
  position: table-row;
  bottom: 29mm;
  width: 375px;
  height: 80px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #b2b2b2;
  /* border-top: 2px solid #151419; */
  &:hover {
    cursor: pointer;
    background-color: #151419;
  }
`;
