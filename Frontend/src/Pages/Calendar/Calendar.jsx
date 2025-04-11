import { React, useState, useCallback } from 'react'
import CalendarComponent from '../../components/CalendarComponent'
import { Views } from 'react-big-calendar'
import moment from 'moment'
import './index.css'
import Task from '../../components/Task'


const events = [
  {
    start: moment("2025-04-21T10:00:00").toDate(),
    end: moment("2025-04-21T10:00:00").toDate(),
    id: 1,
    data: {
      name: "Finish concept art",
      status: "in progress",
    },
  },
  {
    start: moment("2025-04-24T10:00:00").toDate(),
    end: moment("2025-04-24T10:00:00").toDate(),
    id: 2,
    data: {
      name: "Start developing new level",
      status: "not started",
    },
  },
  {
    start: moment("2025-04-16T10:00:00").toDate(),
    end: moment("2025-04-16T10:00:00").toDate(),
    id: 3,
    data: {
      name: "Record music for boss battle",
      status: "done",
    },
  },
];

const components = {
  event: (task) => {
    const data = task?.event?.data;
    if(data) 
      return <Task taskProps={data}/>

    return null
  },
};


function Calendar() {
  const [date, setDate] = useState(new Date())
  const [view, setView] = useState(Views.MONTH)

  const onNavigate = useCallback((newDate) => setDate(newDate), [setDate])
  const onView = useCallback((newView) => setView(newView), [setView])
  
  return (
    <div>
      Calendar
      <div style={{height:'95vh', width:'75vw'}}>
        <CalendarComponent
          date={date} 
          events={events}
          onNavigate={onNavigate}
          onView={onView}
          view={view}
          components={components}
        />
      </div>
    </div>
  )
}

export default Calendar