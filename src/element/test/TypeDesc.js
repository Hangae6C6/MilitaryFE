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
font-size: 24px;
border-bottom: 2px solid #151419;
text-align: center;
`

export default TypeDesc;