import React from 'react';
import styled from 'styled-components';

const Question = ({children}) => {
    return (
        <div>
            <QDiv>
          <QImage />
          <QText>{children}</QText>
        </QDiv>
        </div>
    );
};

const QDiv = styled.div`
justify-content: center;
`

const QImage = styled.div`
  background-image: url("https://dummyimage.com/600x600/b0b0b0/222");
  height: 345px;
  width:345px;
  background-size: cover;
  display: inline-block;
`;



const QText = styled.div`
height: 80px;
width: 90%;
background-color: beige;
display: inline-block;
`


export default Question;