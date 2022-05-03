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
height: 40px;
width: 90%;
background-color: beige;
display: inline-block;
margin: 5px;
`
export default AnswerBtn;