import React from "react";
import styled from "styled-components";
import { Meter } from "grommet";

const DetailpageProgress = () => {
  return (
    <Container onClick={() => {
        window.location.pathname= "/detailpage/rank";
      }}>
      <div id="firstBox">
        <div id="stepNum"><p style={{color:"#6DBB91"}}>07</p><p>/08</p></div>
        <div id="myRank">1st</div>
      </div>
      <div id="proBar">
        <Meter
          size="xsmall"
          height="20px"
          width="300px"
          type="bar"
          background="#FAFAFA"
          color="#6dbb91"
          value={80}
        />
      </div>
      <div id="secBox">
          <p>순위</p>
          <p>1/6</p>
      </div>
    </Container>
  );
};

export default DetailpageProgress;

const Container = styled.div`
  width: 375px;
  height: 219px;
  border-bottom: 2px solid #3f3f3f;
  
  #firstBox{
      width: 300px;
      margin-left: 37px;
      display: flex;
      justify-content: space-between;
      height: 142px;
      #myRank{
          padding-top: 27px; 
          font-size: 80px;
          font-family: Gmarket SansBold;
      }
      #stepNum{
          display: flex;
        padding-top: 60px; 
          font-size: 32px;
          font-family: Gmarket SansBold;
          color: #c4c4c4;
      }
  }
  #proBar{
      width: 300px;
      height: 20px;
      border: 2px solid #3f3f3f;
      margin-left: 37px;
  }
  #secBox{
      width: 300px;
      margin-left: 37px;
      display: flex;
      justify-content: space-between;
      font-family: Gmarket SansMedium;
  }
  &:hover{
        cursor: pointer;
        background-color: #3f3f3f;
        #myRank{
            color:#ffffff;
        }
        #proBar{
            border: 2px solid #ffffff;
        }
        #secBox{
            color:#ffffff;
        }
    }
`;
