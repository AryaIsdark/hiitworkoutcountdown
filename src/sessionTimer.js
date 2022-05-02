import { CountdownCircleTimer } from "react-countdown-circle-timer";

const SessionTimer = ({ isPlaying, initialDuration }) => {
  return (
    <CountdownCircleTimer
      size={64}
      strokeWidth={2}
      isPlaying={isPlaying}
      duration={initialDuration}
      colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[7, 5, 2, 0]}
    >
      {({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        return `${minutes}:${seconds}`;
      }}
    </CountdownCircleTimer>
  );
};

export default SessionTimer;
