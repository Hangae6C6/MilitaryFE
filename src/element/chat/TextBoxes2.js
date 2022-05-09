import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import ScrollToBottom from "react-scroll-to-bottom";

const TextBoxes = ({ setRoom, socket, userName, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [join, setJoin] = useState(null)

  const nowTime = moment().format("kk:mm");


  const onLeaveRoom = () => {
    socket.emit("user left", join, () => setJoin(null));
  };

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: userName,
        message: currentMessage,
        time: nowTime,
        // new Date(Date.now()).getHours + ":" + new Date(Date.now()).getMinutes,
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.emit('add user', userName);

    socket.on('user joined', (data) => {
      setMessageList(messageList.concat(`${data.username}님이 입장하셨습니다`))
    });

    // messsgeItem : {msg: String, name: String, timeStamp: String}
    socket.on("receive_message", (messageItem) => {
      setMessageList((msgList) => [...msgList, messageItem]);
      console.log(messageItem);
    });
    socket.on("connection", (systemMessage) => {
      setMessageList((msgList) => [...msgList, { msg: systemMessage }]);
    });
    socket.on("disconnect", (systemMessage) => {
      setMessageList((msgList) => [...msgList, { msg: systemMessage }]);
    });
    socket.on("user left", (data) => {
     setMessageList(messageList.concat(`${data.userName}님이 퇴장하셨습니다`))
    });
    return () => {
      socket.off('disconnect');
    };
  });

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
        <button onClick={onLeaveRoom}>exit</button>
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
