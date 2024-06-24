import anime from "animejs";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
.player {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dots {
  display: flex;
  align-items: center;
  list-style: none;
  height: 100px;
  padding: 0;
  margin: 0;
}

.dots li {
  border-radius: 2px;
  margin: 0 2px;
  width: 16px;
  height: 16px;
  background-color: #26de81;
}

button {
  background-color: #20bf6b;
  border-radius: 2px;
  color: white;
  font-size: 16px;
  border: none;
  padding: 4px 16px;
  font-weight: bold;
  cursor: pointer;
  width: 100px;
  margin-top: 24px;
}
`;

const ticks = Array.from(Array(8));

const Player = () => {
  const [playing, setPlaying] = useState(false);
  const animation = useRef(null);

  const handleClick = () => {
    // console.log("animation ", animation);
    playing ? animation.current.pause() : animation.current.play();
    setPlaying(!playing);
  };

  useEffect(() => {
    animation.current = anime.timeline({
      direction: "alternate",
      loop: true,
      autoplay: false,
      easing: "easeInOutSine"
    });

    for (const tick in ticks) {
      animation.current.add(
        {
          targets: `.dots li:nth-child(${Number(tick) + 1})`,
          scaleY: 1.5 + Math.random() * 4,
          duration: 300 + Math.random() * 300
        },
        Math.random() * 600
      );
    }
  }, []);

  return (
    <MainWrapper>
      <div className="player">
        <ul className="dots">
          {ticks.map((_, i) => (
            <li key={i} />
          ))}
        </ul>
        <button onClick={handleClick}>{playing ? "Pause" : "Play"}</button>
      </div>
    </MainWrapper>
  );
};

export default Player;