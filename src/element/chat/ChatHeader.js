import React from 'react';
import styled from 'styled-components';

const ChatHeader = ({children}) => {
    return (
        <div>
            <HeadDiv>{children}</HeadDiv>
        </div>
    );
};

const HeadDiv = styled.div`
height: 144px;
line-height: 140px;
width: 100%;
background-color: #fff;
text-align: center;
align-items: center;
font-size: 26px;
font-family: NanumSquareMedium;
`

export default ChatHeader;