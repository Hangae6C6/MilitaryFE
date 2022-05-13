import React from "react";
import styled from "styled-components";
import img from "../../shared/images/workout.png";

const MyCallenge = () => {
  return (
    <Container>
      <idv id="box">
        <img src={img} alt="img" height="52px" width="52px" />
        <div id="type">독서</div>
        <div id="title">책 100권 읽기</div>
        <div id="count">84명 참여중</div>
      </idv>
    </Container>
  );
};

export default MyCallenge;

const Container = styled.div`
  height: 130px;

  #box {
    max-height: 130px;
    max-width: 125px;
    border: 2px solid #151419;
    #type {
    }
    #title {
    }
    #count {
    }
  }
`;
