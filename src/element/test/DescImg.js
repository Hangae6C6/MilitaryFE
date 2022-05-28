import React from 'react';
import styled from 'styled-components';

const DescImg = (props, {children}) => {
    const {src, bgc} = props;

    const styles = {
        src,
        bgc,
    }
    return (
        <div>
            <DescriptImage {...styles}> {children} </DescriptImage>
        </div>
    );
};

const DescriptImage = styled.div`
height:214px;
background-image: url("${(props) => props.src}");
background-color: ${(props) => props.bgc};
background-size: cover;
border-bottom: 2px solid #151419;
border-top: 2px solid #151419;
`

export default DescImg;