import React, { useState, useEffect } from "react";

const Timer = ({ title }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="timer">
      <h2>{title}</h2>
      <p>Elapsed Time: {elapsedTime} seconds</p>
    </div>
  );
};

export default Timer;
