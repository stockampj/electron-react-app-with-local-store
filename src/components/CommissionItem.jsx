import React, { useImperativeHandle } from 'react'
import {useState} from 'react'
export default function CommissionItem (props){

  const [selectedItem, setselectedItem] = useState(false)

  const  {
    id,
    date,
    agent,
    address,
    price,
    totalCommissionRate,
    kpCommissionRate,
    agentCommissionRate,
    tcFee,
    otherAgentFees,
    notes
  } = props

  function handleExpandedViewToggle (){
    setselectedItem(!selectedItem)
  }
  const selectedClass = (selectedItem) ? 'selected-item' : ''
  const showClass = (selectedItem) ? '' : 'hide-expanded-view'



  return (
    <div className={`commission-item ${selectedClass}`} id={`commision-id:${id}`} onClick={()=>{handleExpandedViewToggle()}}>
      <div className="commission-short-view">
        <div className="commission-data">{date}</div>
        <div className="commission-data">{agent}</div>
        <div className="commission-data address">{address}</div>
      </div>
      <div className={`commission-expanded-view ${showClass}`}>
        <div className="commission-data">
          <div className="data-label">Price</div>
          <div>$ {price.toLocaleString('en-US')}</div>
        </div>
        <div className="commission-data">
            <div className="data-label">Total Commission ({totalCommissionRate}%)</div>
            <div>$ {((price*totalCommissionRate*0.01)).toLocaleString('en-US')}</div>
        </div>
        <div className="commission-data">
          <div className="data-label">KP Commission ({kpCommissionRate}%)</div>
          <div>$ {((price*kpCommissionRate*0.01)).toLocaleString('en-US')}</div>
        </div>
        <div className="commission-data">
          <div className="data-label">Agent Commission ({agentCommissionRate}%)</div>
          <div>$ {((price*agentCommissionRate*0.01)).toLocaleString('en-US')}</div>
        </div>
        <div className="commission-data">
          <div className="data-label">TC Fee</div>
          <div>$ {tcFee.toLocaleString('en-US')}</div>
        </div>
        <div className="commission-data">
          {/*<div className="data-label"> 
           </div><div>{otherAgentFees}</div>*/}
        </div>
        <div className="commission-data">
          <div className="data-label"></div>
          <div>{notes}</div>
        </div>
      </div>
    </div>
  )
}