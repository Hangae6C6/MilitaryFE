import React from "react";
import styled  from "styled-components";
import { useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import { ActionCreators as searchActions } from "../../redux/modules/mypage";
import { Select, DateInput } from "grommet";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const UserData = () => {
  const dispatch = useDispatch();
  const {id}  = useParams();
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [milCategory, setMilCategory] = React.useState("");
  const [rank, setRank] = React.useState("");
  const options = ["육군", "해군", "공군", "해병대", "특수부대"];
  const ranks = [
    "이병",
    "일병",
    "상병",
    "병장",
  ];




  const onStartDateChange = (e) => {

    const nextValue = e.value;
    setStartDate(nextValue);
  };
  const onEndDateChange = (e) => {
    const nextValue = e.value;
    setEndDate(nextValue);
  };

  const onMilCategoryChange = (e) => {
    setMilCategory(e);
  };

  const onRankChange = (e) => {
    setRank(e);
  };

  const signupDataHandler = () => {
    if (startDate === "" ||
        endDate === "" ||
        milCategory === "" ||
        rank === ""
    ) {
      toast.error("빈칸을 입력해주세요", { position:"top-center" });
      return;
    }
    if (startDate[0] === endDate[0] | startDate[0] > endDate[0]) {
      toast.error("입대일과 전역일을 확인해주세요", {
        position: "top-center",
      });
      return;
    }

    dispatch(searchActions.addUserDataDB(id, startDate[0], endDate[0], milCategory, rank));
  };

  return (
    <Container>
     
      <div className="top">
     
      </div>
      <div id="title-box">
        <p id="p">Soldier Challegners</p>
      </div>
      <Box2>
        <div id="p">Enlisted Date</div>
        <Wrap>
          <DateInput
            id="input"
            format="mm-dd-yyyy"
            value={startDate}
            onChange={onStartDateChange}
            defaultValue="string"
            
          />
        </Wrap>
        <div id="p">Discharged Date</div>
        <Wrap>
          <DateInput
            id="input"
            format="mm-dd-yyyy"
            value={endDate}
            onChange={onEndDateChange}
            defaultValue="string"
          />
        </Wrap>
        <Wrap>
          <Select
            id="inputs"
            placeholder="Please select your unit"
            value={milCategory}
            options={options}
            onChange={({ value: nextValue }) => onMilCategoryChange(nextValue)}
            size={"large"}
          />
        </Wrap>

        <Wrap>
          <Select
            id="inputs"
            placeholder="Please select your rank"
            value={rank}
            options={ranks}
            onChange={({ value: nextValue }) => onRankChange(nextValue)}
            size={"large"}
          />
        </Wrap>
        <Empty/>
      </Box2>
      <NextButton onClick={signupDataHandler}>signup</NextButton>
      <ToastContainer/>
    </Container>
  );
};

export default UserData;
const Container = styled.div`
  display: block;
  box-sizing: border-box;
  max-width: 375px;
  height: 100%;
  width: 100%;
  border: 2px solid #151419;
  .nav {
    width: 100%;
    height: 44px;
    background-color: #151419;
    #logo {
      margin: 13px 0 0 20px;
      width: 140px;
    }
  }
  .top {
    height: 69px;
    width: 100%;
    border-top: 4px solid #ffffff;
    background-color: #151419;
  }
 
  #title-box {
    width: 100%;
    height: 159px;
    display: flex;
    border-top: 2px solid #151419;
    background-color: #151419;

    #p {
      font-size: 34px;
      font-family: Gmarket SansBold;
      margin: 15px 70px;
      color: #ffffff;
    }
  }
`;

const Wrap = styled.div`
  height: 65px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  #input {
    margin-top: 8px;
    border: none;
    outline: none;
  }
  #inputs {
    margin-top: 8px;
    border: none;
    outline: none;
  }
`;
const Empty = styled.div`
  width: 100%;
  border-top: 1px solid #151419;
`;

const Box2 = styled.div`
  display: grid;
  font-size: 18px;
  font-family: Gmarket SansMedium;
  #p {
    box-sizing: border-box;
    padding: 20px 0 0 20px;
    height: 65px;
    width: 100%;
    border-top: 1px solid #151419;
    border-bottom: 1px solid #151419;
    color: #151419;
  }
`;

const NextButton = styled.button`
  position: fixed;
  bottom: 0.2em;
  margin-left: -2px;
  padding: 32px 159px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #151419;
  border-top: 1px solid #151419;
  cursor: pointer;
`;
