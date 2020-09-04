import '../assets/css/App.css'
import React, { Component } from 'react'
// import {ipcRenderer} from 'electron'
import TestButton from './TestButton.jsx'
import AgentView from './AgentView.jsx'
import TopPanel from './TopPanel.jsx'
import CommissionList from './CommissionList.jsx'
import ReportView from './ReportView.jsx'

function App() {

    return (
      <div>
        {/* <TestButton/>
        <AgentView/> */}
        <TopPanel/>
        <CommissionList/>
        <ReportView/>
      </div>
    )
  }

export default App
