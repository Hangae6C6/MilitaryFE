import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import styled from "styled-components";
import { history } from "../../redux/configureStore";
import gobackIcon from "../../shared/icons/icnBackNormalBlack35.svg";
import moment from "moment";
import { useParams } from "react-router";

const socket = io.connect("");

const ChatSocket = () => {
    const {challengeId, userNick} = useParams();
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const time = moment().format("kk:mm");
  
  const sendMessage = () => {
      if (message !== ""){
        return;
      }

      let messageData = {
          userNick,
          challengeId,
          message,
          time, 
      }
    socket.emit("send_message", { message: { message },  });
  };


  const joinRoom = () => {
    if (userNick !== "" && challengeId!== "") {
      socket.emit("join_room", challengeId);
      console.log(userNick, challengeId);
    }
  };

  useEffect(() => {
      if(userNick&&challengeId){
          joinRoom();
      }
  },[])

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);
  return (
    <Container>
      <div className="top">
        <div
          className="arrow"
          onClick={() => {
            history.back();
          }}
        >
          <img src={gobackIcon} alt="goback" />
        </div>
      </div>
      <TextArea>
        <span>{messageReceived}</span>
      </TextArea>
      <BottomWrap>
        <input
          id="inputArea"
          inputtype="text"
          placeholder="Message..."
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <button id="sendBtn" onClick={sendMessage}>
          {" "}
          Send Message
        </button>
      </BottomWrap>
    </Container>
  );
};

export default ChatSocket;

const Container = styled.div`
  overflow: hidden;
  height: 100%;
  max-width: 375px;
  border: 2px solid #151419;
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  .top {
    height: 69px;
    width: 100%;
    border-bottom: 2px solid #151419;

    .arrow {
      position: absolute;
      margin: 17px 0px 0px 20px;
      cursor: pointer;
    }
  }
`;

const TextArea = styled.span`
  flex: 1;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const BottomWrap = styled.div`
  overflow: hidden;
  z-index: 9;
  height: 83px;
  width: 100%;
  border-top: 2px solid #151419;
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  bottom: 0;
  #inputArea {
    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word;
    overflow: auto;
    outline: none;
    border: none;
    width: 300px;
    height: 81px;
    background-color: #fff;
    font-size: 16px;
    font-family: NanumSquareMedium;
  }
  #sendBtn {
    border: none;
    border-left: 2px solid #151419;
    padding: 5px 5px;
    background-color: #6dbb91;
    font-size: 16px;
    font-family: NanumSquareMedium;
    cursor: pointer;
    &:hover {
      background-color: #fff;
    }
  }
`;
