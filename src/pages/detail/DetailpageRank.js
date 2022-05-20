import React from "react";
import styled from "styled-components";
import gobackIcon from "../../shared/icons/icnBackNormalBlack35.svg";
import shareIcon from "../../shared/icons/icnShareBlack35.png";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as getUserChallengeActions } from "../../redux/modules/detail";
import rank3 from "../../shared/icons/rank3_small.png";
const DetailpageRank = () => {
  const dispatch = useDispatch();
  const { challengeId } = useParams();
  const joinList = useSelector(
    (state) => state.challengeDetail.challengeDetail);



  React.useEffect(() => {
    dispatch(getUserChallengeActions.getChallengeDetailDB(challengeId));
  }, [dispatch, challengeId]);

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
        {joinList.map((cur,idx)=> (
          
          <Astep>
          <div id="progressBar">
            <div id="rank">1</div>
            <div id="stepTitle">{cur.userId}</div>
            <img src={rank3} alt="rank" id="icon" width="28" height="36" />
            <div id="stepDone">5</div>
          </div>
        </Astep>
        ))}
        
      </ChallengeName>

      <NextButton
        onClick={() => {
          window.location.pathname = `/detail/chat/${challengeId}`;
        }}
      >
        채팅하기
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
    background-color: #151419;
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
  background-color: #ffffff;
  width: 375px;
  height: ${props => props.width};
  border-bottom: 2px solid #151419;
  #progressBar{
    background-color: #1FB57E;
    width: 375px;
  height: 62px;
  display: flex;

 #rank {
    margin: 20px 0 0 39px;
    font-size: 18px;
    font-family: Gmarket SansBold;
  }
  #stepTitle {
    font-family: NanumSquareMedium;
    color: #151419;
    font-size: 16px;
    width: 280px;
    height: 22px;
    margin: 20px 0 0 26px;
  }
  #icon {
    margin: 13px 30px 0 0;
  }
  #stepDone {
    width: 22px;
    height: 22px;
    margin: 20px 20px 0 10px;
  }

  }
 
`;

const NextButton = styled.button`
  position: relative;
  bottom: 0;
  width: 375px;
  height: 80px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #b2b2b2;
  &:hover {
    cursor: pointer;
    background-color: #151419;
  }
`;
