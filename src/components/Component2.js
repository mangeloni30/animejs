import React, { useState, useRef, useEffect } from 'react'
import { ReactComponent as Polygon } from '../svg/polygon.svg';
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
`;

export default function Component1() {
  const [playing, setPlaying] = useState(false);
  const animation = useRef(null);

  useEffect(() => {
    animation.current = anime.timeline({
      easing: "easeInOutExpo",
      direction: 'alternate',
      duration: 2000,
      autoplay: false,
    });
    animation.current.add({
      targets: ['.svg-attributes-demo polygon', 'feTurbulence', 'feDisplacementMap'],
      points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
      baseFrequency: 0,
      scale: 1,
      loop: true,
    })
  }, []);

  const handleClick = () => {
    setPlaying((prevValue) => !prevValue);
    playing ? animation.current.pause() : animation.current.play();
  }

  return (
    <MainWrapper>
      <button
        type='button'
        onClick={handleClick}
      >
        {playing ? 'stop' : 'play'}
      </button>
      <div className="demo-content align-center svg-attributes-demo">
        <Polygon />
      </div>
    </MainWrapper>
  )
}
