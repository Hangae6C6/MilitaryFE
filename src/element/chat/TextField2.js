// import React, { useCallback, useEffect, useState, useRef } from "react";
// import styled from "styled-components";
// import io from "socket.io-client";
// import TextBoxes from "./TextBoxes";

// const socket = io.connect("http://hwanginho.shop/");

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
//           <input
//             type="text"
//             onChange={(e) => {
//               setUsername(e.target.value);
//             }}
//           />
//           <input
//             type="text"
//             placeholder="roomid"
//             onChange={(e) => {
//               setRoom(e.target.value);
//             }}
//           />
//           <button onClick={joinRoom}>join</button>
//         </div>
//       ) : (
//         <TextBoxes socket={socket} userName={userName} room={room} setRoom={setRoom}/>
//       )}
//     </>
//   );
// };

// export default TextField;
