import React from 'react';
import styled from 'styled-components';
import Back from "../../image/back.svg";
import { history } from "../../redux/configureStore";

const ChatHeader = ({children}) => {
    return (
        <div>
            <HeadDiv>
            <BackIcon
            src={Back}
            onClick={() => {
              history.back();
            }}
          />{children}</HeadDiv>
        </div>
    );
};

const HeadDiv = styled.div`
height: 80px;
line-height: 80px;
width: 100%;
background-color: #fff;
text-align: center;
align-items: center;
font-family: Gmarket SansBold;
`
const BackIcon = styled.img`
  z-index: 1;
  float: left;
  padding: 23px 0 0 10px;
  cursor: pointer;
`;

export default ChatHeader;