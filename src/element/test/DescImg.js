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
height:360px;
background-image: url("${(props) => props.src}");
background-size: cover;
margin: 4px;
`

export default DescImg;