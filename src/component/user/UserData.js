import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as searchActions } from "../../redux/modules/modal";

const UserData = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const [armCategory, setArmCategory] = React.useState();
  const [rank, setRank] = React.useState();

  const userDataHandler = () => {
    dispatch(searchActions.addUserDataDB(startDate, endDate, armCategory, rank));
  };

  return (
    <Container>
      <Box2>
        <Inputs
          value={startDate}
          placeholder="입대일"
          type="date"
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
        />
        <Inputs
          value={endDate}
          placeholder="전역일"
          type="date"
          onChange={(e) => {
            setEndDate(e.target.value);
          }}
        />
         <Inputs
          value={armCategory}
          placeholder="소속부대(ex.육,해,공군,해병대,특수부대)"
          type="text"
          onChange={(e) => {
            setArmCategory(e.target.value);
          }}
        />
        <Inputs
          value={rank}
          placeholder="계급"
          type="text"
          onChange={(e) => {
            setRank(e.target.value);
          }}
        />
        <Button
          onClick={userDataHandler}
        >
          확인
        </Button>
 
      </Box2>
    </Container>
  );
};

export default UserData;

const Text = styled.div`
  color: "#222831";
  size: "14px";
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid red;
`;

const Box2 = styled.div`
  margin-top: 60px;
  display: grid;
  z-index: 10;
  border: 1px solid blue;
`;

const Inputs = styled.input`
  width: 340px;
  height: 48px;
  border-radius: 0px;
  padding: 16px;
  margin: 5px;
  box-sizing: border-box;
  border: 1px solid #dcdddd;
  font-size: 16px;
  &:hover {
  }
`;

const Button = styled.button`
  width: 340px;
  height: 48px;
  border-radius: 0px;
  padding: auto;
  margin: 5px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  background-color: #ffffff;
  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
`;

