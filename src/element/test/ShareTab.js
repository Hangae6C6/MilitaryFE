import React from "react";
import styled from "styled-components";
import { kakaoShare } from "../../data/share";

const ShareTab = () => {
  return (
    <div>
      {/* <ShareDiv>결과 공유하기</ShareDiv>
      <ShareIcon
        onClick={() => {
        //   kakaoShare();
        }}
      >
        카카오, 네이버, 트위터, 페이스북
      </ShareIcon> */}
    </div>
  );
};

const ShareDiv = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 10px;
`;

const ShareIcon = styled.div`
  width: 100%;
  height: 100%;
  margin: 15px;
`;
export default ShareTab;
