import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import ScrollToBottom from "react-scroll-to-bottom";

const TextBoxes = ({ setRoom, socket, userName, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const [join, setJoin] = useState(null)

  moment();
  const nowTime = moment().format("kk:mm");

  // const onLeft = () => {
  //   console.log("5");
  //   socket.emit("leave-room", room, () => setRoom(null));
  //   console.log("6");
  // };

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     socket.on("remove-room", (roomName) => {
  //       setRoom((prev) => prev.filter((item) => item !== roomName));
  //     });
  //     socket.on("updateRooms", (newRooms) => {
  //       setRoom(newRooms);
  //     });
  //   });
  // });

  const onLeaveRoom = () => {
    socket.emit("leave-room", room, () => setRoom(null));
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

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     console.log("4");
  //     setMessageList((list) => [...list, data]);
  //   });
  // }, [socket]);

  useEffect(() => {
    // messsgeItem : {msg: String, name: String, timeStamp: String}
    socket.on("receive_message", (messageItem) => {
      setMessageList((msgList) => [...msgList, messageItem]);
      console.log(messageItem);
    });
    socket.on("connection", (systemMessage) => {
      setMessageList((msgList) => [...msgList, { msg: systemMessage }]);
    });
    socket.on("onDisconnect", (systemMessage) => {
      setMessageList((msgList) => [...msgList, { msg: systemMessage }]);
    });

    // socket.on("connect", () => {
    //   socket.on("remove-room", roomName => {
    //     setRoom(prev => prev.filter(item => item !== roomName));
    //   });

    //   socket.on("updateRooms", newRooms => {
    //     setRoom(newRooms);
    //   });
    // });
    // socket.on("remove-room", roomName => {
    //   setRoom(prev => prev.filter(item => item !== roomName));
    // });
    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      socket.on("remove-room", roomName => {
        setRoom(prev => prev.filter(item => item !== roomName));
      });

      socket.on("updateRooms", newRooms => {
        setRoom(newRooms);
      });
        });
  }, []);


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
