import React, { useState, useRef, useEffect } from 'react'
import anime from 'animejs'
import styled from 'styled-components';

const MainWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  .generic, .generic2, .generic3 {
    background-color: rebeccapurple;
    height: 100px;
    width: 100px;
    border-radius: 5px;
  }
`;

export default function TimeLine() {
  const [playing, setPlaying] = useState(false);
  const animation = useRef(null);

  useEffect(() => {
    animation.current = anime.timeline({
      easing: 'easeOutElastic',
      direction: 'alternate', // go back
      // delay: 200,
      delay: anime.stagger(300, {easing: 'easeInOutQuart'}),
      duration: 2000,
      autoplay: false
    });
    animation.current.add({
      targets: ['.generic', '.generic2', '.generic3'],
      translateX: 250,
      rotate: 360
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
      <div className='generic'>TimeLine1</div>
      <div className='generic2'>TimeLine2</div>
      <div className='generic3'>TimeLine3</div>
    </MainWrapper>
  )
}
