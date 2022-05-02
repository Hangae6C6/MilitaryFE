import React from 'react';
import styled from 'styled-components';

const NextBtn = (props) => {
    const {onClick, children} = props;
    return (
        <React.Fragment>
            <NextButton onClick={onClick}>{children}</NextButton>
        </React.Fragment>
    );
};


const NextButton = styled.div`
width:100%;
background-color: bisque;
cursor: pointer;
text-align: center;
align-items: center;
padding:10px 0;
border-radius: 20px;
`;

export default NextBtn;