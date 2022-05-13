import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as searchActions } from "../redux/modules/search";

const Nav = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = React.useState("");

  const searchHandler = () => {
    dispatch(searchActions.searchDB(keyword));
  };

  return (
    <Container>
      <Box2>
        <LoginInput
          value={keyword}
          placeholder="검색어를 입력해주세요"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />

        <LoginButton onClick={searchHandler}>검색하기</LoginButton>
      </Box2>
      <Box2>추천 챌린지</Box2>
    </Container>
  );
};

export default Nav;

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

const LoginInput = styled.input`
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

const LoginButton = styled.button`
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
