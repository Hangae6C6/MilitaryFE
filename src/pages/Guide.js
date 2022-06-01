import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Scrollbar } from "swiper";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slide1 from "../image/slide1.png";
import slide2 from "../image/slide2.png";
import slide3 from "../image/slide3.png";
import slide4 from "../image/slide4.png";
import slide5 from "../image/slide5.png";

const Guide = (props) => {
  return (
    <Container>
          <NextButton
          onClick={() => {
            window.location.pathname = '/';
          }}
        >
          홈으로
        </NextButton>
      <Box>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={true}
          scrollbar={true}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="군인테스트" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="군인유형" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="챌린지개설하기" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="채팅" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="전체 프로그래스" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  height: 100%;
  max-width: 375px;
  border: 2px solid #151419;
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
const NextButton = styled.button`
  position: absolute;
  width: 100px;
  height: 30px;
  border: none;
  outline: none;
  color: #6dbb91;
  font-family: Gmarket SansMedium;
  font-size: 18px;
  font-weight: 600;
  margin: 24px 0px 0px 264px;
  background-color: #ffffff;

  &:hover {
    cursor: pointer;
    background-color: #3f3f3f;
    color: #ffffff;
  }
`;

const Box = styled.div`
  z-index: 1000;
  margin-top: 50px;
`;

export default Guide;
