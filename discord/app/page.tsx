"use client";
import "./layout.css";

export default function Home() {
  return (
    <>
      <div className="chat-container">
        <div className="tabs">
          <button className="tab-button">すべて表示</button>
        </div>
        <div className="chat-display">
          <div className="system-message">緊急警報発令。</div>
          <div className="system-message">緊急警報発令。惑星ナベリウス上空にて、【</div>
          <div className="system-message">深遠なる闇】の反応が増大しつつあります。</div>
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
