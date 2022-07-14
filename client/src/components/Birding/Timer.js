import Countdown from "react-countdown";

function Timer({ endGame }) {
  const Completionist = () => <span>Out of time!</span>;

  // Renderer callback with condition
  const renderer = ({ seconds, completed }) => {
    if (completed) {
      endGame();
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>Time: {seconds}</span>;
    }
  };

  return <Countdown date={Date.now() + 5000} renderer={renderer} />;
}

export default Timer;
