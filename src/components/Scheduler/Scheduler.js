import React from 'react'
import { Scheduler } from "@aldabil/react-scheduler";

export default function Schedule() {

  const sendCall = (elem) => {
    console.log(elem)
  }

  const handleConfirm = async (event, action) => {
    if (action === "edit") {
      /** PUT event to remote DB */
    } else if (action === "create") {
      console.log(event)
      /**POST event to remote DB */
    }
    /**
     * Make sure to return 4 mandatory fields:
     * event_id: string|number
     * title: string
     * start: Date|string
     * end: Date|string
     * ....extra other fields depend on your custom fields/editor properties
     */
    // Simulate http request: return added/edited event
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          ...event,
          event_id: event.event_id || Math.random()
        });
      }, 3000);
    });
  };

  return (
    <div className="scheduler">
      <Scheduler

        view="week"
        
        day={null}
        
        month={null}
    
        week={{
          weekDays: [0, 1, 2, 3, 4, 6],
          weekStartOn: 0,
          startHour: 17,
          endHour: 22,
          step: 60,
        }}

        events={[
         
        ]}
      
        remoteEvents={sendCall("hello")}
        fields={[
          {
            name: "title",
            type: ""
          },
          {
            name: "start",
            type: "input",
            config: {
              disabled: true,
              label: "Start" 
            }
          },
          {
            name: "end",
            type: "input",
            config: {
              disabled: true,
              label: "End"
            }
          },
          {
            name: "end",
            type: "input",
            config: {
              disabled: true,
            }
          },
          {
            name: "course",
            type: "select",
            // Should provide options with type:"select"
            options: [
              { id: 1, text: "Grade 9 Math", value: 1 },
              { id: 2, text: "Grade 10 Math", value: 2 },
              { id: 3, text: "Grade 11 Functions", value: 3 },
              { id: 4, text: "Grade 12 Calculus", value: 4 }
            ],
            config: { label: "Course", required: true, errMsg: "Please select a course" }
          },
          {
            name: "tutor_id",
            type: "select",
            // Should provide options with type:"select"
            options: [
              { id: 1, text: "Marty", value: 1 },
              { id: 2, text: "Lexi", value: 2 }
            ],
            config: { label: "Tutor", required: true, errMsg: "Please select a tutor" }
          }
        ]}
        onConfirm={handleConfirm}
      />
    </div>
  )
}
