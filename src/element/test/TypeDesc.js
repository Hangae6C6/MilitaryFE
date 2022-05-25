import React from 'react';
import styled from 'styled-components';

const TypeDesc = ({children}) => {
    return (
        <div>
            <DescP>
                {children}
            </DescP>
        </div>
    );
};

const DescP = styled.p`
margin: 0;
font-size: 20px;
border-bottom: 2px solid #151419;
text-align: center;
line-height: 36px;
height: 48px;
`

export default TypeDesc;