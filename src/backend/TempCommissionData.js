const tempCommissionData = [
  {
    id: 1,
    date: '5/25/2020',
    agents: [
      'Bob Hardboil',
      'Sue Smith'
    ],
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
    agents: [
      'Judy Wrangler',
      'Sue Smith'
    ],
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
    agents: [
      'Cecil Prusinski',
    ],
    address: '12546 Viewpoint Dr, Pasadena CA 91064',
    price: 5000000,
    totalCommissionRate: 2.5,
    kpCommissionRate: .5,
    agentCommissionRate: 2,
    tcFee: 500,
    otherAgentFees: [
    ],
    notes: 'This transaction was a "delight" /sarcasm'
  }
]

module.exports = tempCommissionData