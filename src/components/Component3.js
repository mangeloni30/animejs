import React, { useRef, useEffect } from 'react'
import anime from 'animejs'
import styled from 'styled-components';

const MainWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;

  button {
    background-color: transparent;
    border: 1px solid #266DB6;
    box-sizing: border-box;
    color: #00132C;
    font-family: "Avenir Next LT W01 Bold",sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    padding: 16px 23px;
    position: relative;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin-bottom: 30px;
    margin-right: 20px;
  }

  button:active {
    outline: 0;
  }

  button:hover {
    background-color: transparent;
    cursor: pointer;
  }

  button:before {
    background-color: #D5EDF6;
    content: "";
    height: calc(100% + 3px);
    position: absolute;
    right: -7px;
    top: -9px;
    transition: background-color 300ms ease-in;
    width: 100%;
    z-index: -1;
  }

  button:hover:before {
    background-color: #6DCFF6;
  }

  .generic, .generic2, .generic3 {
    height: 100px;
    width: 100px;
    border-radius: 5px;
    border: 10px solid #233042;
    margin-bottom: 25px;
  }
`;

export default function Component1() {
  const animation = useRef(null);

  useEffect(() => {
    animation.current = anime.timeline({
      easing: "easeInOutBack",
      duration: 2000,
      autoplay: false,
      delay: anime.stagger(500),
      loop: true
    });
    animation.current.add({
      targets: [".generic", ".generic2", ".generic3"],
      keyframes: [
        {translateY: -40},
        {translateX: 250},
        {translateY: 40},
        {translateX: 0},
        {translateY: 0}
      ]
    })
  }, []);

  const handlePlayClick = () => {
    animation.current.play();
  }

  return (
    <MainWrapper>
      <button
        type='button'
        onClick={handlePlayClick}
      >
        Play
      </button>
      <button
        type='button'
        // onClick={handlePauseClick}
      >
        Pause
      </button>
      <button
        type='button'
        // onClick={handleRestartClick}
      >
        Restart
      </button>
      <div className='generic'/>
      <div className='generic2'/>
      <div className='generic3'/>
    </MainWrapper>
  )
}
