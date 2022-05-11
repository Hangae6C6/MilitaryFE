import React, {useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ActionCreators as mypageAction } from "../../redux/modules/mypage";
import { ActionCreators as userAction } from "../../redux/modules/user";

//이미지/아이디/군종/닉네임/계급/계급딱지/디데이
const Mine = () => {
  const dispatch = useDispatch();
  console.log(useSelector((state) => state.mypage))
  const userIDForBinding = useSelector((state) => state.user.user.userID);
  const userNickForBinding = useSelector((state) => state.user.user.userNick)
 
  return (
    <>
      <MyPage>마이페이지</MyPage>
      <Wrap>
        <ImgDiv>
          <ProfImg />
        </ImgDiv>
        <PDiv>
          <ProfList>{userIDForBinding}</ProfList>
          <ProfList>육군</ProfList>
          <ProfList>{userNickForBinding}</ProfList>
        </PDiv>
        <RankDiv>
          <ProfList>병장</ProfList>
          <RankImg />
          <ProfList>D-000</ProfList>
        </RankDiv>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
`;

const MyPage = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  padding: 10px;
`;

const ImgDiv = styled.div`
  margin: auto 25px;
`;

const ProfImg = styled.div`
  background-image: url("http://www.urbanbrush.net/web/wp-content/uploads/edd/2018/03/web-20180302110610094677.png");
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-size: cover;
`;

const PDiv = styled.div`
  margin: 0 auto;
`;

const ProfList = styled.p`
  margin: 5px;
`;

const RankDiv = styled.div`
  margin: 0 auto;
`;

const RankImg = styled.div`
  background-image: url("https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220110_199%2F1641812276138PK5n9_JPEG%2F202112220924162.jpg&type=sc960_832");
  width: 50px;
  height: 50px;
  background-size: cover;
`;
export default Mine;
