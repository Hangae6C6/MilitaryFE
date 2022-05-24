import React from 'react';
import styled from 'styled-components';

const Wrap = ({children}) => {
    return (
        <div>
            <Wrapper>
                {children}
            </Wrapper>
        </div>
    );
};

const Wrapper = styled.div`
background-color: #fff;
height: 100vh;
  max-width: 375px;
  width: 375px;
  border: 2px solid #151419;
`

export default Wrap;