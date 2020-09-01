import '../assets/css/App.css'
import React, { Component } from 'react'
// import {ipcRenderer} from 'electron'
import TestButton from './TestButton.jsx'
import AgentView from './AgentView.jsx'

function App() {

    return (
      <div>
        <TestButton/>
        <AgentView/>
      </div>
    )
  }

export default App
