import React from 'react';
import './TopPanel.css';


export default function TopPanel() {
  return (
    <div className="top-panel-wrapper">
      <div className="top-panel">
        <h1 className="app-name">Commission Tracker <i className="fas fa-calculator"></i></h1>
      </div>
      <div className="top-panel-spacer"></div>
    </div>
  )
}