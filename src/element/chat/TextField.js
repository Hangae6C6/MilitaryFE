import React, { useCallback, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const socket = io.connect("http://hwanginho.shop/");

socket.emit("init", { name: "jaehoon" });

const TextField = (props) => {
  const [chatArr, setChatArr] = useState([]);
  const [chat, setChat] = useState({ name: "", message: "" });
  const [userId, setUserId] = useState("");
  const [room, setRoom] = useState('');

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };
  // const [currentSocket, setCurrentSocket] = useState();

  // useEffect(() => {
  //   setCurrentSocket(io("localhost:5000"));
  // }, []);

  // if (currentSocket) {
  //   currentSocket.on("connection", () => {
  //     currentSocket.emit("join", myInfo);
  //   });
  // }

  const dispatch = useDispatch();
  const userNick = useSelector((state) => state.user.userNick)
  console.log(userNick);
  const Ref = useRef(null);

  const scrollToBottom = () => {
    if (Ref.current) {
      Ref.current.scrollTop = Ref.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat.message]);
  // const Ref = useRef();

  // const scrollToBottom = useCallback(() => {
  //   console.log(Ref.current)
  //   Ref.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  // // }, []);

  // useEffect(() => {
  //   scrollToBottom();
  // }, [TextField]);

  // useEffect(() => {
  //   Ref.current?.scrollIntoView({behavior:'smooth'});
  // }, [chat.message])

  useEffect(() => {
    socket.on("receive message", (message) => {
      setChatArr((chatArr) => chatArr.concat(message));
    });
    //receive message이벤트에 대한 콜백을 등록해줌
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (chat) {
      socket.emit("sendMessage", chat, () => setChat(""));
    }
  };
  // useEffect(() => {
  //   return () => {
  // socket.close();
  //   };
  // }, []);

  const buttonHandler = useCallback(
    (info) => {
      socket.emit("onSend", { name: chat.name, message: chat.message });
      console.log(info);
      //버튼을 클릭했을 때 send message이벤트 발생
    },
    [chat]
  );

  const changeMessage = useCallback(
    (e) => {
      console.log(e);
      setChat({ name: chat.name, message: e.target.value });
    },
    [chat]
  );

  return (
    <Box>
      <div className="Box">
        <div>
          {chatArr.map((ele, idx) => (
            <div className="Chat" key={idx}>
              <div>{userId}</div>
              {chat.name === ele.name ? (
                <MessageBox>{ele.message}</MessageBox>
              ) : (
                <MessageOtherBox>{ele.message}</MessageOtherBox>
              )}
            </div>
          ))}
        </div>
        <TextBox>
          <Input
            placeholder="내용"
            onChange={changeMessage}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(e)}
          ></Input>
          <Button onClick={buttonHandler} width="130px">
            등록
          </Button>
        </TextBox>
      </div>
    </Box>
  );
};

const Box = styled.div``;
const TextBox = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: #ffffff;
  align-items: center;
`;
const Input = styled.input`
  display: inline-block;
  box-sizing: border-box;
  width: 300px;
  height: 48px;
  left: 20px;
  top: 753px;
  gap: 10px;

  position: inherit;
  left: 5.33%;
  right: 5.33%;
  top: 92.73%;
  bottom: 1.35%;

  /* White */

  background: #ffffff;
  /* Black */

  border: 2px solid #3f3f3f;
`;

const scrollToBottom = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const Button = styled.button`
  width: 50px;
  height: 48px;
  top: 2px;
  left: 270px;
  border: none;
  box-sizing: border-box;
  background-color: #3f3f3f;
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 15px;

  position: relative;
  left: 26.13%;
  right: 4.53%;
  top: 60.59%;
  bottom: 32.76%;

  /* Black */
  color: #ffffff;
  background: #3f3f3f;
  /* Black */

  border: 3px solid #ffffff;
`;

const MessageOtherBox = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  background: #ffffff;
  border: 3px solid #000000;
`;

export default TextField;
