//SY

import React from "react";
import styled from "styled-components";
import Challenge from "../component/main/Challenge";

const Main = () => {
    return (
        <MainBox>
        <Challenge />
        </MainBox>
    );
}

export default Main;

const MainBox = styled.div`
 background-color: #ffffff;
 width: 100%;
 height: 100%;
`;