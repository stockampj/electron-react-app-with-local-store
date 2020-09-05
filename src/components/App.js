import '../assets/css/App.css'
import React, { Component } from 'react'
// import {ipcRenderer} from 'electron'
import TestButton from './TestButton.jsx'
import AgentView from './AgentView.jsx'
import TopPanel from './TopPanel.jsx'
import CommissionView from './CommissionView.jsx'
import ReportView from './ReportView.jsx'

function App() {

    return (
      <div>
        {/* <TestButton/>
        <AgentView/> */}
        <TopPanel/>
        <CommissionView/>
        {/* <ReportView/> */}
      </div>
    )
  }

export default App
