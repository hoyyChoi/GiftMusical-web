import React, { useEffect,useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin,{ Draggable } from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid";
import styled from 'styled-components';
import ChangeName from './ChangeName';



// 기능 - 날짜 더블클릭시, 메모장 기능
//  - 이벤트 더블클릭시, 이름 변경 및 커스텀 생성가능
// 



const Calendar = () => {

      const [modalShow,setModalShow] = useState(false)
      const [change,setChange] = useState(false)

      const [schedule,setSchedule] = useState({
        id: 3433,
        title: "Timed event",
        color: "#333333",
        custom: "custom stuff"
      })

      const [state, setState] = useState({
        weekendsVisible: true,
        externalEvents: [
          { title: "약속 1", color: "#0097a7", id: 34432, custom: "점심약속" },
          { title: "약속 2", color: "#f44336", id: 323232 },
          { title: "약속 3", color: "#f57f17", id: 1111 },
          { title: "약속 4", color: "#90a4ae", id: 432432 }
        ],
        calendarEvents: [
          {
            id: 1,
            title: "good afternoon",
            color: "#388e3c",
            start: "2023-02-12",
            end: "2023-02-16",
            custom: "questo è un campo custom"
          },
          {
            id: 2,
            title: "Timed event",
            color: "#0097a7",
            start: "2023-02-01",
            end: "2023-02-04",
            custom: "custom stuff"
          }
        ]
      });

    const handleDateClick = (arg)=>{
        console.log(arg.dateStr)
        
    }

    // const renderEventContent =(arg)=>{
    //   console.log(arg.target)
    // }
    const addEvent = () => {
      setModalShow(true)
    };
    

    useEffect(()=>{   
      let draggableEl = document.getElementById("external-events");
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          let id = eventEl.dataset.id;
          let title = eventEl.getAttribute("title");
          let color = eventEl.getAttribute("color");
          let custom = eventEl.dataset.custom;
          return {
            id: id,
            title: title,
            color: color,
            custom: custom,
            create: true,

          };
        }


      });
      
    },[])

  return (
    <div style={{display:"flex",}}>
      <div style={{width:"900px",margin:"30px",marginLeft:"120px",}} className={change ? "shine" : ""}>
          <FullCalendar
          plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
          headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
          initialView="dayGridMonth"
          selectable={true}
          editable={change}
          //selectMirror={true}
          dayMaxEvents={true}
          droppable={true}
          titleFormat={{ year: 'numeric', month: 'short' }}
          dateClick={handleDateClick}
          eventClick={(e) => {
              console.log(e)
            }}
          events={state.calendarEvents}
          />
          <ChangeName show={modalShow} onHide={() => setModalShow(false)} schedule={schedule} setSchedule={setSchedule} state={state} setState={setState}/>
      </div>
      <div style={{ margin: "0 0 20px" }}>
          <input
            type="submit"
            name="name"
            onClick={addEvent}
            value="add external event"
          />
        </div>
      <div id="external-events" style={{width:"200px",margin:'auto'}}>
      {/* add event 드래그 목록 출력 배열함수 */}
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
        <button style={{height:'50px', width:'50px', borderRadius:"50%",backgroundColor:'orange'}} onClick={()=>setChange(true)}>수정</button>
        <button style={{height:'50px', width:'50px', borderRadius:"50%",backgroundColor:'green'}} onClick={()=>setChange(false)}>완료</button>
        </div>
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