import '../assets/css/App.css'
import React, { Component } from 'react'
import {ipcRenderer} from 'electron'



class App extends Component {

  componentDidMount(){
    ipcRenderer.on('button-click-received', ()=>{
      console.log("main to renderer success")
    })
  }
  componentWillUnmount() {
    ipcRenderer.removeListener('button-click-received')
  }

  handleButtonClick(){
    console.log('clicked button')
    ipcRenderer.send('button-clicked')
  }


  render() {
    return (
      <div>
        <h1>Hello, Electron!</h1>

        <button onClick={()=> this.handleButtonClick()}>click me</button>
      </div>
    )
  }
}

export default App
