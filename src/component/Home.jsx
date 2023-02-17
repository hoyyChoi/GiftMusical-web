import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid";
import styled from 'styled-components';






const Home = () => {

    const arr ={
        title: 'dfasf',
        date: '22-02-11',
        completed: true,
        color: true ? '#E74C3C' : '#ABEBC6',
      }

    const handleDateClick = (arg)=>{
        alert(arg.dateStr)
    }

  return (
    <div style={{width:"900px"}}>
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
            console.log(e.event)
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

export default Home