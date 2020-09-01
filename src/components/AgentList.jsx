import React from 'react'

export default function AgentList (props){

  const {agentList} = props
  console.log(agentList)

  return (
    <div>
        <ul id="Agent-List" className="Agent-List">
          {agentList !== false &&
          agentList.map(agent =>{
            return  <li key={agent.id} id={agent.id}>{agent.name}</li>
          })}
      </ul>
    </div>
  )
}