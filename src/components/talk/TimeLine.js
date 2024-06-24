import React, { useState, useRef, useEffect } from 'react'
import anime from 'animejs';
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
	const animation = useRef(null);
	const [play, setPlay] = useState();

	useEffect(() => {
		animation.current = anime.timeline({
			easing: "easeOutCirc",
			duration: 2000,
			autoplay: false,
			direction: "alternate"
		});
		animation.current.add({
			targets: ".generic",
			translateY: 150,
			rotate: 150
		})
	}, []);
	

	const handleClick = (playing) => {
		playing ? animation.current.play() : animation.current.pause()
		setPlay((prevValue) => !prevValue);
	}

	return (
		<MainWrapper>
			<button className='' onClick={() => handleClick(play ? false : true)}>{play ? "Pause" : "Play"}</button>
			<div className='generic'>TimeLine</div>
		</MainWrapper>
	)
}
