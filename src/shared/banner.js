import React from 'react';
import styled from 'styled-components';
import baemin from "../image/Baemin.png";
import americano from "../image/Americano.png";
import go from "../image/Go.png";
const Event = () => {
    return (
        <Banner>
            <What>
              전역하고 뭐하지? 이벤트 참여하지!
              <div className="event">
                이벤트 기간 | 5월 27일(금) - 6월 4일 (토)
              </div>
            </What>
            <Icon>
              <div className="alignNoBorder">
                <img className="baemin" alt="baemin" width="75px" src={baemin} />
                <p className="coupon_p">배달의민족 쿠폰</p>
                <div className="first">
                  제일 먼저 챌린지 개설하고
                  <br />
                  배달의민족 시켜먹자!
                  <br />
                  챌린지 조회수 1위 달성해도! <br />
                  챌린지 참여자수 1위 달성해도!<br />
                  <div className="people">전우 5명</div>
                </div>
              </div>
              <div className="align">
                <img className="ameri" alt="americano" width="155px" src={americano} />
                <p className="coupon_p">스타벅스 아이스 아메리카노</p>
                <div className="second">
                  설문조사 참여하고
                  <br />
                  기프티콘 받기!
                </div>

                <div
                  className="survey"
                  onClick={() => {
                    window.open("https://docs.google.com/forms/d/e/1FAIpQLScObzk9zCM0E_oLXtMpvyWc4qWoUbf3R-bUnlVX7lvyeydxfA/viewform", "_blank");
                  }}
                >
                  설문조사 참여하기 <img src={go} alt="go" />
                </div>
                <div className="people">전우 10명</div>
              </div>
            </Icon>
          </Banner>
    );
};

export default Event;

const Banner = styled.div`
  border-left: 2px solid black;
  border-right: 2px solid black;
  width: 420px;
  height: 366px;
  position: absolute;
  top: 195px;
  left: 620px;
`;

const What = styled.div`
  border-bottom: 2px solid black;
  height: 65px;
  width: 100%;
  text-align: center;
  padding: 15px 0;
  font-size: 20px;
  font-family: Gmarket SansBold;
  .event {
    font-family: Gmarket Sans;
    padding: 15px 0;
  }
`;

const Icon = styled.div`
  display: flex;
  .alignNoBorder {
    display: space-around;
    width: 250px;
    padding: 10px;
    height: 250px;
    .baemin {
      width: 45px;
      padding: 25px;
    }
    .coupon_p {
      padding: 0 0 10px 0px;
      margin: 0;
      font-size: 14pxx;
      font-weight: 600;
    }
    .first {
      font-size: 12px;
      font-weight: 600;
    }
    .people {
      display: inline-block;
      background-color: black;
      color: #fff;
      font-weight: 600;
      margin: 10px 0 0 0;
      font-weight: 600;
      font-size: 12px;
    }
  }
  .align {
    border-left: 2px solid black;
    .ameri {
      width: 90px;
      padding: 13px 0 0 0;
    }
    .coupon_p {
      padding: 0 0 10px 10px;
      margin: 0;
      font-size: 14px;
      font-weight: 600;
    }
    .second {
      padding-left: 10px;
      font-size: 12px;
      font-weight: 600;
    }
    .survey {
      border: 1px solid #1fb57e;
      color: #1fb57e;
      margin: 8px 0 0 10px;
      font-weight: 600;
      display: inline-block;
      cursor: pointer;
    }
    .people {
      display: inline-block;
      background-color: black;
      color: #fff;
      font-weight: 600;
      margin: 10px 0 0 10px;
      font-weight: 600;
      font-size: 12px;
    }
  }
`;


