import React from "react";
import styled from "styled-components";
import { ReactComponent as Write } from "../../image/write.svg";
import { Link } from "react-router-dom";
import { first, second, third, fourth } from "../../image/index";

const Mine = ({ userId, userInfo }) => {
  let endDate = userInfo.endDate;
  let endDay = new Date(endDate);
  let now = new Date();
  let distance = endDay - now;
  let dDay = Math.floor(distance / (1000 * 60 * 60 * 24));

  return (
    <>
      <MyPage>
        <MyP>마이페이지</MyP>
        <Link to={`/myPage/userProfile/edit/${userId}`}>
          <Write />
        </Link>
      </MyPage>
      <Wrap>
        <PDiv>
          <Bigbox>
            <Ddaydiv>
              <span>D-{dDay}</span>
            </Ddaydiv>
            <NameDiv>
              <DivDiv>
                <P padding="0" margin="0">
                  {userInfo.User.userNick}
                </P>
              </DivDiv>
            </NameDiv>
            <ProfList>
              <span>
                {userInfo.armyCategory} - {userInfo.rank}
              </span>
            </ProfList>{" "}
          </Bigbox>

          <RankImg
            src={
              userInfo.rank === "이병"
                ? first
                : userInfo.rank === "일병"
                ? second
                : userInfo.rank === "상병"
                ? third
                : fourth
            }
          />
        </PDiv>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 220px;
`;

const MyPage = styled.div`
  text-align: center;
  align-content: center;
  border-bottom: 2px solid #151419;
  display: flex;
  justify-content: space-between;
  padding: 10px 0 10px 140px;
`;

const MyP = styled.div`
  width: 100px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
const Bigbox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  width: 210px;
`;
const PDiv = styled.div`
  margin: 30px auto 10px auto;
  display: flex;
  text-align: center;
  font-family: Gmarket SansBold;
  
  width: 100%;
  border-bottom: 2px solid #151419;
`;

const Ddaydiv = styled.div`
  margin-left: 20px;
  width: 60px;
  background-color: #151419;
  color: #fff;
  padding: 6px 2px;
  font-family: Gmarket SansBold;
`;

const ProfList = styled.p`
  padding: 0 20px;
  text-align: left;
  font-size: 16px;
  font-family: Gmarket SansMedium;
`;

const NameDiv = styled.div`
  width: 220px;
  font-weight: 800;
  font-size: 30px;
  display: grid;
  margin: 15px 0;
`;

const DivDiv = styled.div`
  display: flex;
  padding: 0px 18px;
`;

const P = styled.p`
  font-family: Gmarket SansBold;
  margin: 20px 0 0 0;
  padding: 0;
`;

const RankImg = styled.div`
  background-image: url("${(props) => props.src}");
  width: 118px;
  height: 142px;
  background-size: cover;
  border: 2px solid #151419;
`;

export default Mine;
