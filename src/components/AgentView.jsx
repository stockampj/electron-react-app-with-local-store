import '../assets/css/App.css'
import React, {useEffect, useState} from 'react'
import AgentList from './AgentList.jsx'
import {ipcRenderer} from 'electron'

export default function AgentView() {

  const [agentList, setAgentList] = useState(false);

  useEffect(()=>{
    ipcRenderer.on('agents-list', handleAgentsList)
    console.log(agentList)
    return ()=>{
      ipcRenderer.removeListener('agents-list', handleAgentsList)
    }
  })
  
  function handleButtonClick(){
    console.log('button click')
    const testStoreItem = {
      name: 'Eric',
      address: 'none of your business'
    }
    ipcRenderer.send('add-agent', JSON.stringify(testStoreItem))
  }
  
  function handleMessageFromMain(event, arg){
    const unpackedArg = JSON.parse(arg)
    console.log('handle message from main', unpackedArg)
  }
  
  function handleAgentsList(event, agentsListJSON){
    setAgentList([...JSON.parse(agentsListJSON)])
    console.log(agentList)
  }
  
  if(agentList===false){
    ipcRenderer.send('get-agents')
    setTimeout(() => {
      console.log('hey')
    }, 5000);
  }

  return (
    <div>
      <button onClick={()=>{handleButtonClick()}}>Agent Button</button>

      <AgentList 
        agentList = {agentList} 
        onButtonClick = {handleButtonClick}
      />


    </div>
  )
}