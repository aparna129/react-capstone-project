import React, { useState } from "react";
import up from "../images/up.png";
import down from "../images/down.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import countdowntimer from "../count-down-timer.mp3";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [playing, setPlaying] = useState(false);
  const increaseSecond = () => {
    if (seconds === 59) {
      return;
    }
    setSeconds((sec) => sec + 1);
  };
  const increaseMinute = () => {
    if (minutes === 59) {
      return;
    }
    setMinutes((min) => min + 1);
  };
  const increaseHour = () => {
    setHours((hours) => hours + 1);
  };
  const decreaseSecond = () => {
    if (seconds === 0) {
      return;
    }
    setSeconds((sec) => sec - 1);
  };
  const decreaseMinute = () => {
    if (minutes === 0) {
      return;
    }
    setMinutes((min) => min - 1);
  };
  const decreaseHour = () => {
    if (hours === 0) {
      return;
    }
    setHours((hours) => hours - 1);
  };

  function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}:${minutes}:${seconds}`;
  }

  const playAudio = () => {
    const audio = new Audio(countdowntimer);
    audio.play();
  };

  const onTimerComplete = () => {
    setPlaying(false);
    playAudio();
  };

  return (
    <div>
      <div
        style={{
          width: "63.7vw",
          height: "26vh",
          backgroundColor: "#1E2343",
          position: "absolute",
          borderRadius: "15px",
          marginTop: "20px",
          marginLeft: "40px",
          display: "flex",
          boxSizing: "border-box",
          padding: "12px",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            height: "26vh",
            width: "170px",
            backgroundColor: "#191E39",
            borderRadius: "100px",
            marginLeft: "-5px",
            boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.8) inset",
          }}
        >
          <div
            style={{
              height: "26vh",
              width: "20vw",
              marginTop: "16px",
              marginLeft: "18px",
            }}
          >
            <CountdownCircleTimer
              isPlaying={playing}
              duration={seconds + minutes * 60 + hours * 60 * 60}
              colors={["#FF6A6A"]}
              size={Math.min(
                200,
                (63 * window.innerWidth) / window.innerHeight
              )}
              onComplete={onTimerComplete}
            >
              {({ remainingTime }) => (
                <span
                  style={{
                    color: "white",
                    fontSize: "30px",
                    fontFamily: "Roboto",
                    fontWeight: "600",
                    letterSpacing: "3px",
                  }}
                >
                  {toHoursAndMinutes(remainingTime)}
                </span>
              )}
            </CountdownCircleTimer>
          </div>
        </div>
        <div
          style={{
            width: "35vw",
            textAlign: "center",
            backgroundColor: "#1E2343",
            marginLeft: "-20px",
          }}
        >
          <div
            style={{
              color: "#949494",
              display: "flex",
              fontSize: "20px",
              gap: "10px",
              justifyContent: "space-evenly",
              fontFamily: "Roboto",
              backgroundColor: "#1E2343",
              marginTop: "-10px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                padding: "6px",
                backgroundColor: "#1E2343",
              }}
            >
              <p style={{ backgroundColor: "#1E2343" }}>Hours</p>
              <img alt="up"
                style={{
                  width: "15px",
                  height: "12px",
                  backgroundColor: "#1E2343",
                  marginTop: "15px",
                }}
                onClick={increaseHour}
                src={up}
              />
              <p
                style={{
                  backgroundColor: "#1E2343",
                  color: "white",
                  fontFamily: "Roboto",
                }}
              >
                {hours}
              </p>
              <img alt="down"
                style={{
                  width: "15px",
                  height: "12px",
                  backgroundColor: "#1E2343",
                }}
                onClick={decreaseHour}
                src={down}
              />
            </div>
            <div className="dots">
              <p style={{ backgroundColor: "#1E2343" }}>:</p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "6px",
                backgroundColor: "#1E2343",
              }}
            >
              <p style={{ backgroundColor: "#1E2343" }}>Minutes</p>
              <img alt="up"
                style={{
                  width: "15px",
                  height: "12px",
                  backgroundColor: "#1E2343",
                  marginTop: "15px",
                }}
                onClick={increaseMinute}
                src={up}
              />
              <p
                style={{
                  backgroundColor: "#1E2343",
                  color: "white",
                  fontFamily: "Roboto",
                }}
              >
                {minutes}
              </p>
              <img alt="down"
                style={{
                  width: "15px",
                  height: "12px",
                  backgroundColor: "#1E2343",
                }}
                onClick={decreaseMinute}
                src={down}
              />
            </div>
            <div className="dots">
              <p style={{ backgroundColor: "#1E2343" }}>:</p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "6px",
                backgroundColor: "#1E2343",
              }}
            >
              <p style={{ backgroundColor: "#1E2343" }}>Seconds</p>
              <img alt="up"
                style={{
                  width: "15px",
                  height: "12px",
                  backgroundColor: "#1E2343",
                  marginTop: "15px",
                }}
                onClick={increaseSecond}
                src={up}
              />
              <p
                style={{
                  backgroundColor: "#1E2343",
                  color: "white",
                  fontFamily: "Roboto",
                }}
              >
                {seconds}
              </p>
              <img alt="down"
                style={{
                  width: "15px",
                  height: "12px",
                  backgroundColor: "#1E2343",
                }}
                onClick={decreaseSecond}
                src={down}
              />
            </div>
          </div>
          <div
            onClick={() => setPlaying((prev) => !prev)}
            style={{
              backgroundColor: "#FF6A6A",
              borderRadius: "12px",
              height: "4.5vh",
              width: "30vw",
              color: "white",
              textAlign: "center",
              cursor: "pointer",
              marginTop: "1.5px",
              marginLeft: "34px",
            }}
          >
            {playing ? (
              <p className="start-stop">Stop</p>
            ) : (
              <p className="start-stop">Start</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;

//:
