import React from 'react';
import ReactPlayer from 'react-player/lazy';
import styled from 'styled-components';

const Video = ({playList, index}) => {


    return (
        <>
        <Container>
        <div className="top">
          <div
            className="arrow"
            onClick={() => {
              window.location.pathname = "/";
            }}
          >
              메인으로
          </div>
       
        </div>
            <h2 id='title'>동기부여 영상
            </h2>
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url={'https://youtu.be/Qd1MBEhkWU8'}  
                    width='375px'         
                    height='500px'       
                    playing={true}       
                    muted={true}          
                    controls={true}       
                    light={false}         
                    pip={true}           
                    poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}   // 플레이어 초기 포스터 사진
                    onEnded={() => 
                    window.location.pathname='/'
                    }  
                />
            </div>
            </Container>
        </>
    )
}

export default Video;

const Container = styled.div`
 overflow: hidden;
  height: 100%;
  max-width: 375px;
  border: 2px solid #151419;
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .top {
    height: 69px;
    width: 100%;
    border-bottom: 2px solid #151419;

    .arrow {
      margin: 30px 0px 0px 20px;
      cursor: pointer;
      font-family: Gmarket SansBold;
      font-size: 20px;

    }

  }
  #title{
    font-family: Gmarket Sans;
      font-size: 30px;
      text-align: center;
  }
  .player-wrapper{
      background-color: #151419;
      height: 100%;
      display: flex;
      align-items: center;
  }
`;