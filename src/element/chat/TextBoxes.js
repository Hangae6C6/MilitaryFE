// import React, { useEffect, useState, useRef} from "react";
// import styled from "styled-components";
// import moment from "moment";
// import ScrollToBottom from 'react-scroll-to-bottom'

// const TextBoxes = ({ setRoom, socket, userName, room }) => {
//   const [currentMessage, setCurrentMessage] = useState("");
//   const [messageList, setMessageList] = useState([]);
//   const nowTime = moment().format("kk:mm");
//   const chatWindow = useRef();

 
//   // const MyComponent = () => {
//   //   const formIsDirty = true; // Condition to trigger the prompt.
//   //   usePrompt( 'Leave screen?', formIsDirty );
//   //   return (
//   //     socket.on("leave_room", () => {
//   //       console.log("6");
//   //       setMessageList(messageList.concat(`${userName} disconnected`));
//   //     })
//   //   );
//   // };

//   // useEffect(() => {
//   //   MyComponent()
//   // }, []);


//   const sendMessage = async () => {
//     if (currentMessage !== "") {
//       const messageData = {
//         room: room,
//         author: userName,
//         message: currentMessage,
//         time: nowTime,
//       };
//       await socket.emit("send_message", messageData);
//       setMessageList((list) => [...list, messageData]);
//       setCurrentMessage("");
//       window.scrollTo({ top: 1000, left: 0, behavior: "smooth" });
//       }
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setMessageList((list) => [...list, data]);
//     });
//     socket.on('msg', (data) => {
//       setMessageList((list) => [...list, data])
//     })
//     socket.on("leave_room", (data) => {
//       setMessageList((list) => [...list, data]);
//     });
//   }, [socket]);

//   return (
//     <Wrap >
//       <ChatBody>
//         {messageList.map((messageContent, idx) =>
//           userName === messageContent.author ? (
//             <ScrollToBottom>
//               <You key={idx}>
//                 <MsgDiv>
//                   <Author>{messageContent.author}</Author>
//                   <MyMsgBox>{messageContent.message}</MyMsgBox>
//                 </MsgDiv>
//                 <Time>{messageContent.time}</Time>
//               </You>
//               </ScrollToBottom>
//           ) : (
//             <Other key={idx}>
//               <ScrollToBottom>
//               <MsgDiv>
//                 <Author>{messageContent.author}</Author>
//                 <YourMsgBox>{messageContent.message}</YourMsgBox>
//               </MsgDiv>
//               <Time>{messageContent.time}</Time>
//               </ScrollToBottom>
//             </Other>
            
//           )
//         )}
//       </ChatBody>
//       <ChatFoot>
//         <Input
//           type="text"
//           value={currentMessage}
//           placeholder="내용을 입력해주세요"
//           onChange={(e) => {
//             setCurrentMessage(e.target.value);
//           }}
//           onKeyPress={(e) => {
//             e.key === "Enter" && sendMessage();
//           }}
//         />
//         <SendBtn onClick={sendMessage}>보내기</SendBtn>
//         {/* <button
//           onClick={() => {
//             onLeft();
//             history.push("/");
//             window.location.reload();
//           }}
//         >
//           exit
//         </button> */}
//       </ChatFoot>
//     </Wrap>
//   );
// };
// const Wrap = styled.div`
// background-color: #fff;
// height:100%;
//   max-width: 375px;
//   width: 100%;
// `;

// const ChatBody = styled.div`
//   width: 100%;
//   height: 90%;
//   display: flex;
//   flex-direction: column;
//   overflow: auto;
//   border-top: 2px solid #151419;
// `;
// const ChatFoot = styled.div`
//   max-width: 379px;
//   width: 100%;
//   height: 89px;
//   bottom: 0;
//   position: absolute;
//   z-index: 999;
//   display: flex;
//   margin: 0 0 0 -2px;
// `;
// const You = styled.div`
//   width: 90%;
//   padding: 0.3rem;
//   display: flex;
//   justify-content: flex-end;
//   align-items: flex-start;
//   margin-top: 0.5rem;
// `;
// const Other = styled.div`
//   width: auto;
//   padding: 0.3rem;
//   display: flex;
//   justify-content: flex-start;
//   align-items: flex-end;
//   margin-top: 0.5rem;
// `;
// const MsgDiv = styled.div`
//   display: grid;
//   overflow-y: auto;
// `;
// const Author = styled.p`
//   padding: 0;
//   margin: 0;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 22px;
// `;
// const Time = styled.p`
//   font-weight: 400;
//   font-size: 10px;
//   line-height: 14px;
//   /* identical to box height */

//   display: flex;
//   align-items: center;
//   letter-spacing: -0.24px;

//   /* Gray500 */

//   color: #656565;
// `;
// const MyMsgBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 15px;

//   left: 4.27%;
//   right: 26.4%;
//   top: 29.93%;
//   bottom: 57.51%;

//   /* White */
//   background: #ffffff;
//   border: 2px solid #000000;
// `;
// const YourMsgBox = styled.div`
//   box-sizing: border-box;

//   /* Auto layout */
//   display: flex;
//   flex-direction: row;
//   align-items: flex-end;
//   padding: 15px;

//   left: 26.4%;
//   right: 4.27%;
//   top: 46.18%;
//   bottom: 41.26%;

//   /* Black */
//   background: #6dbb91;
//   color: #000000;
//   /* Black */
//   border: 2px solid #151419;
// `;
// const Input = styled.input`
//   width: 300px;
//   height: 81px;
//   background-color: #fff;
//   border: 2px solid black;
//   font-size: 16px;
//   font-family: NanumSquareMedium;
  
// `;
// const SendBtn = styled.button`
//   width: 95px;
//   height: 87px;
//   background-color: #6dbb91;
//   border-top: 2px solid #151419;
//   font-size: 16px;
//   font-family: NanumSquareMedium;
//   &:hover {
//     background-color: #fff;
//   }
// `;
// export default TextBoxes;
