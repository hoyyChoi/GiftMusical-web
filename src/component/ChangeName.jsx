import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';

const ChangeName = (props) => {

    
  return (
    <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{color:"black"}}>
            <input  type="text" placeholder={props.name} onChange={(e)=>props.setTitle(e.currentTarget.value)}></input>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          zzzzzzzz
        </Modal.Body>
      </Modal>
  )
}

export default ChangeName