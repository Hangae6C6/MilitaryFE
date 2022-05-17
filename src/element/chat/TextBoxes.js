import React, { useEffect, useState, useRef, useCallback } from "react";
import styled from "styled-components";
import moment from "moment";
import ScrollToBottom from "react-scroll-to-bottom";
import { usePrompt } from "./blocker";
import { history } from "../../redux/configureStore";

const TextBoxes = ({ setRoom, socket, userName, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const nowTime = moment().format("kk:mm");
  const chatWindow = useRef();

  const moveScroll = useCallback(() => {
    if (chatWindow.current) {
      chatWindow.current.scrollTo({
        top: chatWindow.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

 
  // const MyComponent = () => {
  //   const formIsDirty = true; // Condition to trigger the prompt.
  //   usePrompt( 'Leave screen?', formIsDirty );
  //   return (
  //     socket.on("leave_room", () => {
  //       console.log("6");
  //       setMessageList(messageList.concat(`${userName} disconnected`));
  //     })
  //   );
  // };

  // useEffect(() => {
  //   MyComponent()
  // }, []);

  const onLeft = () => {
    socket.on("leave_room", () => {
      console.log("6");
      setMessageList(messageList.concat(`${userName} disconnected`));
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
      moveScroll();
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
    socket.on('msg', (data) => {
      setMessageList((list) => [...list, data])
    })
    socket.on("leave_room", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <Wrap >
      <ChatBody>
        {messageList.map((messageContent, idx) =>
          userName === messageContent.author ? (
            <ScrollToBottom>
              <You key={idx}>
                <MsgDiv>
                  <Author>{messageContent.author}</Author>
                  <MyMsgBox>{messageContent.message}</MyMsgBox>
                </MsgDiv>
                <Time>{messageContent.time}</Time>
              </You>
            </ScrollToBottom>
          ) : (
            <Other key={idx}>
              <MsgDiv>
                <Author>{messageContent.author}</Author>
                <YourMsgBox>{messageContent.message}</YourMsgBox>
              </MsgDiv>
              <Time>{messageContent.time}</Time>
            </Other>
          )
        )}
      </ChatBody>
      <ChatFoot>
        <Input
          type="text"
          value={currentMessage}
          placeholder="내용을 입력해주세요"
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
          onKeyPress={(e) => {
            e.key === "Enter" && sendMessage();
          }}
        />
        <SendBtn onClick={sendMessage}>send</SendBtn>
        {/* <button
          onClick={() => {
            onLeft();
            history.push("/");
            window.location.reload();
          }}
        >
          exit
        </button> */}
      </ChatFoot>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 100%;
  height: 812px;
  /* overflow:scroll; */
`;

const ChatBody = styled.div`
  width: 100%;
  height: 72%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
const ChatFoot = styled.div`
  max-width: 375px;
  width: 100%;
  height: 70px;
  top: 730px;
  position: absolute;
  z-index: 999;
  display: flex;
`;
const You = styled.div`
  width: 90%;
  padding: 0.3rem;
  display: flex;
  justify-content: flex-end;
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
  overflow-y: auto;
`;
const Author = styled.p`
  padding: 0;
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;
const Time = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: -0.24px;

  /* Gray500 */

  color: #656565;
`;
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
const Input = styled.input`
  width: 300px;
  height: 70px;
  background-color: #fff;
  border: 3px solid #000000;
  box-sizing: border-box;
`;
const SendBtn = styled.button`
  width: 75px;
  height: 70px;
  background-color: #6dbb91;
  border: 3px solid black;
  &:hover {
    background-color: #fff;
  }
`;
export default TextBoxes;
