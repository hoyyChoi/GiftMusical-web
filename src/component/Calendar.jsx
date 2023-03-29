import { useEffect,useState,useRef} from 'react'
import FullCalendar from '@fullcalendar/react'  // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin,{ Draggable } from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid";
import styled from 'styled-components';
import '../../Calendar.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PreModal from './PreModal';
import { useDispatch, useSelector } from 'react-redux';
import ErrorModal from './ErrorModal';


// 기능 - 날짜 더블클릭시, 메모장 기능
//  - 이벤트 더블클릭시, 이름 변경 및 커스텀 생성가능
// 

// 2023.3.13
// 드래그 하면 아밴트 생성 되게 만들어 놓음
// -> 드래그 했을때 모달 창으로 이벤트 상세 이름 및 추가적 내용 볼 수 있게
// 추가적으로 +버튼 누르면 이벤트 수동으로 날짜 체크해서 넣을 수 있게 끔 (일단 나중에)_
// event 여러개 넣었을때 칸 자동으로 늘어나게 하는 법 



const Calendar = () => {

      const [modalShow,setModalShow] = useState(false)
      const [error,setError] = useState(false)
      const [change,setChange] = useState(false)
      const [currentId, setCurrentId] = useState(1)
      const [start,setStart] = useState('')
      const [end,setEnd] = useState('')
      const [descrition,setDescription] = useState('')
      
      
      let dispatch = useDispatch()
      let custom = useSelector(state=>state.descrition)
      let auth = useSelector(state=>state.auth)

      const [state, setState] = useState({
        calendarEvents: [
          {
            scheduleId: 0,
            title: "good afternoon",
            color: "#062aab",
            'start': "2023-03-12",
            'end': "2023-03-16",
            memo: "questo è un campo custom"
          },
          {
            scheduleId: 1,
            title: "Timed event",
            color: "#0097a7",
            'start': "2023-03-01",
            'end': "2023-03-04",
            memo: "custom stuff"
          }
        ]
      });

    const addDragEvent =(e)=>{
      console.log(e)
      if(auth === true){
        setStart(e.startStr)
        setEnd(e.endStr)
        setCurrentId(currentId+1)
        setModalShow(true)
      }else{
        setError(true)
      }
    }

    const hoverEvent = (e)=>{
      setDescription(e.event._def.extendedProps.custom)
      console.log(descrition)
    }

    useEffect(()=>{
      dispatch({type:'create',payload:{start,end,currentId}})
      dispatch({type:'seeDescription',payload:{descrition}})
    },[start,descrition])


  return (
    <div style={{display:"flex",}}>
      <div style={{minWidth:"1100px",margin:"auto",marginTop:'40px'}} className={change ? "shine" : ""}>
          <FullCalendar 
          plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
          headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
          initialView="dayGridMonth"
          selectable={true}
          // eventMouseEnter={(e)=>hoverEvent(e)}   이거 이밴트 호버했을때 나오는 속성
          select={(e)=>{
            addDragEvent(e)
          }}
          unselect={(e)=>console.log(e)}
          editable={change}
          dayMaxEvents={true}
          droppable={true}
         titleFormat={{ month: 'long' }}
          //dateClick={handleDateClick}
          eventClick={(e) => {
              console.log(e)
              if(change){
                for(let i=0; i<state.calendarEvents.length; i++){
                  if(state.calendarEvents[i].title === e.event._def.title){
                    if(confirm("'"+ e.event._def.title +"' 매니저의 일정을 삭제하시겠습니까 ?")){
                      // 확인 클릭 시
                      e.event.remove();
                      state.calendarEvents.splice(i,1)
                      console.log(state.calendarEvents)
                    }
                  }
                }
              }
            }}
          events={state.calendarEvents}
          />



          <h1>{custom}</h1>
          <PreModal show={modalShow} onHide={() => setModalShow(false)}  setModalShow={setModalShow} state={state} setState={setState}/>
          <ErrorModal show={error} onHide={() => setError(false)}  setModalShow={setError}/>
          <button style={{height:'50px', width:'50px', borderRadius:"50%",backgroundColor:'orange'}} onClick={()=>setChange(true)}>수정</button>
        <button style={{height:'50px', width:'50px', borderRadius:"50%",backgroundColor:'green'}} onClick={()=>setChange(false)}>완료</button>

      </div>
      
      {/* <div id="external-events" style={{width:"200px",margin:'auto'}}>
        <input style={{ margin: "0 0 20px" , height:'50px', width:'50px', borderRadius:"50%",backgroundColor:'skyblue',}}
            type="submit"
            name="name"
            onClick={addEvent}
            value="add"
          />
      {state.externalEvents.map((event) => (
        <div
          className="fc-event fc-h-event mb-1 fc-daygrid-event fc-daygrid-block-event p-2 "
          title={event.title}
          data-id={event.id}
          color={event.color}
          custom={event.custom}
          key={event.id}
          style={{
            backgroundColor: event.color,
            borderColor: event.color,
            cursor: "pointer",
          }}
        >
          <div className="fc-event-main">
            <div>
              <strong>{event.title}</strong>
            </div>
            {event.custom}
          </div>
        </div>
      ))}

        </div> */}
    </div>

    
  )
}

const PositionBtn = styled.div`
  position: fixed;
  top: 80%;
  right: 10px;
  z-index: 10;
  @media only screen and (max-width: 768px) {
    top: 70%;
    left: 10px;
    & p {
      display: none;
    }
  }
`;

export default  Calendar