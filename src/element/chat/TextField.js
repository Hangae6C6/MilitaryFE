import React, { useCallback, useEffect, useState } from "react";
import styled from 'styled-components';
import io from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";

const socket = io.connect("http://hwanginho.shop/");

socket.emit("init", { name: "jaehoon" });

const TextField = (props) => {
  const [chatArr, setChatArr] = useState([]);
  const [chat, setChat] = useState({ name: "", message: "" });
  const [userId, setUserId] = useState('');

  useEffect(() => {
    socket.on("receive message", (message) => {
      setChatArr((chatArr) => chatArr.concat(message));
    }); //receive message이벤트에 대한 콜백을 등록해줌
  }, []);

  // useEffect(() => {
  //   return () => {
  // socket.close();
  //   };
  // }, []);

  const buttonHandler = useCallback((info) => {
    socket.emit("send message", { name: chat.name, message: chat.message });
    console.log(info)
    //버튼을 클릭했을 때 send message이벤트 발생
  }, [chat]);

  const changeMessage = useCallback(
    (e) => {
      setChat({ name: chat.name, message: e.target.value });
    },
    [chat]
  );

  return (
    <Box>
      <Grid className="Box">
        <Grid>
          {chatArr.map((ele, idx) => (
            <div className="Chat" key={idx}>
              <div>{userId}</div>
              <div className="ChatLog">{ele.message}</div>
            </div>
          ))}
        </Grid>
        <Grid is_flex>
          <Input placeholder="  내용" onChange={changeMessage}></Input>
          <Button onClick={buttonHandler} width="130px">
            등록
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const Box = styled.div`
`
const Grid = styled.div`
`
const Input = styled.input`
`
const Button = styled.button`
`
export default TextField;