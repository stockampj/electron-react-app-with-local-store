import '../assets/css/App.css'
import React, { Component } from 'react'
// import {ipcRenderer} from 'electron'
import TestButton from './TestButton.jsx'

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <TestButton/>
      </div>
    )
  }
}

export default App
