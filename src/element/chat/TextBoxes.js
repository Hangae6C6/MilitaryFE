import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import ScrollToBottom from "react-scroll-to-bottom";
import { history } from "../../redux/configureStore";

const TextBoxes = ({ setRoom, socket, userName, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const nowTime = moment().format("kk:mm");

  const onLeft = () => {
    console.log("5");
    socket.emit("unconnect", () => {
      console.log("6");
      setMessageList(messageList.concat(`${userName} joined`));
    });
  };

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: userName,
        message: currentMessage,
        time: nowTime,
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
    socket.on("unconnect", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div>
      <ChatBody>
        <ScrollToBottom>
          {messageList.map((messageContent, idx) =>
            userName === messageContent.author ? (
              <You key={idx}>
                <MsgDiv>
                  <Author>{messageContent.author}</Author>
                  <MyMsgBox>{messageContent.message}</MyMsgBox>
                </MsgDiv>
                <div>{messageContent.time}</div>
              </You>
            ) : (
              <Other key={idx}>
                <MsgDiv>
                  <Author>{messageContent.author}</Author>
                  <YourMsgBox>{messageContent.message}</YourMsgBox>
                </MsgDiv>
                <div>{messageContent.time}</div>
              </Other>
            )
          )}
        </ScrollToBottom>
      </ChatBody>
      <ChatFoot>
        <input
          type="text"
          value={currentMessage}
          placeholder="hey..."
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
          onKeyPress={(e) => {
            e.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>send</button>
        <button
          onClick={() => {
            onLeft();
            history.push("/");
            window.location.reload();
          }}
        >
          exit
        </button>
      </ChatFoot>
    </div>
  );
};

const ChatBody = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const ChatFoot = styled.div`
position: inherit;
width: 100%;
bottom:2px;
`;
const You = styled.div`
  width: 50%;
  padding: 0.3rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 0.5rem;
`;
const Other = styled.div`
  width: auto;
  padding: 0.3rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 0.5rem;
`;
const MsgDiv = styled.div`
  display: grid;
`;
const Author = styled.p`
padding: 0;
margin: 0;
font-weight: 400;
font-size: 14px;
line-height: 22px;
`
const MyMsgBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 15px;

  left: 4.27%;
  right: 26.4%;
  top: 29.93%;
  bottom: 57.51%;

  /* White */
  background: #ffffff;
  border: 3px solid #000000;
`;
const YourMsgBox = styled.div`
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 15px;

  left: 26.4%;
  right: 4.27%;
  top: 46.18%;
  bottom: 41.26%;

  /* Black */
  background: #3f3f3f;
  color: #ffffff;
  /* Black */
  border: 3px solid #3f3f3f;
`;
export default TextBoxes;
