import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import gobackIcon from "../shared/icons/icnBackNormalBlack35.svg";
import moment from "moment";
import { useParams } from "react-router";
import io from "socket.io-client";

const ChatSocket = () => {
  const socket = io.connect("https://pizzaboy.shop");

  const chatRef = React.useRef(null);
  const { challengeId, userNick } = useParams();
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState([]);
  const time = moment().format("kk:mm");

  const sendMessage = () => {
    if (message === "") {
      return;
    }
    const currentMessage = {
      message,
      time,
      userNick,
      room: challengeId,
    };
    socket.emit("send_message", currentMessage);
    setMessage("");
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const joinRoom = () => {
    if (userNick !== "" && challengeId !== "") {
      socket.emit("join_room", challengeId);
    }
  };

  useEffect(() => {
    if (userNick && challengeId) {
      joinRoom();
    }
  }, []);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived((list) => [...list, data]);
    });
  }, [socket]);

  const scrollToBottom = () => {
    chatRef.current.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(scrollToBottom, [messageReceived]);

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
        {messageReceived.map((cur, idx) => (
          <div
            id={userNick === cur.userNick ? "myMessage" : "others"}
            key={cur + idx}
          >
            <span id="message-box">{cur.message}</span>
            <div>
              <span id="userNick-box">{cur.userNick}</span>
              <span id="time-box">{cur.time}</span>
            </div>
          </div>
        ))}
        <div ref={chatRef} />
      </TextArea>
      <BottomWrap>
        <input
          id="inputArea"
          inputtype="text"
          value={message}
          onKeyPress={onKeyPress}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <button
          id="sendBtn"
          onClick={() => {
            sendMessage();
          }}
        >
          {" "}
          보내기
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
  display: flex;
  flex-direction: column;
  overflow: scroll;
  #myMessage {
    margin: 3px;
    text-align: right;
    #userNick-box {
      font-size: 12px;
      font-family: NanumSquareMedium;
    }
    #message-box {
      margin-right: 1px;
      text-align: right;
      position: relative;
      background-color: #1fb57e;
      border: 1px solid;
      padding: 10px;
      display: inline-block;
    }
    #time-box {
      padding-left: 5px;
      font-size: 10px;
      font-family: NanumSquareMedium;
    }
  }
  #others {
    margin: 3px;
    text-align: left;
    #message-box {
      text-align: left;
      position: relative;
      background-color: #ffffff;
      border: 1px solid;
      padding: 10px;
      display: inline-block;
    }

    #time-box {
    
      font-size: 10px;
      font-family: NanumSquareMedium;
    }
    #userNick-box {
      padding-right: 5px;
      font-size: 12px;
      font-family: NanumSquareMedium;
    }
  }
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
    width: 70px;
    border: none;
    border-left: 2px solid #151419;
    background-color: #6dbb91;
    font-size: 16px;
    font-family: NanumSquareMedium;
    cursor: pointer;
  }
`;
