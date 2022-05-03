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
margin: 8px 0;
`

export default TypeDesc;