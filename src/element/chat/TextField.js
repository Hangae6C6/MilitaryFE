import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import io from "socket.io-client";
//3.34.98.31
const socket = io.connect("http://hwanginho.shop/");

const TextField = () => {
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setchat] = useState([]);
  const [room, setRoom] = useState("");

  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setchat([...chat, { name, message }]);
    });
  });

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };


  // const sendMessage = () => {
  //   socket.emit("send_message", { message, room });
  // };


  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = state;
    socket.emit("send_message", { name, message, room });
    setState({ message: "", name });
  };

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name} : <span>{message}</span>
        </h3>
      </div>
    ));
  };

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  return (
    <div>
      <form onSubmit={onMessageSubmit}>
        <ChatDiv>{renderChat()}</ChatDiv>
        <InputDiv>
          <Input
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
          <SendButton
            onClick={() => {
              joinRoom();
            }}
          />
          <Input
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.name}
            label="name"
          />
          <Input
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            label="Message"
          />
          <SendButton onClick={onMessageSubmit}/>
        </InputDiv>
      </form>
    </div>
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
  height: 55px;
`;

export default TextField;
export { socket };
