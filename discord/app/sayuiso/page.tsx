"use client";
import "./layout.css";

import Clock from "@/components/ui/clock";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (time === null) return null;

  console.log(time);

  return (
    <>
        <Clock time={time} />
      <div className="chat-container">
        <div className="tabs">
          <button className="tab-button">すべて表示</button>
        </div>
        <div className="chat-display">
          <div className="system-message">緊急警報発令。</div>
          <div className="system-message">大規模作戦を開始します。</div>
          <div className="chat-message">気が遠くなりそう</div>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="周囲に発言" />
          <button className="toggle-dropdown">▽</button>
        </div>
        <div className="buttons">
          <button className="icon-button">🗨️</button>
          <button className="icon-button">📷</button>
          <button className="icon-button">👤</button>
          <button className="icon-button">👥</button>
          <button className="icon-button">📧</button>
          <button className="icon-button">➡️</button>
          <button className="send-button">発言</button>
          <button className="icon-button">⚙️</button>
          <button className="icon-button">🗂️</button>
        </div>
      </div>
    </>
  );
}
