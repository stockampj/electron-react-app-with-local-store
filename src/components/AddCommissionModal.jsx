import React from 'react'
import Modal from 'react-bootstrap/Modal';

export default function AddCommissionModal({show, onHide}){

  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="add-commission-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="awesome-app-modal">
            New Transaction 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Happy Fun Time
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* {submitButton()} */}
          <button
            className="btn btn-primary"
            onClick={()=>{
              onHide()
            }}
          >
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}