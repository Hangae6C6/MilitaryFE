import React from 'react';
import styled from 'styled-components';

const DescImg = (props) => {
    const {src} = props;

    const styles = {
        src,
    }
    return (
        <div>
            <DescriptImage {...styles}> </DescriptImage>
        </div>
    );
};

const DescriptImage = styled.div`
height:375px;
width: 100%;
background-image: url("${(props) => props.src}");
background-size: cover;
border-bottom: 2px solid #151419;
`

export default DescImg;