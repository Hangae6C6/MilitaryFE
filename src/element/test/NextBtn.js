import React from 'react';
import styled from 'styled-components';

const NextBtn = ({children}) => {
    return (
        <div>
            <Next>{children}</Next>
        </div>
    );
};

const Next = styled.div`
width: 100%;
height: 50px;
text-align: center;
line-height: 48px;
background-color: #151419;
color: #ffffff;
`

export default NextBtn;