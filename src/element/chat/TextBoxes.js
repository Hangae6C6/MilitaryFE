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
    console.log('5')
    socket.emit("unconnect", () => {
      console.log('6')
      setMessageList(messageList.concat(`${userName} joined`));
    });
  }
  

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
                <div>{messageContent.message}</div>
                <div>{messageContent.author}</div>
                <div>{messageContent.time}</div>
              </You>
            ) : (
              <Other key={idx}>
                <div>{messageContent.message}</div>
                <div>{messageContent.author}</div>
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
            history.push('/');
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
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
`;
const ChatFoot = styled.div``;
const You = styled.div`
  justify-content: flex-start;
`;
const Other = styled.div`
  justify-content: flex-end;
`;

export default TextBoxes;
