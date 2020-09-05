import React from 'react'
import CommissionItem from './CommissionItem.jsx'

export default function CommissionList () {
  const commissionList = [
    {
      id: 1,
      date: '5/25/2020',
      agent: 'Bob Hardboil',
      address: '12546 Viewpoint Dr, Pasadena CA 91064',
      price: 5000000,
      totalCommissionRate: 2.5,
      kpCommissionRate: .5,
      agentCommissionRate: 2,
      tcFee: 500,
      otherAgentFees: [
        {
          feeName: 'taxes',
          feeCost: 20
        },
        {
          feeName: 'services',
          feeCost: 100
        }
      ],
      notes: 'This transaction was a "delight" /sarcasm'
    },
    {
      id: 2,
      date: '5/27/2020',
      agent: 'Judy Wrangler',
      address: '82 Brance, Los Angeles CA 91054',
      price: 300000,
      totalCommissionRate: 2.5,
      kpCommissionRate: .5,
      agentCommissionRate: 2,
      tcFee: 500,
      otherAgentFees: [
        {
          feeName: 'services',
          feeCost: 100
        }
      ],
      notes: 'This transaction was wonderful'
    },
    {
      id: 3,
      date: '5/25/2020',
      agent: 'Cecil Prusinski',
      address: '12546 Viewpoint Dr, Pasadena CA 91064',
      price: 5000000,
      totalCommissionRate: 2.5,
      kpCommissionRate: .5,
      agentCommissionRate: 2,
      tcFee: 500,
      otherAgentFees: [
        {
          feeName: 'taxes',
          feeCost: 20
        },
        {
          feeName: 'services',
          feeCost: 100
        }
      ],
      notes: 'This transaction was a "delight" /sarcasm'
    }
  ]
  return(
    <div className="commission-list">
      {
        commissionList.map((commission)=>{
          return  (<CommissionItem
            key={commission.id}
            id={commission.id}
            date={commission.date}
            agent={commission.agent}
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