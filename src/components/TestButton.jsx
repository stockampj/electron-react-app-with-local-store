import '../assets/css/App.css'
import React, { Component, useEffect } from 'react'
import {ipcRenderer} from 'electron'

export default function TestButton() {

  useEffect(()=>{
    ipcRenderer.on('button-click-received', handleMessageFromMain)
    ipcRenderer.on('items-list', handleItemsList)
    return ()=>{
      ipcRenderer.removeListener('button-click-received', handleMessageFromMain)
      ipcRenderer.removeListener('items-list', handleItemsList)
    }
  })

  function handleButtonClick(){
    console.log('button click')
    const testStoreItem = {
      name: 'Bob',
      address: 'none of your business'
    }
    ipcRenderer.send('add-item', JSON.stringify(testStoreItem))
  }

  function handleMessageFromMain(event, arg){
    const unpackedArg = JSON.parse(arg)
    console.log('handle message from main', unpackedArg)
  }

  function handleItemsList(event, arg){
    const unpackedArg = JSON.parse(arg)
    console.log('handle message from main', unpackedArg)
  }

  return (
      <button className="test-button" onClick={()=> handleButtonClick()}>click me</button>
  )
}