//YJ

import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <>
  <Wrap>
    2022 © Hagnhae 6C6<br />
    github.com/Hangae6C6
  </Wrap>
  </>;
};

const Wrap = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ede7d3;
  align-items: center;
  padding: 0;
margin: 0;
font-size: 12px;
font-weight: 400;
color: #909090;
text-align: center;
display: grid;
`;


export default Footer;
