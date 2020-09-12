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

  const otherCostsExist = (otherAgentFees.length>0) ? true : false
  const totalCost = ()=>{
    let total = 0
    if (otherCostsExist){
      otherAgentFees.map(fee=>{total += fee.feeCost})
    }
    return total
  }

  const otherFeesDiv = () => {

    const otherFeesExpanded = otherAgentFees.map(fee=>{
      if(otherCostsExist){
        return(
          <div className="expanded-other-fee" key={fee.feeName}>
            <div>{`${fee.feeName}: `}</div>
            <div>{`$ ${fee.feeCost}`}</div>
          </div>
        )
      } else {
        return null;
      }
    })
    return (
      <div className="other-agent-fees" >
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

  const agentColumnDiv = () => agents.map((agent)=>{
    return (
      <div key={agent.name} className="agent-column">
        <div className="agent-name data-item">{agent.name}</div>
        
        <div className="data-item spacer">#</div>
        <div className="data-item spacer">#</div>

        <div className="data-item">
          <div>$ {((price*agentCommissionRate*0.01*agent.commissionSplit)).toLocaleString('en-US')}</div>
        </div>

        <div className="data-item">
          <div>$ {((tcFee*agent.commissionSplit)).toLocaleString('en-US')}</div>
        </div>

        <div className="data-item">
          <div>$ {((totalCost()*agent.commissionSplit)).toLocaleString('en-US')}</div>
        </div>
      </div>
    )
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

        <div className="money-breakdown">
          
          <div className="total-and-agent">

            <div className="money-column">

              <div className="data-item">
                <div className="data-label">Price</div>
                <div>$ {price.toLocaleString('en-US')}</div>
              </div>

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

              <div className="data-item">
                <div className="data-label">TC Fee</div>
                <div>$ {tcFee.toLocaleString('en-US')}</div>
              </div>

              <div className="data-item">
                <div className="data-label">Other Fees</div>
                  {otherFeesDiv()}
              </div>
              
            </div>

            <div className="agent-breakdown">
                {agentColumnDiv()}
            </div>
          
          </div>

          <div className="commission-buttons">
            <button className="commission-edit-button">
              <i className="fas fa-edit"></i> Edit
            </button>
          </div>

        </div>



        <div className="notes-row">

          <div className="">
            <div className="data-label">Notes</div>
            <div>{notes}</div>
          </div>
        
        </div>

      </div>
    </div>
  )
}