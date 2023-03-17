import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


const ErrorModal = (props) => {
    
    const navigate = useNavigate()

  const close =()=>{
    props.setModalShow(false)
    navigate('/login')
  }

  return (
    <Modal
        
    {...props}
    size="sm"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Title id="contained-modal-title-vcenter" style={{color:"black",margin:'auto',paddingTop:'20px',}}>
           <h3>일정을 추가하려면 로그인을 하세요.!</h3>
    </Modal.Title>
    <Modal.Body>
        <div style={{display:'flex',justifyContent:'center'}} className="modal-body modalBtnContainer-modifyEvent">
            <button type="button" className="btn btn-primary" id="updateEvent" onClick={close} >확인</button>
        </div>
    </Modal.Body>
  </Modal>
  )
}

export default ErrorModal