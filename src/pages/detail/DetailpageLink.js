import React from "react";
import { history } from "../../redux/configureStore";
import { useParams } from "react-router";
import styled from "styled-components";
import img from "../../shared/images/imgChallengeCompleted335.png";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { CopyToClipboard } from "react-copy-to-clipboard";

const DetailpageLink = () => {
  const {challengeId} = useParams();
  const [state, setState] = React.useState({
    value: "https://soldierchallengers.com",
    copied: false,
  });
  

React.useEffect(()=>{
  setState({value: `https://soldierchallengers.com/detailpage/${challengeId}`});
},[challengeId])

  const onCopy = () => {
    this.setState({ copied: true });
  };

  return (
    <Container>
      
      <div className="top">
   
        <NextButton
         onClick={history.back}
        >
          뒤로가기
        </NextButton>
      </div>

      <div className="second-box">챌린지 공유하기</div>
      <div className="third-box">
        <img src={img} alt="img" width="390" height="340" />
      </div>
      <div className="fourth-box">
        친구, 연인, 부대원들과 함께 하는 건 어때요?
      </div>
      <CopyToClipboard onClick={onCopy} text={state.value}>
        <NextButton1
          onClick={() => {
            toast.success("챌린지 링크 복사 완료!", { position: "top-center" });
            return;
          }}
        >
          링크 복사하기
        </NextButton1>
      </CopyToClipboard>
      <ToastContainer/>

    </Container>
  );
};

export default DetailpageLink;

const Container = styled.div`
overflow: hidden;
box-sizing: border-box;
height: 100%;
  max-width: 379px;
  width: 100%;
  border: 4px solid #3f3f3f;
  background-color: #ffffff;
  border-top: 2px solid black;
  .top {
    width: 100%;
    height: 100px;
  }

  .second-box {
    width: 287px;
    height: 50px;
    font-family: Gmarket SansBold;
    font-size: 28px;
    color: #3f3f3f;
    font-weight: bold;
    margin: 70px 85px 0px;
  }
  .third-box {
    margin: 30px -5px
  }
  .fourth-box {
    width: 200px;
    height: 31px;
    font-family: Gmarket SansMedium;
    font-size: 20px;
    font-weight: 700;
    margin: 16px 90px 0px;
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
  margin-left: -4px;
  padding: 32px 138px;
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

