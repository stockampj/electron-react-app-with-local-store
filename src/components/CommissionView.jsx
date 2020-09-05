import React from 'react'
import CommissionTools from './CommissionTools.jsx'
import CommissionList from './CommissionList.jsx'
import './CommissionStyles.css'

export default function CommissionView (){
  return (
    <div className="commission-view-wrapper">
      <div className="commission-view">
        <CommissionTools/>
        <CommissionList/>
      </div>
    </div>
  )
}
