//YJ

import React from "react";

import styled from "styled-components";

import ChatHeader from "../element/chat/ChatHeader";
import TextField from "../element/chat/TextField";

const Chat = () => {
  return (
    <Wrap>
      <ChatHeader>대화방</ChatHeader>
      <TextField></TextField>
    </Wrap>
  );
};

const Wrap = styled.div`
  max-height: 812px;
  max-width: 375px;
  height: 812px;
  width: 100%;
  border: 2px solid #151419;
`;

export default Chat;
