import React from "react";
import styled from "styled-components";

import { history } from "../../redux/configureStore";
import TEST from "../../image/TEST.png";
import { ReactComponent as Back } from "../../image/back.svg";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as testCountActions } from "../../redux/modules/main";



const GoTest = () => {
const dispatch = useDispatch();
// const testCount = useSelector((state)=> state.testCount.testCount);

  // React.useEffect(()=>{
  //   dispatch(testCountActions.getTestCountDB());
  // },[dispatch])


  return (
    <div>
      <GotestDiv>
        <HeaderDiv>
        <Back onClick={()=>{history.back()}} cursor='pointer' margin='10px'/>
          <MatchP>입대하면 뭐 되지?</MatchP>
        </HeaderDiv>
        <TestImg src={TEST} />
        <div className="n">지금까지<br />우리와 함께 '뭐'가 된<br />전우 00명</div>
      </GotestDiv>
    </div>
  );
};

const GotestDiv = styled.div`
  font-family: NanumSquareBold;
  text-align: center;
  .n {
    margin: 20px 0;
    font-family: Gmarket Sans;
    font-weight: 600;
    font-size: 20px;
    line-height: 137.02%;
  }

`;
const HeaderDiv = styled.div`
  height: 150px;
  width: 100%;
  padding: 30px 0;
  display: grid;
`;
const TestImg = styled.img`
  height: 363px;
  border-top: 2px solid #151419;
`;

const MatchP = styled.p`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`;
export default GoTest;
