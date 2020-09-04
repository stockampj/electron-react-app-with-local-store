import React from 'react';
import './TopPanel.css';


export default function TopPanel() {
  return (
    <div className="top-panel-wrapper">
      <div className="top-panel">
        <h1 className="app-name">Commission Tracker</h1>
        {/* <img  alt=""/> */}
      </div>
      <div className="top-panel-spacer"></div>
    </div>
  )
}