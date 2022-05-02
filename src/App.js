import "./App.css";
import { useState } from "react";
import Timer from "./timer";
import SessionTimer from "./sessionTimer";
import StartForm from "./startForm";
import Button from "react-bootstrap/Button";

function App() {
  const [session, setSession] = useState();

  const [isPlaying, setIsPlaying] = useState(false);

  const handleStartSession = (sessionInfo) => {
    setSession(sessionInfo);
    setIsPlaying(true);
  };

  const handleStopSession = (sessionInfo) => {
    setSession({
      trainingDuration: 0,
      repDuration: 0,
      restDuration: 0,
    });
    setIsPlaying(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>Hiit Timer</h3>
        </div>
        <div>
          {isPlaying && (
            <SessionTimer
              initialDuration={session?.trainingDuration}
              isPlaying={isPlaying}
            />
          )}
        </div>
      </header>
      {!isPlaying && (
        <div>
          <StartForm
            onStart={(sessionInfo) => {
              handleStartSession(sessionInfo);
            }}
          />
        </div>
      )}
      <div className="page-content">
        {isPlaying && (
          <>
            <Timer
              initialRepDuration={session?.repDuration}
              initialRestDuration={session?.restDuration}
            />
            <br />
            <Button variant="danger" onClick={handleStopSession}>
              Stop
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
