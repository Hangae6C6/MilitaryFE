import React from 'react';
import styled from 'styled-components';

const AnswerBtn = ({children}) => {
    return (
        <div>
                <Answer>{children}</Answer>
        </div>
    );
};


const Answer = styled.div`
height: 100px;
background: #FFFFFF;
border-bottom: 2px solid #151419;
`
export default AnswerBtn;