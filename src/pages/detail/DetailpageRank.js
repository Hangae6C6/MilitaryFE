import React from "react";
import styled from "styled-components";
import gobackIcon from "../../shared/icons/icnBackNormalBlack35.svg";
import shareIcon from "../../shared/icons/icnShareBlack35.png";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as getUserChallengeActions } from "../../redux/modules/detail";
import rank3 from "../../shared/icons/rank3_small.png";
import rank1 from "../../shared/icons/smallRank1.png"
import rank2 from "../../shared/icons/smallRank2.png"
import rankNull from "../../shared/icons/joinmemicon.png"

const DetailpageRank = () => {
  const dispatch = useDispatch();
  const { challengeId } = useParams();
  const joinList = useSelector(
    (state) => state.challengeDetail.challengeDetail
  );

  React.useEffect(() => {
    dispatch(getUserChallengeActions.getRankDetailDB(challengeId));
  }, [dispatch, challengeId]);

  const ranks = [...joinList];
   const rank = ranks.sort((a,b)=> (b.progress - a.progress));

  return (
    <Container>
   
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
          <div id="title">챌린지 랭킹</div>
        </div>
        {rank?.map((cur, idx) => (
          <Astep key={cur + idx} width={cur.progress + "%"}>
            <div id="progressBar">
              <div id="rank">{idx + 1}</div>
              <div id="nickname">{cur.userNick}</div>
              <img src={
            idx === 0
              ? rank1
              : idx === 1
              ? rank2
              : idx === 2
              ? rank3 
              : rankNull
          } alt="rank" id="icon" width="28" height="36" />
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
  box-sizing: border-box;
  max-height: 100vh;
  max-width: 375px;
  height: 100%;
  width: 100%;
  border: 2px solid #151419;


  .top {
    height: 69px;
    width: 100%;

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
    width: 100%;
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
  width: 100%;
  height: 100%;
  border-bottom: 2px solid #151419;
  #progressBar {
    background-color: #1fb57e;
    width: ${(props) => props.width};
    height: 62px;
    display: flex;
   
    #rank {
      margin: 20px 0 0 39px;
      font-size: 18px;
      font-family: Gmarket SansBold;
    }
    #nickname {
      font-family: NanumSquareMedium;
      color: #151419;
      font-size: 16px;
      width: 280px;
      height: 22px;
      margin: 20px 0 0 100px;
      position: fixed;
    }
    #icon {
      margin: 13px 0 0 300px;
      position: fixed;
    }
  
  }
`;
const NextButton = styled.button`
  position: fixed;
  bottom: 0.2em;
  margin-left: -2px;
  padding: 32px 157px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #151419;
  border-top: 1px solid #151419;
  cursor: pointer;
`;
