import React, { useEffect,useState} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin,{ Draggable } from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid";
import styled from 'styled-components';






const Calendar = () => {

    const arr ={
        title: 'dfasf',
        date: '22-02-11',
        completed: true,
        color: true ? '#E74C3C' : '#ABEBC6',
      }

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
            title: "All-day event",
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
        alert(arg.dateStr)
    }

    // const renderEventContent =(arg)=>{
    //   alert(arg.dateStr)
    // }


    useEffect(()=>{   
      let draggableEl = document.getElementById("external-events");
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          let id = eventEl.dataset.id;
          let title = eventEl.getAttribute("title");
          let color = eventEl.dataset.color;
          let custom = eventEl.dataset.custom;

          return {
            id: id,
            title: title,
            color: color,
            custom: custom,
            create: true
          };
        }
      });
    },[])

  return (
    <div style={{display:"flex",}}>
      <div style={{width:"900px",margin:"30px",marginLeft:"120px",}}>
          <FullCalendar
          plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
          headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
          initialView="dayGridMonth"
          selectable={true}
          editable={true}
          selectMirror={true}
          dayMaxEvents={true}
          titleFormat={{ year: 'numeric', month: 'short' }}
          // eventContent={renderEventContent}
          dateClick={handleDateClick}
          eventClick={(e) => {
              console.log(e.event._def.title)
            }}
          events={[
              { title: 'event 1', date: '2023-02-12' },
              { title: 'event 2', date: '2023-02-22' }
          ]}
          />
          <PositionBtn>
             zzzzzz
          </PositionBtn>
      </div>
      <div id="external-events" style={{width:"200px",margin:'auto'}}>
      {/* add event 드래그 목록 출력 배열함수 */}
      {state.externalEvents.map((event) => (
        <div
          className="fc-event fc-h-event mb-1 fc-daygrid-event fc-daygrid-block-event p-2"
          title={event.title}
          data-id={event.id}
          data-color={event.color}
          data-custom={event.custom}
          key={event.id}
          style={{
            backgroundColor: event.color,
            borderColor: event.color,
            cursor: "pointer"
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