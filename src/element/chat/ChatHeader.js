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
height: 80px;
line-height: 80px;
width: 100%;
background-color: #fff;
text-align: center;
align-items: center;
font-family: Gmarket SansBold;
`

export default ChatHeader;