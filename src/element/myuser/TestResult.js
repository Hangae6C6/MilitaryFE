import React from 'react';
import styled from 'styled-components';


const TestResult = () => {
    return (
        <div>
            <ResultBtn>내 테스트 결과 보러가기</ResultBtn>
        </div>
    );
};

const ResultBtn = styled.div`
width: 100%;
height:50px;
background-color: #212121;
color:#ffffff;
text-align: center;
vertical-align: middle;
`


export default TestResult;