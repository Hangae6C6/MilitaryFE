import React from "react";
import styled from "styled-components";
import gobackIcon from "../../shared/icons/icnBackNormalBlack35.svg";
import deleteIcon from "../../shared/icons/icnCloseBlack32.svg";
import addIcon from "../../shared/icons/icnPlusBlack32.svg";
import { Meter } from "grommet";

const Plan = ({
  type,
  steps,
  content,
  onContentChange,
  addStepHandler,
  deleteStepHandler,
  onBack,
}) => {
  const bottom = React.useRef(null);

  const scrollToBottom = () => {
    bottom.current.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(scrollToBottom, [addStepHandler]);

  return (
    <Container>
      <div className="arrow" onClick={onBack}>
        <img src={gobackIcon} alt="goback" />
      </div>
  
      <div className="progressBar">
        <Meter
          size="xsmall"
          height="67px"
          width="375px"
          type="bar"
          background="#FAFAFA"
          color="#1FB57E"
          value={90}
        />
      </div>

      <div className="title">
        <div id="type">{type}</div>
        <div className="title-text">목표를 위한 STEP</div>

        <span className="sub-title">
         쉽게 시작할수 있는 할일을 저고 실천한다면
         <br/>큰 목표를 이룰 수 있지 말입니다! (최대20개)
        </span>
      </div>
      <div className="boxes">
        <div className="delete-btn" onClick={addStepHandler}>
          <img src={addIcon} alt="addIcon" />
        </div>
        <textarea
          className="step-input"
          value={content}
          placeholder="최대 10자까지 가능합니다"
          maxLength="15"
          type="text"
          onChange={(e) => onContentChange(e.target.value)}
        ></textarea>
      </div>

      <Wrap>
        {[...steps].map((step, idx) => {
          return (
            <div className="box" key={step + idx}>
              <div className="step-nums">{idx + 1}</div>
              <div className="step-inputs">{step.stepContent}</div>
              <div className="delete-btns">
                <img
                  src={deleteIcon}
                  alt="deleteIcon"
                  onClick={() => deleteStepHandler(step.stepNum)}
                />
              </div>
            </div>
          );
        })}
        <div ref={bottom} />
      </Wrap>
    </Container>
  );
};

export default Plan;

const Container = styled.div`
height: 100%;
display: flex;
flex-direction: column;
overflow: hidden;
flex: 1;
  .arrow {
    position: absolute;
    margin: 15px 0px 0px 10px;
    cursor: pointer;
  }
 
  .progressBar {
    height: 67px;
    width: 100%;
    border-bottom: 2px solid #3f3f3f;
  }
  .title {
    min-height: 120px;
    width: 100%;
    border-bottom: 2px solid #3f3f3f;
    padding: 40px 0 0 30px ;
    #type {
      position: absolute;
      width: 100px;
      height: 30px;
      background-color: #3f3f3f;
      color: #e5e5e5;
      font-size: 24px;
      text-align: center;
      margin-left: 210px;
      font-family: Gmarket SansMedium;
    }
    .title-text {
      height: 35px;
      width: 230px;
      font-size: 24px;
      color: #151419;
      font-family: Gmarket SansBold;
    }
    .sub-title {
      height: 54px;
      width: 300px;
      max-height: 54px;
      max-width: 295px;
      font-family: Gmarket Sans;
   
    }
  }

  .boxes {
    width: 100%;
    height: 127px;
    border-bottom: 2px solid #3f3f3f;
    .delete-btn {
      position: absolute;
      margin: 10px 0px 0px 330px;
      &:hover {
        cursor: pointer;
        color: #000;
      }
    }
    .step-input {
      height: 30px;
      width: 260px;
      outline: none;
      border: 0px;
      max-width: 260px;
      resize: none;
      margin: 50px 0 0 50px;
      font-size: 16px;
      font-family: NanumSquareMedium;
      text-align: center;
      ::placeholder {
        color: #d9d9d9;
        text-align: center;
        
      }
    }
  }
  .box {
    display: flex;
    width: 100%;
    height: 127px;
    border-bottom: 2px solid #3f3f3f;
    .delete-btns {
      margin: 10px 0 0 0px;
      cursor: pointer;
    }
    .step-inputs {
      height: 30px;
      width: 240px;
      max-width: 260px;
      margin: 50px 5px 0 0;
      font-size: 16px;
      font-family: NanumSquareMedium;
      text-align: center;
    }
    .step-nums {
      width: 60px;
      height: 69px;
      margin: 30px 0px 0px 30px;
      font-size: 50px;
      font-family: Gmarket Sans;
      color: #3f3f3f;
    }
  }
`;

const Wrap = styled.div`
flex: 1;
  overflow: scroll;
  height: 100%;
`;
