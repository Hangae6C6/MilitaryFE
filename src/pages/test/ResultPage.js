import React from 'react';
import styled from 'styled-components';
import DescImg from '../../element/test/DescImg';
import DescTxt from '../../element/test/DescTxt';
import GoTest from '../../element/test/GoTest';
import PersonType from '../../element/test/PersonType';
import ShareTab from '../../element/test/ShareTab';
import TypeDesc from '../../element/test/TypeDesc';

const ResultPage = () => {
    return (
        <div>
            <GoTest />
            <PersonDiv>
                <PersonType>성향</PersonType>
                <TypeDesc>--님의 유형은 00입니다.</TypeDesc>
            </PersonDiv>
            <DescImg src="http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg"/>
            <DescTxt>설명 텍스트</DescTxt>
            <ShareTab />
        </div>
    );
};

const PersonDiv = styled.div`
height: 60px;
width: 90%;
background-color: aliceblue;
border-radius: 8px;
padding:15px;
`

export default ResultPage;