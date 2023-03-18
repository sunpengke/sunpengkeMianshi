import React, { useState, useEffect, useRef } from "react";
import "./big.css";
export default function Big() {
  const [timer1, setTimer1] = useState(3600);
  let intervalHandle = useRef();
  const handleNum = (str) => {
    return String(Math.floor(str)).length === 1
      ? "0" + Math.floor(str)
      : Math.floor(str);
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
    <div className="big-container">
      <div className="left">
        <div className="left_title">Enjoy now your favorite brands with</div>
        <div className="left_off">30% off</div>
      </div>
      <div className="right">
        <div className="right_daojishi">
          <span className="dao_name">Ends in</span>
          <span className="shijian">{handleNum((timer1 / 60 / 60) % 24)}</span>
          <span>h</span>
          <span className="shijian">{handleNum(timer1 / 60)}</span>
          <span>m</span>
          <span className="shijian">{handleNum((timer1 % 60) % 24)}</span>
          <span>s</span>
        </div>
        <div className="right_dazhe">
          <div className="right_dazhe_left">
            <div className="title1">30%</div>
            <div className="title2">OFF</div>
          </div>
          <div className="right_dazhe_right">
            <div className="text1">Welcome Coupon</div>
            <div className="text2">Aplicable to all items </div>
            <div className="text3">
              Min. order 10€. Valid for 30 days from now.
            </div>
            <div className="text4">¡Lo quiero!</div>
          </div>
        </div>
      </div>
    </div>
  );
}
