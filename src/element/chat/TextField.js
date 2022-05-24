// import React, { useCallback, useEffect, useState, useRef } from "react";
// import styled from "styled-components";
// import io from "socket.io-client";
// import TextBoxes from "./TextBoxes";

// const socket = io.connect("http://13.125.228.240/");

// const TextField = (props) => {
//   const [userName, setUsername] = useState("");
//   const [room, setRoom] = useState([]);
//   const [showChat, setShowChat] = useState(false);

//   const joinRoom = () => {
//     console.log("1");
//     if (userName !== "" && room !== "") {
//       console.log("2");
//       socket.emit("join_room", room);
//       console.log(userName, room);
//       setShowChat(true);
//     }
//   };

//   return (
//     <>
//       {!showChat ? (
//         <div>
//           <Name>이름을 입력해주세요</Name>
//             <Input
//             placeholder="name"
//             type="text"
//             onChange={(e) => {
//               setUsername(e.target.value);
//             }}
//           />
          
          
//           <Name>채팅방 번호를 입력해주세요</Name>
//             <Input
//             type="text"
//             placeholder="roomid"
//             onChange={(e) => {
//               setRoom(e.target.value);
//             }}
//           />
         
          
//           <Join onClick={joinRoom}>입장하기</Join>
//         </div>
//       ) : (
//         <TextBoxes socket={socket} userName={userName} room={room} setRoom={setRoom}/>
//       )}
//     </>
//   );
// };

// const Name = styled.div`
// background-color: #151419;
// color: #fff;
// text-align: center;
// font-weight: 700;
// font-size: 20px;
// width: 90%;
// margin: 10px;
// padding: 10px;
// `

// const Input = styled.input`
// width: 93%;
// height: 40px;
// margin: 10px;
// `

// const Join = styled.div`
// width: 95%;
// height: 45px;
// margin: 10px;
// font-size: 20px;
// font-weight: 700;
// background-color: #6dbb91;
// color: #fff;
// border-radius: 0;
// border: none;
// cursor: pointer;
// border: 2px solid #151419;
// text-align: center;
// line-height: 45px;
// `

// export default TextField;
