import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';

const ChangeName = (props) => {
    
    const selectList = [["#D25565",'빨간색'],["#9775fa",'보라색'],["#ffa94d",'주황색'],["#74c0fc",'파란색'],["#f06595",'핑크색'],["#63e6be",'연두색'],["#a9e34b",'초록색'],["#4d638c",'남색'],["#495057",'검정색']];

    const [update,setUpdate] = useState('')
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [sortOption,setSortOption] = useState("sort")
    const [Selected, setSelected] = useState("#D25565");

    const titleUpdate = ()=>{
        let newEvent = {
            id: props.schedule.id,
            title: title,
            color: Selected,
            custom: body
          };
      
          props.setState((state) => {
            return {
              ...state,
              externalEvents:state.externalEvents.concat(newEvent)
            };
          });
    }

    const option =(opt)=>{
        setSortOption(opt)
    
        if(opt==='popularity(L)'){
          console.log('a')
        }
        else if(opt==='popularity(H)'){
            console.log('b')
        }
        else if(opt==="vote(L)"){
            console.log('c')
        }
        else if(opt==="vote(H)"){
            console.log('d')
        }
      }

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };
    
  return (
    <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{color:"black"}}>
            <input  type="text" defaultValue={props.name} onChange={(e)=>setTitle(e.currentTarget.value)}></input>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-body">

            <div className="row">
                <div className="col-xs-12">
                    <label className="col-xs-4" for="edit-desc">설명</label>
                    <textarea style={{width:"260px"}} rows="4" cols="50" className="inputModal" name="edit-desc"
                        id="edit-desc" onChange={(e)=>setBody(e.currentTarget.value)}></textarea>
                </div>
            </div>
            <select onChange={handleSelect} value={Selected}>
                {selectList.map((item) => (
                <option value={item[0]} key={item[0]}>
                {item[1]}
                </option>
                ))}                                                   
            </select>
            <hr />
            <div style={{width:"250px",height:'30px', backgroundColor:`${Selected}`}}></div>
            <p>
                Selected: <b>{Selected}</b>
            </p>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" menuVariant='dark'>
                    {sortOption}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>option('popularity(L)')}>popularity(L)</Dropdown.Item>
                    <Dropdown.Item onClick={()=>option('popularity(H)')}>popularity(H)</Dropdown.Item>
                    <Dropdown.Item onClick={()=>option('vote(L)')}>vote(L)</Dropdown.Item>
                    <Dropdown.Item onClick={()=>option('vote(H)')}>vote(H)</Dropdown.Item>
                    <Dropdown.Item onClick={()=>option('ReleaseDay')}>Release-Day</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
            
            <div className="modal-footer modalBtnContainer-modifyEvent">
                <button type="button" className="btn btn-default" >닫기</button>
                <button type="button" className="btn btn-danger" id="deleteEvent">삭제</button>
                <button type="button" className="btn btn-primary" id="updateEvent" onClick={titleUpdate}>저장</button>
            </div>
        </Modal.Body>
      </Modal>
  )
}

export default ChangeName