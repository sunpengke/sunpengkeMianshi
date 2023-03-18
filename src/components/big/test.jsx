import React, { useState, useEffect, useRef } from "react";
import "./App.css";
const APP = () => {
  const [timer1, setTimer1] = useState(3600);
  let intervalHandle = useRef();
  const handleNum = (str) => {
    return (
      (String(Math.floor(str)).length === 1
        ? "0" + Math.floor(str)
        : Math.floor(str)) + ":"
    );
  };
  useEffect(() => {
    if (timer1 > 0) {
      intervalHandle.current = setInterval(() => {
        setTimer1((timer1) => {
          return timer1 > 0 ? timer1 - 1 : 0;
        });
      }, 1000);
    }
    return () => {
      clearInterval(intervalHandle.current);
    };
  }, []);
  useEffect(() => {
    if (timer1 === 0) {
      clearInterval(intervalHandle.current);
    }
  }, [timer1]);
  return (
    <div className="box">
            
      <div>
                <div>          ewretrytyutiuyu tyuiyikuoluio       </div>
                <div>          30% off       </div>
              
      </div>
            
      <div>
        {handleNum((timer1 / 60 / 60) % 24) +
          handleNum(timer1 / 60) +
          handleNum(timer1 % 60)}
        <br />
      </div>
          
    </div>
  );
};

export default APP;
