//YJ

import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { io } from "socket.io-client";

const Chat = () => {
  return (
    <>
      <ChatDiv></ChatDiv>
      <InputDiv>
        <Input />
        <SendButton />
      </InputDiv>
    </>
  );
};

const ChatDiv = styled.div`
  height: 92%;
  width: 100%;
  background: #f3f3f3;
`;

const InputDiv = styled.div`
  display: flex;
`;
const Input = styled.input`
  border: 1px solid #212122;
  width: 90%;
  height: 100%;
  padding: 20px;
`;
const SendButton = styled.button`
  width: 10%;
  background-color: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 1px;
  height: 50px;
  width: 10%;
`;

export default Chat;
