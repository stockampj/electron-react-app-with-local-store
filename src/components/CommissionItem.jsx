import React, { useImperativeHandle } from 'react'
import {useState} from 'react'
import AddCommissionModal from './AddCommissionModal.jsx'


export default function CommissionItem (props){

  const [selectedItem, setselectedItem] = useState(false)
  const [otherFeesShown, setOtherFeesShown] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  const  {
    id,
    date,
    agents,
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

  const otherFeesDiv = () => {
    const otherCostsExist = (otherAgentFees.length>0) ? true : false
    const totalCost = ()=>{
      let total = 0
      if (otherCostsExist){
        otherAgentFees.map(fee=>{total += fee.feeCost})
      }
      return total
    }

    const otherFeesExpanded = otherAgentFees.map(fee=>{
      if(otherCostsExist){
        return(
          <div className="expanded-other-fee" key={fee.feeName}>
            <div>{fee.feeName}</div>
            <div>{`$ ${fee.feeCost}`}</div>
          </div>
        )
      } else {
        return null;
      }
    })
    return (
      <div className="other-agent-fees">
        <div className="other-agent-fees-collapsed"
          onMouseEnter={()=>{
            if(otherCostsExist){setOtherFeesShown(true)}
          }}
          onMouseLeave={()=>setOtherFeesShown(false)}
        >
          {`$ ${totalCost()}`}
        </div>
        {(otherFeesShown) && (
          <div className="other-agent-fees-expanded">
            {otherFeesExpanded}
          </div>
        )}
      </div>
    )
  }

  const agentNameDiv = () => agents.map((agent)=>{
    return (<div key={agent} className="agent-name">{agent}</div>)
  })

  return (
    <div className={`commission-item`} id={`commision-id:${id}`}>
      <div className={`commission-short-view ${selectedClass}`} onClick={()=>{handleExpandedViewToggle()}}>
        <div className="short-view-subsection date-agent">
          <div className="data-item agent-name">{date}</div>
          
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
            <div className="data-label">Other Fees</div>
            <div>
              {otherFeesDiv()}
            </div>
          </div>
          
          <button className="commission-edit-button">
            <i className="fas fa-edit"></i> Edit
          </button>
        </div>

        <div className="data-item agent-names">
          {agentNameDiv()}
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