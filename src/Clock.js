import { useState, useEffect } from "react";

// Each index represents: [top, top-left, top-right, middle, bot-left, bot-right, bottom]
const SEGMENT_MAP = {
  0: [1, 1, 1, 0, 1, 1, 1],
  1: [0, 0, 1, 0, 0, 1, 0],
  2: [1, 0, 1, 1, 1, 0, 1],
  3: [1, 0, 1, 1, 0, 1, 1],
  4: [0, 1, 1, 1, 0, 1, 0],
  5: [1, 1, 0, 1, 0, 1, 1],
  6: [1, 1, 0, 1, 1, 1, 1],
  7: [1, 0, 1, 0, 0, 1, 0],
  8: [1, 1, 1, 1, 1, 1, 1],
  9: [1, 1, 1, 1, 0, 1, 1],
};

const Digit = ({ value }) => {
  const active = SEGMENT_MAP[value] || [];
  const segments = [
    "top",
    "top-left",
    "top-right",
    "middle",
    "bot-left",
    "bot-right",
    "bottom",
  ];

  return (
    <div className="digit-container">
      {segments.map((pos, i) => (
        <div key={pos} className={`segment ${pos} ${active[i] ? "on" : ""}`} />
      ))}
    </div>
  );
};

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setTimeout(() => {
      setTime(new Date());
    }, 1000);
    return () => clearTimeout(interval);
  }, [time]);

  const pad = (n) => n.toString().padStart(2, "0");
  const hours = pad(time.getHours());
  const minutes = pad(time.getMinutes());
  const seconds = pad(time.getSeconds());

  return (
    <div className="clock-wrapper">
      <div className="clock-display">
        <Digit value={hours[0]} />
        <Digit value={hours[1]} />
        <div className="colon" />
        <Digit value={minutes[0]} />
        <Digit value={minutes[1]} />
        <div className="colon" />
        <Digit value={seconds[0]} />
        <Digit value={seconds[1]} />
      </div>
    </div>
  );
}
