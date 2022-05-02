import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import useSound from "use-sound";
import countdownSound from "./countdown.wav";

const Timer = ({ initialRepDuration = 0, initialRestDuration = 0 }) => {
  const [play, { stop }] = useSound(countdownSound);

  const [isResting, setIsResting] = useState(false);
  const [isRepping, setIsRepping] = useState(true);

  const [repDuration, setRepDuration] = useState(initialRepDuration);
  const [restDuration, setRestDuration] = useState(initialRestDuration);

  const handleOnRestComplete = () => {
    setIsRepping(true);
    setIsResting(false);
    setRepDuration(initialRepDuration);
  };

  const handleOnRepComplete = () => {
    setIsRepping(false);
    setIsResting(true);
    setRestDuration(initialRestDuration);
  };

  const handleOnUpdate = (remainingTime) => {
    if (remainingTime === 4) {
      play();
    }
  };

  return (
    <>
      {isRepping && (
        <>
          <CountdownCircleTimer
            size={300}
            strokeWidth={20}
            isPlaying={isRepping}
            duration={repDuration}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
            onComplete={handleOnRepComplete}
            onUpdate={handleOnUpdate}
          >
            {({ remainingTime }) => (
              <h1 style={{ fontSize: "100px" }}> {remainingTime}</h1>
            )}
          </CountdownCircleTimer>
          <p>Go Go GO...</p>
        </>
      )}
      {isResting && (
        <>
          <CountdownCircleTimer
            size={300}
            strokeWidth={20}
            isPlaying={isResting}
            duration={restDuration}
            colors={"#90ff83 "}
            onComplete={handleOnRestComplete}
            onUpdate={handleOnUpdate}
          >
            {({ remainingTime }) => (
              <h1 style={{ fontSize: "100px" }}> {remainingTime}</h1>
            )}
          </CountdownCircleTimer>
          <p>Cool Down...</p>
        </>
      )}
      <audio></audio>
    </>
  );
};

export default Timer;
