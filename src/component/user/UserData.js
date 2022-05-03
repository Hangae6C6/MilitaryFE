import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as searchActions } from "../../redux/modules/modal";
import { Box, Select } from "grommet";

const UserData = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [milCategory, setMilCategory] = React.useState("");
  const [rank, setRank] = React.useState("");
  const armCategory = milCategory[0];

  const options = ['육군', '해군', '공군', '해병대', '특수부대'];

  const userDataHandler = () => {
    dispatch(
      searchActions.addUserDataDB(startDate, endDate, armCategory, rank)
    );
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
   
        <Box fill align="center" justify="start" pad="small" >
          <Select
            placeholder="소속부대를 선택해주세요"
            value={milCategory}
            multiple
            options={options}
            onChange={({ value: nextValue }) => setMilCategory(nextValue)}
            clear
          />
        </Box>
        
        <Inputs
          value={rank}
          placeholder="계급"
          type="text"
          onChange={(e) => {
            setRank(e.target.value);
          }}
        />
        <Button onClick={userDataHandler}>확인</Button>
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
