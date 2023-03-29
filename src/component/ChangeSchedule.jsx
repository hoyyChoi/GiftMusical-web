import React,{useEffect, useState} from 'react'
import Modal from 'react-bootstrap/Modal';
// import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';
import { Dropdown } from 'react-dropdown-now';
import { postSchedules } from '../remotes';

const ChangeSchedule = (props) => {
    
    const selectList = [["#D25565",'빨간색'],["#9775fa",'보라색'],["#ffa94d",'주황색'],["#74c0fc",'파란색'],["#f06595",'핑크색'],["#63e6be",'연두색'],["#a9e34b",'초록색'],["#4d638c",'남색'],["#495057",'검정색']];
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [Selected, setSelected] = useState("#D25565");


    const start = useSelector(state=>state.start)
    const end = useSelector(state=>state.end)
    const currentId = useSelector(state=>state.currentId)

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };
    
    const check = ()=>{
      let newEvent = {
        id: currentId,
        title: title,
        color: Selected,
        start: start,
        end: end,
      }
      props.setState((state) => {
        return {
          ...state,
          calendarEvents:props.state.calendarEvents.concat(newEvent)
        };
      });
      

      props.setShow(false)
      props.setModalShow(false)
     
    }

    useEffect(()=>{
      postSchedules({
        "startAt" : "2023-03-03T00:00:00",
        "endAt" : "2023-03-05T00:00:00",
        "title" : "1회차 연습",
        "keywords" : [ "study", "money" ],
        "memo" : "first record"
      })
      .then((res)=>{
        console.log(res)
      }).catch(err=>console.log(err))
    },[])

    
  return (
    <Modal
        
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{color:"black",display:'flex',alignItems:'center'}}>
            <h3 style={{margin:'auto'}} >일정명</h3>
            <textarea type="text" defaultValue={props.name} className="inputModal input-title" name="edit-desc"
                        id="edit-desc"  onChange={(e)=>setTitle(e.currentTarget.value)}></textarea>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-body">

            <div className="row">
                <div className="col-xs-12">
                    {/* <label className="col-xs-4" for="edit-desc">설명</label> */}
                    <h3>상세설명</h3>
                    <textarea rows="4" cols="50" className="inputModal input-memo" name="edit-desc"
                        id="edit-desc" onChange={(e)=>setBody(e.currentTarget.value)}></textarea>
                </div>
            </div>
            <hr />
            <select className='optionColor' onChange={handleSelect} value={Selected}>
                {selectList.map((item) => (
                <option value={item[0]} key={item[0]}>
                {item[1]}
                </option>
                ))}                                                   
            </select>

            <div style={{width:"440px",height:'30px', backgroundColor:`${Selected}`,marginTop:'15px'}}></div>
        </div>
            
            <div className="modal-footer modalBtnContainer-modifyEvent">
                <button type="button" className="btn btn-primary" id="updateEvent" onClick={check}>저장</button>
            </div>
        </Modal.Body>
      </Modal>
  )
}

export default ChangeSchedule