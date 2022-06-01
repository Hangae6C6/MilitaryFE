import React from "react";
import styled from "styled-components";
import gobackIcon from "../../shared/icons/icnBackNormalBlack35.svg";
import shareIcon from "../../shared/icons/icnShareBlack35.png";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as getUserChallengeActions } from "../../redux/modules/detail";
import rank3 from "../../shared/icons/rank3_small.png";
import rank1 from "../../shared/icons/smallRank1.png";
import rank2 from "../../shared/icons/smallRank2.png";
import rankNull from "../../shared/icons/joinmemicon.png";

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
  const rank = ranks.sort((a, b) => b.progress - a.progress);

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
        </div>{" "}
      </ChallengeName>
      <Wrap>
        {rank?.map((cur, idx) => (
          <Astep key={cur + idx} width={cur.progress + "%"}>
            <div id="progressBar">
              <div id="rank">{idx + 1}</div>
              <div id="nickname">{cur.userNick}</div>
              <img
                src={
                  idx === 0
                    ? rank1
                    : idx === 1
                    ? rank2
                    : idx === 2
                    ? rank3
                    : rankNull
                }
                alt="rank"
                id="icon"
                width="28"
                height="36"
              />
            </div>
          </Astep>
        ))}
      </Wrap>

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
  box-sizing: border-box;
  max-width: 375px;
  height: 100%;
  width: 100%;
  border: 2px solid #151419;
  border-bottom: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
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

const Wrap = styled.div`
  height: 100%;
  overflow: scroll;
  flex: 1;
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
  display: flex;
  height: 63px;
  background-color: #ffffff;
  width: 100%;
  border-bottom: 2px solid #151419;

  #progressBar {
    background-color: #1fb57e;
    width: ${(props) => props.width};
    height: 64px;
    display: grid;

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
      margin: -25px 0 0 100px;
      
    }
    #icon {
      margin: -40px 0 0 300px;
      float: right;
    }
  }
`;
const NextButton = styled.button`
   margin-left: -2px;
  width: 374px;
  height: 83px;
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
