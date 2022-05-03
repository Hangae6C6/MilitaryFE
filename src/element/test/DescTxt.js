import React from 'react';
import styled from 'styled-components';

const DescTxt = ({children}) => {
    return (
        <div>
            <DescDiv>
                <DescP>
                    {children}
                </DescP>
            </DescDiv>
        </div>
    );
};

const DescDiv = styled.div`
width:95%;
height: 100%;
background-color: aliceblue;
`

const DescP = styled.p`
margin:0;
padding:15px;
`

export default DescTxt;