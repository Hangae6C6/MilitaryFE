import React from "react";
import styled from "styled-components";
// import useHistory from "";

const BeginPage = () => {
//   const history = useHistory();
  return (
    <div>
      <Image />
      <Button
        onClick={() => {
        //   history.push("/question");
        }}
      ></Button>
    </div>
  );
};

const Image = styled.div`
  background-image: url('https://dummyimage.com/600x600/b0b0b0/222');
  background-size: cover;
  `;
const Button = styled.div``;
export default BeginPage;
