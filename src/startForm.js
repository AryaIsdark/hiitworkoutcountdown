import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const StartForm = ({ onStart }) => {
  const [sessionInfo, setSessionInfo] = useState({
    trainingDuration: 900,
    repDuration: 45,
    restDuration: 15,
  });

  const handleOnStart = () => {
    onStart(sessionInfo);
  };

  return (
    <Card>
      <Card.Header as="h5">New Training</Card.Header>
      <Card.Body>
        Training duration
        <Form.Select
          value={sessionInfo.trainingDuration}
          onChange={(e) =>
            setSessionInfo({
              ...sessionInfo,
              trainingDuration: parseInt(e.target.value),
            })
          }
        >
          <option value={600}>10 minutes</option>
          <option value={900}>15 minutes</option>
          <option value={1200}>20 minutes</option>
          <option value={1800}>30 minutes</option>
        </Form.Select>
        Rep duration
        <Form.Select
          defaultValue={sessionInfo.repDuration}
          onChange={(e) =>
            setSessionInfo({
              ...sessionInfo,
              repDuration: parseInt(e.target.value),
            })
          }
        >
          <option value={60}>60 seconds</option>
          <option value={45}>45 seconds</option>
          <option value={30}>30 seconds</option>
        </Form.Select>
        Rest duration
        <Form.Select
          defaultValue={sessionInfo.restDuration}
          onChange={(e) =>
            setSessionInfo({
              ...sessionInfo,
              restDuration: parseInt(e.target.value),
            })
          }
        >
          <option value={60}>20 seconds</option>
          <option value={45}>45 seconds</option>
          <option value={30}>30 seconds</option>
          <option value={15}>15 seconds</option>
        </Form.Select>
      </Card.Body>
      <Card.Footer>
        <Button onClick={handleOnStart}>Start</Button>
      </Card.Footer>
    </Card>
  );
};

export default StartForm;
