//YJ

import React from "react";

import styled from "styled-components";

import ChatHeader from "../element/chat/ChatHeader";
import TextField from "../element/chat/TextField";

const Chat = () => {
  return (
    <Wrap>
      <ChatHeader>CHATTING</ChatHeader>
      <TextField></TextField>
    </Wrap>
  );
};

const Wrap = styled.div`
height: 93vh;
  width: 375px;
  border: 2px solid #151419;
  background-color: #fff;
`;

export default Chat;
