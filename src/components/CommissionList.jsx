import React from 'react'
import CommissionItem from './CommissionItem.jsx'
import tempCommissionData from '../backend/TempCommissionData'

export default function CommissionList () {
  const commissionList = tempCommissionData
  return(
    <div className="commission-list">
      {
        commissionList.map((commission)=>{
          return  (<CommissionItem
            key={commission.id}
            id={commission.id}
            date={commission.date}
            agents={commission.agents}
            address={commission.address}
            price={commission.price}
            totalCommissionRate={commission.totalCommissionRate}
            kpCommissionRate={commission.kpCommissionRate}
            agentCommissionRate={commission.agentCommissionRate}
            tcFee={commission.tcFee}
            otherAgentFees={commission.otherAgentFees}
            notes={commission.notes}
          />
          )
        })
      }
    </div>
  )
}