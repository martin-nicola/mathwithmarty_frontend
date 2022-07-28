import { Fragment } from "react";
import { Scheduler } from "@aldabil/react-scheduler";
import { RESOURCES } from "./data";

export default function Schedule() {

  const sendCall = (elem) => {
    console.log(elem)
  }

  const handleConfirm = async (event, action) => {
    if (action === "edit") {
      /** PUT event to remote DB */
    } else if (action === "create") {
      /**POST event to remote DB */
      console.log(event, action);
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

  const handleDelete = async (deletedId) => {
    // Simulate http request: return the deleted id
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(deletedId);
      }, 3000);
    });
  };

  return (
    <Fragment>
      <Scheduler
        view="week"
        day={null}
        month={null}
        remoteEvents={sendCall("hello")}
        onConfirm={handleConfirm}
        onDelete={handleDelete}
        events={[]}
        week={{
          weekDays: [0, 1, 2, 3, 4, 6],
          weekStartOn: 0,
          startHour: 17,
          endHour: 22,
          step: 60,
        }}
        resources={RESOURCES}
        resourceFields={{
          idField: "admin_id",
          textField: "title",
          subTextField: "mobile",
          avatarField: "title",
          colorField: "color"
        }}
        resourceViewMode={"tabs"}
        fields={[
          {
            name: "start",
            type: "input",
            config: { label: "Start", required: true, disabled: true}
          },
          {
            name: "end",
            type: "input",
            config: { label: "End", required: true, disabled: true}
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
            name: "title",
            type: "hidden"
          },
          {
            name: "description",
            type: "input",
            default: "Tutoring Session",
            config: { label: "Description", multiline: true, rows: 2, disabled: true }
          },
        ]}
      />
    </Fragment>
  );
}