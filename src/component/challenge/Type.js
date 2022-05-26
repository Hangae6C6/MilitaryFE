import React from "react";
import styled from "styled-components";
import gobackIcon from "../../shared/icons/icnBackNormalBlack35.svg";
import { Meter } from "grommet";
import logo from "../../shared/icons/handlogo11.png";
import mainlogo from "../../shared/icons/mainlogo.png";

const Type = ({ onBack, onTypeChange }) => {
  const [types, setTypes] = React.useState([
    { id: 0, type: "취업", isChecked: false },
    { id: 1, type: "공모전", isChecked: false },
    { id: 2, type: "자격증", isChecked: false },
    { id: 3, type: "독서", isChecked: false },
    { id: 4, type: "운동", isChecked: false },
    { id: 5, type: "외국어", isChecked: false },
    { id: 6, type: "직업탐색", isChecked: false },
    { id: 7, type: "자기개발", isChecked: false },
    { id: 8, type: "기타", isChecked: false },
  ]);

  const checkedHandler = (id) => {
    for(let i=0; i<types.length; i++){
      if (id === types[i].id){
          if(types[i].isChecked === true){
            types[i].isChecked = false
          }else{
            types[i].isChecked = true;
          }
        }else{
          types[i].isChecked = false;
        }
      }
      setTypes((prevTypes) =>[...prevTypes]);
  };


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
          value={80}
        />
      </div>
      <div className="title">
        <div className="title-text">챌린지 주제</div>
        <span className="sub-title">
         이번 챌린지의 주제를 아래에서 
         <br/>선택합니다!
        </span>
      </div>
      <Boxes>
        {types.map((cur, i) => (
          <div
            className={cur.isChecked ? "checked" : "unChecked"}
            key={cur.type + i}
            onClick={() => {
              checkedHandler(cur.id);
              onTypeChange(cur.type);
            }}
          >
            <p>{cur.type}</p>
          </div>
        ))}
      </Boxes>
    </Container>
  );
};

export default Type;

const Container = styled.div`

 
  .arrow {
    position: absolute;
    margin: 15px 0px 0px 10px;
    cursor: pointer;
  }
 
  .progressBar {
    height: 67px;
    width: 100%;
    border-bottom: 2px solid #151419;
  }
  .title {
    height: 120px;
    width: 100%;
    border-bottom: 2px solid #151419;
    padding: 40px 0 0 30px ;
    .title-text {
      height: 35px;
      width: 130px;
      font-size: 24px;
      font-family: Gmarket SansMedium;
      color: #151419;
      font-weight: 800;
      
    }
    .sub-title {
      height: 54px;
      width: 300px;
      max-height: 54px;
      max-width: 295px;
      font-family: Gmarket Sans;
   
    }
  }
`;

const Boxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 378px;
  max-height: 381px;

  .unChecked {
    position: relative;
    font-family: Gmarket SansMedium;
    padding-top: 55px;
    text-align: center;
    height: 96px;
    width: 123.7px;
    border-bottom: 2px solid #151419;
    border-right: 2px solid #151419;
    background-color: #ffffff;
    margin-right: 0px;
    &:hover {
      cursor: pointer;
      background-color: #1fb57e;
    }
  }

  .checked {
    position: relative;
    font-family: Gmarket SansMedium;
    padding-top: 55px;
    text-align: center;
    height: 96px;
    width: 123.7px;
    border-bottom: 2px solid #151419;
    border-right: 2px solid #151419;
    background-color: #1fb57e;
    margin-right: 0px;
    cursor: pointer;
  }
`;
