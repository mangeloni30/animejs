import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import anime from 'animejs';

const MainWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  .generic {
    background-color: rebeccapurple;
    height: 100px;
    width: 100px;
    border-radius: 5px;
  }
`;

export default function Generic() {
  const [playing, setPlaying] = useState(false);
  const animation = useRef(null);
  useEffect(() => {
    animation.current = anime.timeline({
      easing: 'easeOutElastic',
      loop: true,
      duration: 750,
      autoplay: false,
    })
    animation.current.add({
      targets: '.generic',
      translateX: 250
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
      <div className='generic' />
    </MainWrapper>
  )
}
