import '../assets/css/App.css'
import React, { Component } from 'react'
import {ipcRenderer} from 'electron'

export default class TestButton extends Component {
  constructor(props){
    super(props)

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleMessageFromMain = this.handleMessageFromMain.bind(this)
    this.handleItemsList = this.handleItemsList.bind(this)
  }
  componentDidMount(){
    ipcRenderer.on('button-click-received', this.handleMessageFromMain)
    ipcRenderer.on('items-list', this.handleItemsList)
  }
  componentWillUnmount() {
    ipcRenderer.removeListener('button-click-received')
    ipcRenderer.removeListener('items-list')
  }

  handleButtonClick(){
    console.log('button click')
    const testStoreItem = {
      name: 'Bob',
      address: 'none of your business'
    }
    ipcRenderer.send('add-item', JSON.stringify(testStoreItem))
  }

  handleMessageFromMain(event, arg){
    const unpackedArg = JSON.parse(arg)
    console.log('handle message from main', unpackedArg)
  }

  handleItemsList(event, arg){
    const unpackedArg = JSON.parse(arg)
    console.log('handle message from main', unpackedArg)
  }

  render() {
    return (
        <button className="test-button" onClick={()=> this.handleButtonClick()}>click me</button>
    )
  }
}