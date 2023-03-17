import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import ChangeSchedule from './ChangeSchedule';

const PreModal = (props) => {
    const [show,setShow] = useState(false)

  const create = ()=>{
    setShow(true)
  }

  const close =()=>{
    props.setModalShow(false)
  }

  return (
    <Modal
        
    {...props}
    size="sm"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Title id="contained-modal-title-vcenter" style={{color:"black",margin:'auto',paddingTop:'10px'}}>
           <h3>일정</h3>
    </Modal.Title>
    <Modal.Body>
        <div style={{display:'flex',justifyContent:'space-around'}} className="modal-body modalBtnContainer-modifyEvent">
            <button type="button" className="btn btn-primary" id="updateEvent" onClick={create}>생성</button>
            <button style={{backgroundColor:'red',border:'1px solid red'}} type="button" className="btn btn-primary" id="updateEvent" onClick={close} >아니요</button>
        </div>
    </Modal.Body>
    <ChangeSchedule show={show} onHide={() => setShow(false)}  setShow={setShow} setModalShow={props.setModalShow} state={props.state} setState={props.setState} />
  </Modal>
  )
}

export default PreModal