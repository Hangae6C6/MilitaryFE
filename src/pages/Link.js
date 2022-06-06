import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import img from "../shared/images/imgChallengeCompleted335.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ActionCreators as userChallengeDataActions } from "../redux/modules/detail";
import { useDispatch } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Link = () => {
  const dispatch = useDispatch();
  const { challengeId, userId } = useParams();

  const [state, setState] = React.useState({
    value: "https://soldierchallengers.com/",
    copied: false,
  });
  React.useEffect(()=>{
    setState({value: `https://soldierchallengers.com/detailpage/${challengeId}`});
  },[challengeId]);
  
  const onCopy = () => {
    this.setState({ copied: true });
  };

 const postHandler = () => {
   userChallengeDataActions.postUserChallengeDetailDB(userId, challengeId)
 }
   

  return (
    <Container>
      <div className="top">
        <NextButton
          onClick={postHandler}
        >
          Begin
        </NextButton>
      </div>
      <div className="second-box">Challenge Created!</div>
      <div className="third-box">
        <img src={img} alt="img" width="390" height="340" />
      </div>
      <div className="fourth-box">
        How about sharing this challenge with your friends? 
      </div>
      <CopyToClipboard onClick={onCopy} text={state.value}>
        <NextButton1
          onClick={() => {
            toast.success("copied!", { position: "top-center" });
            return;
          }}
        >
          share
        </NextButton1>
      </CopyToClipboard>

      <ToastContainer />
    </Container>
  );
};

export default Link;

const Container = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  height: 100%;
  max-width: 379px;
  width: 100%;
  border: 4px solid black;
  background-color: #ffffff;
  border-top: 2px solid black;
  .top {
    width: 100%;
    height: 100px;
  }

  .second-box {
    width: 330px;
    height: 50px;
    font-family: Gmarket SansBold;
    font-size: 28px;
    color: #3f3f3f;
    font-weight: bold;
    margin: 70px 25px 0px;
  }
  .third-box {
    margin: 30px -5px;
  }
  .fourth-box {
    width: 280px;
    height: 31px;
    font-family: Gmarket SansMedium;
    font-size: 18px;
    font-weight: 700;
    margin: 20px 40px 0px;
  }
  .link-box {
    width: 336px;
    height: 134px;
    border: 4px solid #3f3f3f;
    margin: 121px 16px 0px;
    .link-text {
      height: 45px;
      width: 100%;
      font-size: 18px;
      font-weight: bold;
      padding-top: 20px;
      font-family: Gmarket SansBold;
      border-bottom: 2px solid #3f3f3f;
      text-align: center;
    }
    .links {
      display: flex;
      .kakao-link {
        width: 166px;
        height: 46px;
        border-right: 2px solid #3f3f3f;
        text-align: center;
        padding-top: 23px;
        &:hover {
          cursor: pointer;
          background-color: #3f3f3f;
          color: #ffffff;
        }
      }
      .copied-link {
        width: 168px;
        height: 46px;
        text-align: center;
        padding-top: 23px;
        &:hover {
          cursor: pointer;
          background-color: #3f3f3f;
          color: #ffffff;
        }
      }
    }
  }
`;

const NextButton = styled.button`
  position: absolute;
  width: 100px;
  height: 30px;
  border: none;
  outline: none;
  color: #6dbb91;
  font-family: Gmarket SansMedium;
  font-size: 18px;
  font-weight: 600;
  margin: 24px 0px 0px 264px;
  background-color: #ffffff;

  &:hover {
    cursor: pointer;
    background-color: #3f3f3f;
    color: #ffffff;
  }
`;

const NextButton1 = styled.button`
  position: fixed;
  bottom: 0.2em;
  width: 375px;
  height: 85px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  margin-left: -4px;
  background-color: #151419;
  cursor: pointer;
`;
