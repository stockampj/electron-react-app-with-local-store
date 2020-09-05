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
    <div className={`commission-item`} id={`commision-id:${id}`}>
      <div className={`commission-short-view ${selectedClass}`} onClick={()=>{handleExpandedViewToggle()}}>
        <div className="short-view-subsection date-agent">
          <div className="data-item">{date}</div>
          <div className="data-item">{agent}</div>
        </div>
        <div className="short-view-subsection address">
          <div className="data-item address">{address}</div>
        </div>
      </div>
      <div className={`commission-expanded-view ${showClass}`}>
        <div className="money-row">

            <div className="data-item">
              <div className="data-label">Price</div>
              <div>$ {price.toLocaleString('en-US')}</div>
            </div>

            <div className="commission-row">

              <div className="data-item">
                <div className="data-label">Total ({totalCommissionRate}%)</div>
                <div>$ {((price*totalCommissionRate*0.01)).toLocaleString('en-US')}</div>
              </div>

              <div className="data-item">
                <div className="data-label">KP ({kpCommissionRate}%)</div>
                <div>$ {((price*kpCommissionRate*0.01)).toLocaleString('en-US')}</div>
              </div>

              <div className="data-item">
                <div className="data-label">Agent ({agentCommissionRate}%)</div>
                <div>$ {((price*agentCommissionRate*0.01)).toLocaleString('en-US')}</div>
              </div>

            </div>

          <div className="data-item">
            <div className="data-label">TC Fee</div>
            <div>$ {tcFee.toLocaleString('en-US')}</div>
          </div>

          <div className="data-item">
            {/*<div className="data-label"> 
            </div><div>{otherAgentFees}</div>*/}
          </div>
        </div>

        <div className="notes-row">

          <div className="data-item">
            <div className="data-label">Notes</div>
            <div>{notes}</div>
          </div>
        
        </div>
      </div>
    </div>
  )
}