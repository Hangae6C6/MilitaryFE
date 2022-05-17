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
  max-height: 812px;
  max-width: 375px;
  height: 812px;
  width: 100%;
  border: 2px solid #151419;
`

export default Wrap;