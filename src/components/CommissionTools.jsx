import React from 'react'
import {useState} from 'react'
import AddCommissionModal from './AddCommissionModal.jsx'


export default function CommisionTools () {
  const [showAddModalStatus, setShowAddModalStatus] = useState(false)

  return (
    <div className="commission-tools-wrapper">
      <div className="commission-tools">
        <ul className="tools-list">
          
          <li className="commission-tool">
            heading
          </li>
          
          <li className="commission-tool"
            onClick={()=>{setShowAddModalStatus(true);}}>
            <i className="far fa-plus-square"></i> Add
          </li>
          
          <li className="commission-tool">
            <i className="far fa-minus-square"></i> Remove
          </li>
          
          <li className="commission-tool">
            refresh
          </li>
        
        </ul>
        <AddCommissionModal
          show={showAddModalStatus}
          onHide={()=>{setShowAddModalStatus(false)}}
        />
      </div>
    </div>
  )
}