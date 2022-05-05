import React from "react";
import {  useLocation } from "react-router-dom";
import styled from "styled-components";
import { Anchor, Box, Button, CardBody, Text } from "grommet";

const Detail = () => {
    const location = useLocation();
    const post = location.state.card;
    console.log(post);


    return (
        <Box
        pad="small"
        align="center"
        background={{ color: "light-2", opacity: "strong" }}
        round
        gap="xsmall"
        width={{ min: "100px" }}
        margin={{ top: "10px" }}
      >
        <Text>{post.challengeType}</Text>
        <Text>{post.challengeProgress}</Text>
        <Text>{post.challengeViewcnt}</Text>
        <Text>{post.challengeTitle}</Text>
        <Text>{post.challengeCnt}</Text>
        <Text>{post.challengeDate}</Text>
        
    
      </Box>
    )
}

export default Detail;