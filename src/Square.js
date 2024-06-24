import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import anime from "animejs";

const MainWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  .square {
    background-color: rebeccapurple;
    height: 100px;
    width: 100px;
    border-radius: 5px;
  }
`;

const Square = () => {
  const [playing, setPlaying] = useState(false);
  const animation = useRef(null);

  const handleClick = () => {
    playing ? animation.current.pause() : animation.current.play();
    setPlaying(!playing);
  };

  useEffect(() => {
    animation.current = anime.timeline({
      direction: "alternate",
      loop: false,
      autoplay: false,
      easing: "easeInOutSine"
    });
    animation.current.add(
      {
        targets: '.square',
        translateX: '250px'
      }
    );
  }, []);

  return (
    <MainWrapper>
      <button
        onClick={handleClick}
        type='button'
      >
        translateX
      </button>
      <div className='square' />
    </MainWrapper>
  );
};

export default Square;
